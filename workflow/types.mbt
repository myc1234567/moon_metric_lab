///|
/// Describes whether a larger or smaller metric value represents a better model.
pub(all) enum MetricDirection {
  HigherIsBetter
  LowerIsBetter
} derive(Debug, Eq)

///|
/// A metric definition used by comparison and release-quality gates.
pub(all) struct MetricSpec {
  name : String
  direction : MetricDirection
} derive(Debug, Eq)

///|
/// A single fold or seed evaluation produced by a model training job.
pub(all) struct FoldObservation {
  fold_id : Int
  metrics : Map[String, Double]
} derive(Debug, Eq)

///|
/// A model experiment containing reproducible fold-level observations.
pub(all) struct Experiment {
  model_name : String
  task_type : String
  folds : Array[FoldObservation]
  metadata : Map[String, String]
} derive(Debug, Eq)

///|
/// Aggregate statistics for one metric across all available folds.
pub(all) struct AggregateMetric {
  name : String
  mean : Double
  stddev : Double
  minimum : Double
  maximum : Double
  count : Int
} derive(Debug, Eq)

///|
/// A fold-aggregated experiment ready for comparison or release gating.
pub(all) struct ExperimentSummary {
  model_name : String
  task_type : String
  fold_count : Int
  metrics : Array[AggregateMetric]
  metadata : Map[String, String]
} derive(Debug, Eq)

///|
/// One row in a baseline-versus-candidate experiment comparison.
pub(all) struct ComparisonRow {
  metric_name : String
  baseline_mean : Double
  candidate_mean : Double
  delta : Double
  relative_delta : Double
  candidate_better : Bool
  direction : MetricDirection
} derive(Debug, Eq)

///|
/// A deterministic comparison of two aggregated experiments.
pub(all) struct ExperimentComparison {
  baseline_name : String
  candidate_name : String
  task_type : String
  rows : Array[ComparisonRow]
} derive(Debug, Eq)

///|
/// A release rule for one aggregated metric.
pub(all) struct GateRule {
  metric_name : String
  minimum : Double?
  maximum : Double?
  maximum_stddev : Double?
} derive(Debug, Eq)

///|
/// A failed release rule with the observed value and a human-readable reason.
pub(all) struct GateFailure {
  metric_name : String
  observed : Double
  reason : String
} derive(Debug, Eq)

///|
/// The result of applying release-quality rules to an experiment summary.
pub(all) struct QualityGate {
  gate_name : String
  passed : Bool
  failures : Array[GateFailure]
} derive(Debug, Eq)

///|
/// A ranked model summary for choosing a deployment candidate.
pub(all) struct RankedExperiment {
  rank : Int
  model_name : String
  score : Double
  fold_count : Int
} derive(Debug, Eq)

///|
/// Constructs a metric specification.
pub fn MetricSpec::new(
  name : String,
  direction : MetricDirection,
) -> MetricSpec {
  { name, direction }
}

///|
/// Returns a metric specification's name.
pub fn MetricSpec::name(self : MetricSpec) -> String {
  self.name
}

///|
/// Returns a metric specification's optimization direction.
pub fn MetricSpec::direction(self : MetricSpec) -> MetricDirection {
  self.direction
}

///|
/// Creates an empty fold observation.
pub fn FoldObservation::new(fold_id : Int) -> FoldObservation {
  { fold_id, metrics: Map([]) }
}

///|
/// Adds one metric to a fold observation.
pub fn FoldObservation::add_metric(
  self : FoldObservation,
  name : String,
  value : Double,
) -> Unit raise @core.MetricError {
  if name.is_empty() {
    raise @core.InvalidInput(message="Metric name must not be empty")
  }
  if value != value {
    raise @core.InvalidInput(message="Metric values must not be NaN")
  }
  self.metrics[name] = value
}

///|
/// Returns a fold identifier.
pub fn FoldObservation::fold_id(self : FoldObservation) -> Int {
  self.fold_id
}

///|
/// Returns a fold metric if it exists.
pub fn FoldObservation::get_metric(
  self : FoldObservation,
  name : String,
) -> Double? {
  self.metrics.get(name)
}

///|
/// Returns all metric names in deterministic order.
pub fn FoldObservation::metric_names(self : FoldObservation) -> Array[String] {
  let names : Array[String] = []
  for name, _ in self.metrics {
    names.push(name)
  }
  names.sort()
  names
}

///|
/// Creates an experiment with no fold results.
pub fn Experiment::new(model_name : String, task_type : String) -> Experiment {
  { model_name, task_type, folds: [], metadata: Map([]) }
}

///|
/// Appends a fold and rejects duplicate fold identifiers.
pub fn Experiment::add_fold(
  self : Experiment,
  fold : FoldObservation,
) -> Unit raise @core.MetricError {
  for existing in self.folds {
    if existing.fold_id() == fold.fold_id() {
      raise @core.InvalidInput(
        message="Duplicate fold identifier: " + fold.fold_id().to_string(),
      )
    }
  }
  self.folds.push(fold)
}

///|
/// Adds reproducibility metadata such as dataset, seed or split policy.
pub fn Experiment::add_metadata(
  self : Experiment,
  key : String,
  value : String,
) -> Unit raise @core.MetricError {
  if key.is_empty() {
    raise @core.InvalidInput(message="Metadata key must not be empty")
  }
  self.metadata[key] = value
}

///|
/// Returns the model name.
pub fn Experiment::model_name(self : Experiment) -> String {
  self.model_name
}

///|
/// Returns the task type.
pub fn Experiment::task_type(self : Experiment) -> String {
  self.task_type
}

///|
/// Returns the number of recorded folds.
pub fn Experiment::fold_count(self : Experiment) -> Int {
  self.folds.length()
}

///|
/// Creates a rule with no bounds. Bounds can be added fluently.
pub fn GateRule::new(metric_name : String) -> GateRule {
  { metric_name, minimum: None, maximum: None, maximum_stddev: None }
}

///|
/// Requires the metric to be at least `value`.
pub fn GateRule::with_minimum(self : GateRule, value : Double) -> GateRule {
  {
    metric_name: self.metric_name,
    minimum: Some(value),
    maximum: self.maximum,
    maximum_stddev: self.maximum_stddev,
  }
}

///|
/// Requires the metric to be at most `value`.
pub fn GateRule::with_maximum(self : GateRule, value : Double) -> GateRule {
  {
    metric_name: self.metric_name,
    minimum: self.minimum,
    maximum: Some(value),
    maximum_stddev: self.maximum_stddev,
  }
}

///|
/// Rejects unstable metrics whose fold standard deviation exceeds `value`.
pub fn GateRule::with_maximum_stddev(
  self : GateRule,
  value : Double,
) -> GateRule {
  {
    metric_name: self.metric_name,
    minimum: self.minimum,
    maximum: self.maximum,
    maximum_stddev: Some(value),
  }
}
