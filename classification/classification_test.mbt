///|
test "binary metrics: accuracy, precision, recall, f1" {
  let y_true = [1, 0, 1, 1, 0, 1]
  let y_pred = [1, 0, 1, 0, 0, 1]
  inspect(accuracy(y_true, y_pred), content="0.8333333333333334")
  inspect(precision(y_true, y_pred, pos_label=1), content="1")
  inspect(recall(y_true, y_pred, pos_label=1), content="0.75")
  inspect(f1_score(y_true, y_pred, pos_label=1), content="0.8571428571428571")
}

///|
test "binary metrics: log_loss, mcc, balanced_accuracy, jaccard, brier" {
  let y_true = [1, 0, 1, 0]
  let y_prob = [0.9, 0.1, 0.8, 0.2]
  let y_pred = [1, 0, 1, 0]
  let ll = log_loss(y_true, y_prob)
  inspect(ll, content="0.164252033486018")
  let m = mcc(y_true, y_pred, pos_label=1)
  inspect(m, content="1")
  inspect(balanced_accuracy(y_true, y_pred, pos_label=1), content="1")
  inspect(jaccard_score(y_true, y_pred, pos_label=1), content="1")
  inspect(brier_score_loss(y_true, y_prob), content=(
    #|0.024999999999999994
  ))
}

///|
test "multiclass metrics: precision, recall, f1 (Macro, Micro, Weighted)" {
  let y_true = [0, 1, 2, 0, 1, 2]
  let y_pred = [0, 2, 1, 0, 0, 1]
  let p_macro = multiclass_precision(y_true, y_pred, averaging=Macro)
  inspect(p_macro, content="0.2222222222222222")
  let r_micro = multiclass_recall(y_true, y_pred, averaging=Micro)
  inspect(r_micro, content="0.3333333333333333")
  let f_macro = multiclass_f1_score(y_true, y_pred, averaging=Macro)
  inspect(f_macro, content="0.26666666666666666")
  let f_weighted = multiclass_f1_score(y_true, y_pred, averaging=Weighted)
  inspect(f_weighted, content="0.26666666666666666")
}

///|
test "top_k_accuracy and multiclass_log_loss" {
  let y_true = [0, 1]
  let y_prob = @core.Matrix::from_2d_array([
    [0.8, 0.1, 0.1],
    [0.2, 0.7, 0.1],
  ])
  inspect(top_k_accuracy(y_true, y_prob, k=1), content="1")
  inspect(top_k_accuracy(y_true, y_prob, k=2), content="1")
  let ll = multiclass_log_loss(y_true, y_prob)
  inspect(ll, content=(
    #|0.2899092476264711
  ))
}
