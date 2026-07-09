///|
/// Helper to pad string to exact width.
fn pad_right(s : String, width : Int) -> String {
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
/// Renders key-value metrics as a horizontal ASCII bar chart for terminal visualization.
pub fn to_ascii_bar_chart(
  metrics : Map[String, Double],
  max_width~ : Int = 40
) -> String {
  let keys : Array[String] = []
  let mut max_val = 0.0
  for k, v in metrics {
    keys.push(k)
    if v.abs() > max_val {
      max_val = v.abs()
    }
  }
  keys.sort()
  let mut out = "ASCII Metric Bar Chart:\n"
  for k in keys {
    let v = metrics[k]
    let bar_len = if max_val < @core.EPSILON {
      0
    } else {
      (v.abs() / max_val * max_width.to_double()).to_int()
    }
    let mut bar = ""
    for _ in 0..<bar_len {
      bar += "#"
    }
    out += pad_right(k, 16) + " | " + pad_right(bar, max_width) + " | " + v.to_string() + "\n"
  }
  out
}

///|
/// Renders a model evaluation report as a GitHub-flavored Markdown document.
pub fn to_markdown_table(res : @report.ModelResult) -> String {
  let mut out = "# Model Evaluation Report: `" + res.model_name + "`\n\n"
  out += "**Task Type**: `" + res.task_type + "`\n\n"
  out += "## Evaluation Metrics\n\n"
  out += "| Metric Name | Score |\n"
  out += "| :--- | :--- |\n"
  for k in res.metric_names() {
    let v = res.get_metric(k).unwrap()
    out += "| **" + k + "** | `" + v.to_string() + "` |\n"
  }
  out += "\n## Metadata & Hyperparameters\n\n"
  out += "| Key | Value |\n"
  out += "| :--- | :--- |\n"
  let meta_keys : Array[String] = []
  for k, _ in res.metadata {
    meta_keys.push(k)
  }
  meta_keys.sort()
  for k in meta_keys {
    let v = res.get_metadata(k).unwrap()
    out += "| `" + k + "` | `" + v + "` |\n"
  }
  out
}

///|
/// Renders a comparison report as a GitHub-flavored Markdown document.
pub fn to_markdown_comparison(comp : @report.ComparisonReport) -> String {
  let mut out = "# Benchmark Comparison Report\n\n"
  out += "- **Baseline**: `" + comp.baseline_name + "`\n"
  out += "- **Candidate**: `" + comp.candidate_name + "`\n"
  out += "- **Task Type**: `" + comp.task_type + "`\n\n"
  out += "| Metric | Baseline | Candidate | Delta (Abs) | Delta (%) | Status |\n"
  out += "| :--- | :---: | :---: | :---: | :---: | :---: |\n"
  for d in comp.deltas {
    let status = if d.improved {
      "✅ **Improved**"
    } else if d.abs_delta.abs() < @core.EPSILON {
      "➖ Same"
    } else {
      "❌ **Degraded**"
    }
    out += "| **" +
      d.metric_name +
      "** | `" +
      d.baseline_value.to_string() +
      "` | `" +
      d.candidate_value.to_string() +
      "` | `" +
      d.abs_delta.to_string() +
      "` | `" +
      d.pct_delta.to_string() +
      "%` | " +
      status +
      " |\n"
  }
  out
}

///|
/// Serializes a model evaluation result to standard JSON format without external dependencies.
pub fn to_json_string(res : @report.ModelResult) -> String {
  let mut out = "{\n  \"model_name\": \"" + res.model_name + "\",\n"
  out += "  \"task_type\": \"" + res.task_type + "\",\n"
  out += "  \"metrics\": {\n"
  let names = res.metric_names()
  for i in 0..<names.length() {
    let k = names[i]
    let v = res.get_metric(k).unwrap()
    out += "    \"" + k + "\": " + v.to_string()
    if i < names.length() - 1 {
      out += ",\n"
    } else {
      out += "\n"
    }
  }
  out += "  },\n  \"metadata\": {\n"
  let meta_keys : Array[String] = []
  for k, _ in res.metadata {
    meta_keys.push(k)
  }
  meta_keys.sort()
  for i in 0..<meta_keys.length() {
    let k = meta_keys[i]
    let v = res.get_metadata(k).unwrap()
    out += "    \"" + k + "\": \"" + v + "\""
    if i < meta_keys.length() - 1 {
      out += ",\n"
    } else {
      out += "\n"
    }
  }
  out += "  }\n}"
  out
}

///|
/// Exports comparison report deltas to CSV (`Comma-Separated Values`) string format.
pub fn to_csv_string(comp : @report.ComparisonReport) -> String {
  let mut out = "Metric,Baseline,Candidate,DeltaAbs,DeltaPct,Status\n"
  for d in comp.deltas {
    let status = if d.improved {
      "Improved"
    } else if d.abs_delta.abs() < @core.EPSILON {
      "Same"
    } else {
      "Degraded"
    }
    out += d.metric_name +
      "," +
      d.baseline_value.to_string() +
      "," +
      d.candidate_value.to_string() +
      "," +
      d.abs_delta.to_string() +
      "," +
      d.pct_delta.to_string() +
      "," +
      status +
      "\n"
  }
  out
}

///|
/// Generates a standalone, scalable vector graphics (`SVG`) chart representing an ROC curve and its AUC.
pub fn to_svg_roc_curve(
  fpr : Array[Double],
  tpr : Array[Double],
  auc : Double,
  width~ : Int = 400,
  height~ : Int = 400
) -> String {
  let margin = 40
  let plot_w = width - 2 * margin
  let plot_h = height - 2 * margin
  let mut svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " +
    width.to_string() +
    " " +
    height.to_string() +
    "\" width=\"" +
    width.to_string() +
    "\" height=\"" +
    height.to_string() +
    "\">\n"
  svg += "  <style>.axis { stroke: #333; stroke-width: 2; } .grid { stroke: #eee; stroke-width: 1; } .curve { fill: none; stroke: #2563eb; stroke-width: 3; } .diag { fill: none; stroke: #9ca3af; stroke-width: 2; stroke-dasharray: 4; } .txt { font-family: sans-serif; font-size: 12px; fill: #1f2937; }</style>\n"
  svg += "  <rect width=\"100%\" height=\"100%\" fill=\"#ffffff\"/>\n"
  // Diagonal baseline
  let x0 = margin
  let y0 = height - margin
  let x1 = width - margin
  let y1 = margin
  svg += "  <line x1=\"" +
    x0.to_string() +
    "\" y1=\"" +
    y0.to_string() +
    "\" x2=\"" +
    x1.to_string() +
    "\" y2=\"" +
    y1.to_string() +
    "\" class=\"diag\"/>\n"
  // ROC Curve points
  let mut pts = ""
  let n = if fpr.length() < tpr.length() { fpr.length() } else { tpr.length() }
  for i in 0..<n {
    let px = margin.to_double() + fpr[i] * plot_w.to_double()
    let py = (height - margin).to_double() - tpr[i] * plot_h.to_double()
    pts += px.to_string() + "," + py.to_string() + " "
  }
  svg += "  <polyline points=\"" + pts + "\" class=\"curve\"/>\n"
  // Axes
  svg += "  <line x1=\"" +
    margin.to_string() +
    "\" y1=\"" +
    (height - margin).to_string() +
    "\" x2=\"" +
    (width - margin).to_string() +
    "\" y2=\"" +
    (height - margin).to_string() +
    "\" class=\"axis\"/>\n"
  svg += "  <line x1=\"" +
    margin.to_string() +
    "\" y1=\"" +
    margin.to_string() +
    "\" x2=\"" +
    margin.to_string() +
    "\" y2=\"" +
    (height - margin).to_string() +
    "\" class=\"axis\"/>\n"
  svg += "  <text x=\"" +
    (width / 2 - 20).to_string() +
    "\" y=\"" +
    (height - 10).to_string() +
    "\" class=\"txt\">False Positive Rate</text>\n"
  svg += "  <text x=\"15\" y=\"35\" class=\"txt\">ROC Curve (AUC = " +
    auc.to_string() +
    ")</text>\n"
  svg += "</svg>"
  svg
}
