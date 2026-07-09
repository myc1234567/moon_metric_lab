///|
/// Entry point for `moon_metric_lab` CLI evaluation engine showcase.
fn main {
  println("=========================================================================")
  println("        MoonMetricLab v0.1.0 - Machine Learning Metric Suite             ")
  println("=========================================================================\n")

  // 1. Classification Showcase
  println("--- [1] Binary Classification Evaluation ---")
  let y_true = [0, 0, 1, 1, 1, 0, 1, 0]
  let y_prob = [0.1, 0.2, 0.8, 0.9, 0.7, 0.3, 0.6, 0.4]
  let y_pred = [0, 0, 1, 1, 1, 0, 1, 0]
  try {
    let acc = @classification.accuracy(y_true, y_pred)
    let f1 = @classification.f1_score(y_true, y_pred, pos_label=1)
    let brier = @classification.brier_score_loss(y_true, y_prob)
    println("Accuracy:    " + acc.to_string())
    println("F1 Score:    " + f1.to_string())
    println("Brier Score: " + brier.to_string() + "\n")

    let roc = @classification.roc_curve(y_true, y_prob, pos_label=1)
    println("ROC AUC:     " + roc.auc.to_string() + "\n")

    let base_res = @report.ModelResult::new("LogisticRegression", "classification")
    base_res.add_metric("accuracy", 0.80)
    base_res.add_metric("f1_score", 0.78)
    base_res.add_metric("log_loss", 0.45)

    let cand_res = @report.ModelResult::new("RandomForest", "classification")
    cand_res.add_metric("accuracy", acc)
    cand_res.add_metric("f1_score", f1)
    cand_res.add_metric("log_loss", 0.28)

    let comp = @report.compare_models(base_res, cand_res)
    println(@visualization.to_ascii_bar_chart(cand_res.metrics))
    println(comp.to_table_string())
  } catch {
    e => println("Classification error: " + e.to_string())
  }

  // 2. Regression Showcase
  println("--- [2] Continuous Regression Evaluation ---")
  let reg_true = [3.0, -0.5, 2.0, 7.0]
  let reg_pred = [2.5, 0.0, 2.0, 8.0]
  try {
    let rmse = @regression.rmse(reg_true, reg_pred)
    let r2 = @regression.r2_score(reg_true, reg_pred)
    let huber = @regression.huber_loss(reg_true, reg_pred, delta=1.0)
    println("RMSE:       " + rmse.to_string())
    println("R2 Score:   " + r2.to_string())
    println("Huber Loss: " + huber.to_string() + "\n")
  } catch {
    e => println("Regression error: " + e.to_string())
  }

  // 3. Clustering Showcase
  println("--- [3] Clustering Separation & Agreement ---")
  let cl_true = [0, 0, 1, 1, 2, 2]
  let cl_pred = [1, 1, 0, 0, 2, 2]
  try {
    let ari = @clustering.adjusted_rand_index(cl_true, cl_pred)
    let nmi = @clustering.normalized_mutual_info(cl_true, cl_pred)
    println("Adjusted Rand Index (ARI): " + ari.to_string())
    println("Normalized Mutual Info:    " + nmi.to_string() + "\n")
  } catch {
    e => println("Clustering error: " + e.to_string())
  }

  // 4. Ranking Showcase
  println("--- [4] Information Retrieval & Ranking ---")
  let rank_rels = [3.0, 2.0, 3.0, 0.0, 1.0, 2.0]
  let rank_scores = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4]
  try {
    let ndcg = @ranking.ndcg_at_k(rank_rels, rank_scores, k=5)
    println("NDCG@5: " + ndcg.to_string() + "\n")
  } catch {
    e => println("Ranking error: " + e.to_string())
  }

  println("Showcase run complete!")
}
