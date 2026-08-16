///|
/// Returns the arithmetic mean of a non-empty array.
fn average(values : Array[Double]) -> Double raise @core.MetricError {
  if values.is_empty() {
    raise @core.EmptyInput(message="Cannot aggregate an empty metric series")
  }
  let mut total = 0.0
  for value in values {
    total += value
  }
  total / values.length().to_double()
}

///|
/// Returns the population standard deviation for fold-level observations.
fn standard_deviation(values : Array[Double], mean : Double) -> Double {
  if values.length() <= 1 {
    0.0
  } else {
    let mut squared = 0.0
    for value in values {
      let delta = value - mean
      squared += delta * delta
    }
    (squared / values.length().to_double()).sqrt()
  }
}

///|
/// Returns the smallest value in a non-empty array.
fn minimum(values : Array[Double]) -> Double raise @core.MetricError {
  if values.is_empty() {
    raise @core.EmptyInput(message="Cannot find a minimum of an empty series")
  }
  let mut result = values[0]
  for value in values[1:] {
    if value < result {
      result = value
    }
  }
  result
}

///|
/// Returns the largest value in a non-empty array.
fn maximum(values : Array[Double]) -> Double raise @core.MetricError {
  if values.is_empty() {
    raise @core.EmptyInput(message="Cannot find a maximum of an empty series")
  }
  let mut result = values[0]
  for value in values[1:] {
    if value > result {
      result = value
    }
  }
  result
}

///|
/// Collects all metric names appearing in any fold.
fn collect_metric_names(experiment : Experiment) -> Array[String] {
  let seen : Map[String, Bool] = Map([])
  for fold in experiment.folds {
    for name in fold.metric_names() {
      seen[name] = true
    }
  }
  let names : Array[String] = []
  for name, _ in seen {
    names.push(name)
  }
  names.sort()
  names
}

///|
/// Validates that an experiment is ready for fold aggregation.
pub fn validate_experiment(
  experiment : Experiment,
) -> Unit raise @core.MetricError {
  if experiment.model_name().is_empty() {
    raise @core.InvalidInput(message="Experiment model name must not be empty")
  }
  if experiment.task_type().is_empty() {
    raise @core.InvalidInput(message="Experiment task type must not be empty")
  }
  if experiment.fold_count() == 0 {
    raise @core.EmptyInput(message="Experiment must contain at least one fold")
  }
  if collect_metric_names(experiment).is_empty() {
    raise @core.EmptyInput(message="Experiment folds contain no metrics")
  }
}

///|
/// Aggregates an experiment's metrics across folds.
pub fn summarize(
  experiment : Experiment,
) -> ExperimentSummary raise @core.MetricError {
  validate_experiment(experiment)
  let values_by_metric : Map[String, Array[Double]] = Map([])
  for fold in experiment.folds {
    for name in fold.metric_names() {
      let value = fold.get_metric(name).unwrap()
      match values_by_metric.get(name) {
        Some(values) => values.push(value)
        None => values_by_metric[name] = [value]
      }
    }
  }
  let aggregate : Array[AggregateMetric] = []
  for name in collect_metric_names(experiment) {
    let values = values_by_metric[name]
    let mean = average(values)
    aggregate.push({
      name,
      mean,
      stddev: standard_deviation(values, mean),
      minimum: minimum(values),
      maximum: maximum(values),
      count: values.length(),
    })
  }
  {
    model_name: experiment.model_name(),
    task_type: experiment.task_type(),
    fold_count: experiment.fold_count(),
    metrics: aggregate,
    metadata: experiment.metadata,
  }
}

///|
/// Looks up an aggregate metric by name.
pub fn ExperimentSummary::get_metric(
  self : ExperimentSummary,
  name : String,
) -> AggregateMetric? {
  for metric in self.metrics {
    if metric.name == name {
      return Some(metric)
    }
  }
  None
}

///|
/// Returns all aggregate metric names in deterministic order.
pub fn ExperimentSummary::metric_names(
  self : ExperimentSummary,
) -> Array[String] {
  let names : Array[String] = []
  for metric in self.metrics {
    names.push(metric.name)
  }
  names.sort()
  names
}

