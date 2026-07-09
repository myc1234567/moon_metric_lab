///|
/// Delta comparison statistics between a baseline model and a candidate model for a specific metric.
pub struct MetricDelta {
  metric_name : String
  baseline_value : Double
  candidate_value : Double
  abs_delta : Double
  pct_delta : Double
  improved : Bool
} derive(Debug, Eq)

///|
/// Comprehensive comparison report between two model runs.
pub struct ComparisonReport {
  baseline_name : String
  candidate_name : String
  task_type : String
  deltas : Array[MetricDelta]
} derive(Debug, Eq)

///|
/// Compares candidate model evaluation against baseline model.
/// `higher_is_better` map overrides default metric direction (default is `true` for accuracy/score, set `false` for loss/error/MAE/MSE/RMSE).
pub fn compare_models(
  baseline : ModelResult,
  candidate : ModelResult,
  higher_is_better~ : Map[String, Bool] = {}
) -> ComparisonReport raise @core.MetricError {
  if baseline.task_type != candidate.task_type {
    raise @core.InvalidInput(
      message="Cannot compare models across different task types: " +
      baseline.task_type +
      " vs " +
      candidate.task_type,
    )
  }
  let common_keys : Array[String] = []
  for k in baseline.metric_names() {
    match candidate.get_metric(k) {
      Some(_) => common_keys.push(k)
      None => ()
    }
  }
  let deltas : Array[MetricDelta] = []
  for k in common_keys {
    let b = baseline.get_metric(k).unwrap()
    let c = candidate.get_metric(k).unwrap()
    let abs_delta = c - b
    let pct_delta = if b.abs() < @core.EPSILON { 0.0 } else { abs_delta / b * 100.0 }
    let is_higher_better = match higher_is_better.get(k) {
      Some(flag) => flag
      None => {
        let lower_k = k.to_lower()
        !(lower_k.contains("loss") ||
        lower_k.contains("error") ||
        lower_k.contains("mae") ||
        lower_k.contains("mse") ||
        lower_k.contains("rmse") ||
        lower_k.contains("mape") ||
        lower_k.contains("dbi"))
      }
    }
    let improved = if is_higher_better {
      abs_delta > @core.EPSILON
    } else {
      abs_delta < -@core.EPSILON
    }
    deltas.push({
      metric_name: k,
      baseline_value: b,
      candidate_value: c,
      abs_delta,
      pct_delta,
      improved,
    })
  }
  {
    baseline_name: baseline.model_name,
    candidate_name: candidate.model_name,
    task_type: baseline.task_type,
    deltas,
  }
}

///|
/// Helper to format a double string to a fixed max width.
fn format_num_str(val : Double, max_len : Int) -> String {
  let s = val.to_string()
  if s.length() <= max_len {
    s
  } else {
    s[:max_len].to_owned()
  }
}

///|
/// Helper to pad or truncate a string to exact width.
fn format_pad_str(s : String, width : Int) -> String {
  if s.length() >= width {
    s[:width].to_owned()
  } else {
    let mut out = s
    for _ in 0..<(width - s.length()) {
      out += " "
    }
    out
  }
}

///|
/// Returns an ASCII grid table summarizing the model comparison for terminal printing.
pub fn ComparisonReport::to_table_string(self : ComparisonReport) -> String {
  let mut out = "=========================================================================\n"
  out += "Model Comparison Report [" + self.task_type.to_upper() + "]\n"
  out += "Baseline:  " + self.baseline_name + "\n"
  out += "Candidate: " + self.candidate_name + "\n"
  out += "=========================================================================\n"
  out += "Metric Name      | Baseline   | Candidate  | Delta (Abs) | Delta (%) | Status \n"
  out += "-----------------+------------+------------+-------------+-----------+--------\n"
  for d in self.deltas {
    let name_pad = format_pad_str(d.metric_name, 16)
    let b_str = format_pad_str(format_num_str(d.baseline_value, 10), 10)
    let c_str = format_pad_str(format_num_str(d.candidate_value, 10), 10)
    let abs_str = format_pad_str(format_num_str(d.abs_delta, 11), 11)
    let pct_str = format_pad_str(format_num_str(d.pct_delta, 8) + "%", 9)
    let status = if d.improved {
      "IMPROVED"
    } else if d.abs_delta.abs() < @core.EPSILON {
      "SAME"
    } else {
      "DEGRADED"
    }
    out += name_pad +
      " | " +
      b_str +
      " | " +
      c_str +
      " | " +
      abs_str +
      " | " +
      pct_str +
      " | " +
      status +
      "\n"
  }
  out += "=========================================================================\n"
  out
}
