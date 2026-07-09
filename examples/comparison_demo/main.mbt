///|
fn main {
  println("--- Model Comparison & Export Demo ---")
  let base_res = @report.ModelResult::new("DecisionTree", "classification")
  base_res.add_metric("accuracy", 0.75)
  base_res.add_metric("f1_score", 0.72)

  let cand_res = @report.ModelResult::new("LightGBM", "classification")
  cand_res.add_metric("accuracy", 0.89)
  cand_res.add_metric("f1_score", 0.87)

  try {
    let comp = @report.compare_models(base_res, cand_res)
    println(comp.to_table_string())
    println("\nMarkdown Export:\n" + @visualization.to_markdown_comparison(comp))
    println("\nCSV Export:\n" + @visualization.to_csv_string(comp))
  } catch {
    e => println("Error: " + e.to_string())
  }
}
