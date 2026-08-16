///|
/// Applies one release rule to one aggregate metric.
fn check_rule(rule : GateRule, metric : AggregateMetric) -> GateFailure? {
  match rule.minimum {
    Some(minimum) =>
      if metric.mean < minimum {
        return Some({
          metric_name: rule.metric_name,
          observed: metric.mean,
          reason: "mean is below minimum " + minimum.to_string(),
        })
      }
    None => ()
  }
  match rule.maximum {
    Some(maximum) =>
      if metric.mean > maximum {
        return Some({
          metric_name: rule.metric_name,
          observed: metric.mean,
          reason: "mean is above maximum " + maximum.to_string(),
        })
      }
    None => ()
  }
  match rule.maximum_stddev {
    Some(maximum_stddev) =>
      if metric.stddev > maximum_stddev {
        return Some({
          metric_name: rule.metric_name,
          observed: metric.stddev,
          reason: "stddev is above maximum " + maximum_stddev.to_string(),
        })
      }
    None => ()
  }
  None
}

///|
/// Evaluates release-quality rules against an experiment summary.
pub fn evaluate_gate(
  summary : ExperimentSummary,
  gate_name : String,
  rules : Array[GateRule],
) -> QualityGate raise @core.MetricError {
  if gate_name.is_empty() {
    raise @core.InvalidInput(message="Quality gate name must not be empty")
  }
  if rules.is_empty() {
    raise @core.EmptyInput(
      message="Quality gate must contain at least one rule",
    )
  }
  let failures : Array[GateFailure] = []
  let checked : Map[String, Bool] = Map([])
  for rule in rules {
    if rule.metric_name.is_empty() {
      raise @core.InvalidInput(
        message="Quality gate metric name must not be empty",
      )
    }
    if checked.contains(rule.metric_name) {
      raise @core.InvalidInput(
        message="Quality gate contains duplicate rule: " + rule.metric_name,
      )
    }
    checked[rule.metric_name] = true
    match summary.get_metric(rule.metric_name) {
      Some(metric) =>
        match check_rule(rule, metric) {
          Some(failure) => failures.push(failure)
          None => ()
        }
      None =>
        failures.push({
          metric_name: rule.metric_name,
          observed: 0.0,
          reason: "metric is missing from experiment summary",
        })
    }
  }
  { gate_name, passed: failures.is_empty(), failures }
}

///|
/// Returns true when the quality gate passed.
pub fn QualityGate::is_passed(self : QualityGate) -> Bool {
  self.passed
}

///|
/// Returns the number of failed rules.
pub fn QualityGate::failure_count(self : QualityGate) -> Int {
  self.failures.length()
}

///|
/// Performs a deployment decision: the candidate must pass the gate and improve
/// at least one requested metric without regressing a protected metric.
pub fn deployment_ready(
  comparison : ExperimentComparison,
  gate : QualityGate,
  protected_metrics : Array[String],
) -> Bool {
  if !gate.is_passed() {
    return false
  }
  let protected_metrics_set : Map[String, Bool] = Map([])
  for name in protected_metrics {
    protected_metrics_set[name] = true
  }
  let mut improved = false
  for row in comparison.rows {
    if row.candidate_better {
      improved = true
    }
    if protected_metrics_set.contains(row.metric_name) && !row.candidate_better {
      let unchanged = row.delta.abs() < @core.EPSILON
      if !unchanged {
        return false
      }
    }
  }
  improved
}
