///|
fn main {
  println("--- Binary Classification Demo ---")
  let y_true = [0, 1, 1, 0, 1, 0]
  let y_prob = [0.1, 0.8, 0.6, 0.2, 0.9, 0.3]
  try {
    let roc = @classification.roc_curve(y_true, y_prob, pos_label=1)
    println("ROC AUC: " + roc.auc.to_string())
    let svg = @visualization.to_svg_roc_curve(
      roc.fpr,
      roc.tpr,
      roc.auc,
      width=300,
      height=300,
    )
    println("SVG generated (length: " + svg.length().to_string() + " chars)")
  } catch {
    e => println("Demo error: " + e.to_string())
  }
}
