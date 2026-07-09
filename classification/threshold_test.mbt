///|
test "ROC curve evaluation and AUC" {
  let y_true = [0, 0, 1, 1]
  let y_prob = [0.1, 0.4, 0.35, 0.8]
  let roc = roc_curve(y_true, y_prob, pos_label=1)
  inspect(roc.auc, content="0.75")
  debug_inspect(roc.thresholds, content="[1.000000000000001, 0.8, 0.4, 0.35, 0.1, 0]")
}

///|
test "Precision-Recall curve points and AUC" {
  let y_true = [0, 1, 1, 0]
  let y_prob = [0.2, 0.6, 0.7, 0.3]
  let pr = precision_recall_curve(y_true, y_prob, pos_label=1)
  debug_inspect(pr.precision_curve, content="[1, 1, 0.6666666666666666, 0.5]")
  debug_inspect(pr.recall_curve, content="[0.5, 1, 1, 1]")
  inspect(pr.auc, content="0.5")
}

///|
test "Optimal threshold finding (F1 and Youden)" {
  let y_true = [0, 0, 1, 1, 1]
  let y_prob = [0.1, 0.2, 0.6, 0.8, 0.9]
  let t_f1 = find_optimal_threshold(y_true, y_prob, metric="f1", pos_label=1)
  inspect(t_f1 >= 0.2 && t_f1 <= 0.6, content="true")
  let t_youden = find_optimal_threshold(
    y_true,
    y_prob,
    metric="youden",
    pos_label=1,
  )
  inspect(t_youden >= 0.2 && t_youden <= 0.6, content="true")
}
