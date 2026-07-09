///|
test "ConfusionMatrix from_predictions and properties" {
  let y_true = [0, 1, 2, 0, 1, 2]
  let y_pred = [0, 2, 1, 0, 0, 1]
  let cm = ConfusionMatrix::from_predictions(y_true, y_pred)
  debug_inspect(cm.classes(), content="[0, 1, 2]")
  let (tp, fp, fn_count, tn) = cm.get_tp_fp_fn_tn(0)
  inspect(tp, content="2")
  inspect(fp, content="1")
  inspect(fn_count, content="0")
  inspect(tn, content="3")
}

///|
test "ConfusionMatrix normalization modes" {
  let y_true = [0, 0, 1, 1]
  let y_pred = [0, 1, 0, 1]
  let cm = ConfusionMatrix::from_predictions(y_true, y_pred)
  let norm_true = cm.normalized(mode="true")
  inspect(norm_true.get(0, 0), content="0.5")
  inspect(norm_true.get(0, 1), content="0.5")
  let norm_all = cm.normalized(mode="all")
  inspect(norm_all.get(0, 0), content="0.25")
}

///|
test "ConfusionMatrix to_table_string" {
  let y_true = [0, 1]
  let y_pred = [0, 1]
  let cm = ConfusionMatrix::from_predictions(y_true, y_pred)
  let table = cm.to_table_string()
  inspect(
    table.contains("Confusion Matrix (True \\ Pred)"),
    content="true",
  )
}
