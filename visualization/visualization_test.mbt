///|
test "visualization renderers: ASCII bar chart and Markdown table" {
  let res = @report.ModelResult::new("ResNet50", "classification")
  res.add_metric("accuracy", 0.92)
  res.add_metric("f1_score", 0.89)
  res.add_metadata("batch_size", "64")
  let bar = to_ascii_bar_chart(res.metrics, max_width=20)
  inspect(bar.contains("accuracy"), content="true")
  inspect(bar.contains("#"), content="true")
  let md = to_markdown_table(res)
  inspect(md.contains("# Model Evaluation Report: `ResNet50`"), content="true")
  inspect(md.contains("batch_size"), content="true")
}

///|
test "visualization renderers: JSON and CSV export" {
  let b = @report.ModelResult::new("Base", "regression")
  b.add_metric("rmse", 1.5)
  let c = @report.ModelResult::new("Candidate", "regression")
  c.add_metric("rmse", 1.2)
  let comp = @report.compare_models(b, c, higher_is_better={"rmse": false})
  let json_str = to_json_string(c)
  inspect(json_str.contains("\"model_name\": \"Candidate\""), content="true")
  let csv_str = to_csv_string(comp)
  inspect(csv_str, content=(
    #|Metric,Baseline,Candidate,DeltaAbs,DeltaPct,Status
    #|rmse,1.5,1.2,-0.30000000000000004,-20.000000000000004,Improved
    #|
  ))
}

///|
test "visualization renderers: SVG ROC curve generation" {
  let fpr = [0.0, 0.1, 0.2, 1.0]
  let tpr = [0.0, 0.8, 0.9, 1.0]
  let svg = to_svg_roc_curve(fpr, tpr, 0.88, width=300, height=300)
  inspect(svg.contains("<svg"), content="true")
  inspect(svg.contains("ROC Curve (AUC = 0.88)"), content="true")
  inspect(svg.contains("</svg>"), content="true")
}