///|
/// Returns a metric direction, defaulting to higher-is-better for score-like names.
pub fn direction_for_metric(name : String) -> MetricDirection {
  let lower = name.to_lower()
  if lower.contains("loss") ||
    lower.contains("error") ||
    lower.contains("mae") ||
    lower.contains("mse") ||
    lower.contains("rmse") ||
    lower.contains("mape") ||
    lower.contains("smape") ||
    lower.contains("dbi") {
    MetricDirection::LowerIsBetter
  } else {
    MetricDirection::HigherIsBetter
  }
}

///|
/// Compares two summaries over their common metrics.
pub fn compare(
  baseline : ExperimentSummary,
  candidate : ExperimentSummary,
  specs? : Array[MetricSpec] = [],
) -> ExperimentComparison raise @core.MetricError {
  if baseline.task_type != candidate.task_type {
    raise @core.InvalidInput(
      message="Cannot compare experiments across task types: " +
        baseline.task_type +
        " vs " +
        candidate.task_type,
    )
  }
  let rows : Array[ComparisonRow] = []
  for name in baseline.metric_names() {
    let baseline_metric = baseline.get_metric(name)
    let candidate_metric = candidate.get_metric(name)
    match (baseline_metric, candidate_metric) {
      (Some(base), Some(next)) => {
        let direction = match find_spec(specs, name) {
          Some(spec) => spec.direction()
          None => direction_for_metric(name)
        }
        let delta = next.mean - base.mean
        let relative_delta = if base.mean.abs() < @core.EPSILON {
          0.0
        } else {
          delta / base.mean * 100.0
        }
        let better = match direction {
          MetricDirection::HigherIsBetter => delta > @core.EPSILON
          MetricDirection::LowerIsBetter => delta < -@core.EPSILON
        }
        rows.push({
          metric_name: name,
          baseline_mean: base.mean,
          candidate_mean: next.mean,
          delta,
          relative_delta,
          candidate_better: better,
          direction,
        })
      }
      (_, _) => ()
    }
  }
  if rows.is_empty() {
    raise @core.InvalidInput(message="Experiments have no common metrics")
  }
  {
    baseline_name: baseline.model_name,
    candidate_name: candidate.model_name,
    task_type: baseline.task_type,
    rows,
  }
}

///|
fn find_spec(specs : Array[MetricSpec], name : String) -> MetricSpec? {
  for spec in specs {
    if spec.name() == name {
      return Some(spec)
    }
  }
  None
}

///|
/// Compares two model names using the toolchain's stable array ordering.
fn name_precedes(left : String, right : String) -> Bool {
  String::lexical_compare(left, right) < 0
}

///|
fn metric_score(
  summary : ExperimentSummary,
  name : String,
) -> Double raise @core.MetricError {
  match summary.get_metric(name) {
    Some(metric) => metric.mean
    None => raise @core.InvalidInput(message="Missing ranking metric: " + name)
  }
}

///|
/// Ranks summaries by a primary metric using deterministic model-name tie breaking.
pub fn rank(
  summaries : Array[ExperimentSummary],
  metric_name : String,
  direction : MetricDirection,
) -> Array[RankedExperiment] raise @core.MetricError {
  if summaries.is_empty() {
    raise @core.EmptyInput(message="Cannot rank an empty experiment list")
  }
  let used = Array::make(summaries.length(), false)
  let ranked : Array[RankedExperiment] = []
  for rank_index in 0..<summaries.length() {
    let mut best_index = -1
    for i in 0..<summaries.length() {
      if !used[i] {
        let should_take = if best_index < 0 {
          true
        } else {
          let current_score = metric_score(summaries[i], metric_name)
          let best_score = metric_score(summaries[best_index], metric_name)
          match direction {
            MetricDirection::HigherIsBetter =>
              current_score > best_score ||
              (
                current_score == best_score &&
                name_precedes(
                  summaries[i].model_name,
                  summaries[best_index].model_name,
                )
              )
            MetricDirection::LowerIsBetter =>
              current_score < best_score ||
              (
                current_score == best_score &&
                name_precedes(
                  summaries[i].model_name,
                  summaries[best_index].model_name,
                )
              )
          }
        }
        if should_take {
          best_index = i
        }
      }
    }
    used[best_index] = true
    let winner = summaries[best_index]
    ranked.push({
      rank: rank_index + 1,
      model_name: winner.model_name,
      score: metric_score(winner, metric_name),
      fold_count: winner.fold_count,
    })
  }
  ranked
}
