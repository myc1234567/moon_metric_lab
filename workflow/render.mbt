///|
/// Formats a number for compact human-readable reports.
fn display_number(value : Double) -> String {
  value.to_string()
}

///|
/// Escapes a CSV field according to RFC 4180-style quoting rules.
fn csv_field(value : String) -> String {
  let mut escaped = "\""
  for c in value {
    if c == '"' {
      escaped += "\"\""
    } else {
      escaped += c.to_string()
    }
  }
  escaped += "\""
  escaped
}

///|
/// Renders an aggregate experiment summary as Markdown.
pub fn summary_to_markdown(summary : ExperimentSummary) -> String {
  let mut out = "# Experiment Summary: `" + summary.model_name + "`\n\n"
  out += "- Task: `" + summary.task_type + "`\n"
  out += "- Folds: `" + summary.fold_count.to_string() + "`\n\n"
  out += "| Metric | Mean | Stddev | Min | Max | Samples |\n"
  out += "| :--- | ---: | ---: | ---: | ---: | ---: |\n"
  for metric in summary.metrics {
    out += "| `" +
      metric.name +
      "` | " +
      display_number(metric.mean) +
      " | " +
      display_number(metric.stddev) +
      " | " +
      display_number(metric.minimum) +
      " | " +
      display_number(metric.maximum) +
      " | " +
      metric.count.to_string() +
      " |\n"
  }
  if !summary.metadata.is_empty() {
    out += "\n## Reproducibility Metadata\n\n"
    out += "| Key | Value |\n| :--- | :--- |\n"
    let keys : Array[String] = []
    for key, _ in summary.metadata {
      keys.push(key)
    }
    keys.sort()
    for key in keys {
      out += "| `" + key + "` | `" + summary.metadata[key] + "` |\n"
    }
  }
  out
}

///|
/// Renders a baseline comparison as Markdown.
pub fn comparison_to_markdown(comparison : ExperimentComparison) -> String {
  let mut out = "# Experiment Comparison\n\n"
  out += "- Baseline: `" + comparison.baseline_name + "`\n"
  out += "- Candidate: `" + comparison.candidate_name + "`\n"
  out += "- Task: `" + comparison.task_type + "`\n\n"
  out += "| Metric | Baseline | Candidate | Delta | Relative | Direction | Better |\n"
  out += "| :--- | ---: | ---: | ---: | ---: | :--- | :---: |\n"
  for row in comparison.rows {
    let direction = match row.direction {
      MetricDirection::HigherIsBetter => "higher"
      MetricDirection::LowerIsBetter => "lower"
    }
    out += "| `" +
      row.metric_name +
      "` | " +
      display_number(row.baseline_mean) +
      " | " +
      display_number(row.candidate_mean) +
      " | " +
      display_number(row.delta) +
      " | " +
      display_number(row.relative_delta) +
      "%" +
      " | " +
      direction +
      " | " +
      row.candidate_better.to_string() +
      " |\n"
  }
  out
}

///|
/// Renders release gate failures as Markdown suitable for a pull request.
pub fn gate_to_markdown(gate : QualityGate) -> String {
  let mut out = "# Quality Gate: `" + gate.gate_name + "`\n\n"
  out += "**Status:** " + (if gate.passed { "PASS" } else { "FAIL" }) + "\n\n"
  if gate.failures.is_empty() {
    out += "All release rules passed.\n"
  } else {
    out += "| Metric | Observed | Reason |\n| :--- | ---: | :--- |\n"
    for failure in gate.failures {
      out += "| `" +
        failure.metric_name +
        "` | " +
        failure.observed.to_string() +
        " | " +
        failure.reason +
        " |\n"
    }
  }
  out
}

///|
/// Exports several summaries as a stable CSV table for dashboards.
pub fn summaries_to_csv(
  summaries : Array[ExperimentSummary],
  metric_names : Array[String],
) -> String raise @core.MetricError {
  if summaries.is_empty() {
    raise @core.EmptyInput(message="Cannot export an empty summary list")
  }
  if metric_names.is_empty() {
    raise @core.EmptyInput(message="CSV export requires at least one metric")
  }
  let mut out = "model,task,folds"
  for name in metric_names {
    out += "," + csv_field(name + "_mean") + "," + csv_field(name + "_stddev")
  }
  out += "\n"
  for summary in summaries {
    out += csv_field(summary.model_name) +
      "," +
      csv_field(summary.task_type) +
      "," +
      summary.fold_count.to_string()
    for name in metric_names {
      match summary.get_metric(name) {
        Some(metric) =>
          out += "," + metric.mean.to_string() + "," + metric.stddev.to_string()
        None => out += ",,"
      }
    }
    out += "\n"
  }
  out
}

///|
/// Builds a deployment evidence bundle from a summary, comparison and gate.
pub fn deployment_report(
  summary : ExperimentSummary,
  comparison : ExperimentComparison,
  gate : QualityGate,
) -> String {
  summary_to_markdown(summary) +
  "\n" +
  comparison_to_markdown(comparison) +
  "\n" +
  gate_to_markdown(gate)
}
