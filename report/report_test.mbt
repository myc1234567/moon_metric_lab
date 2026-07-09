///|
test "ModelResult lifecycle and queries" {
  let res = ModelResult::new("RandomForest", "classification")
  res.add_metric("accuracy", 0.85)
  res.add_metric("f1_score", 0.82)
  res.add_metadata("n_estimators", "100")
  debug_inspect(res.get_metric("accuracy"), content="Some(0.85)")
  debug_inspect(res.get_metric("recall"), content="None")
  debug_inspect(res.get_metadata("n_estimators"), content="Some(\"100\")")
  debug_inspect(res.metric_names(), content="[\"accuracy\", \"f1_score\"]")
}

///|
test "compare_models evaluation and table report" {
  let baseline = ModelResult::new("LogisticRegression", "classification")
  baseline.add_metric("accuracy", 0.80)
  baseline.add_metric("log_loss", 0.45)
  let candidate = ModelResult::new("XGBoost", "classification")
  candidate.add_metric("accuracy", 0.88)
  candidate.add_metric("log_loss", 0.32)
  let comp = compare_models(baseline, candidate)
  inspect(comp.deltas.length(), content="2")
  let tbl = comp.to_table_string()
  inspect(tbl.contains("IMPROVED"), content="true")
  inspect(tbl.contains("LogisticRegression"), content="true")
  inspect(tbl.contains("XGBoost"), content="true")
}

///|
test "panic compare_models task mismatch" {
  let m1 = ModelResult::new("M1", "classification")
  let m2 = ModelResult::new("M2", "regression")
  ignore(compare_models(m1, m2))
}
