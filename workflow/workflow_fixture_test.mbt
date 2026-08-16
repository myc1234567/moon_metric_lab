///|
fn iris_like_multiclass_experiment(
  model_name : String,
  macro_f1 : Array[Double],
  accuracy : Array[Double],
) -> Experiment raise @core.MetricError {
  if macro_f1.length() != accuracy.length() {
    raise @core.DimensionMismatch(
      expected=macro_f1.length(),
      actual=accuracy.length(),
    )
  }
  let experiment = Experiment::new(model_name, "multiclass-classification")
  experiment.add_metadata("dataset", "UCI Iris compact stratified fixture")
  experiment.add_metadata("labels", "setosa,versicolor,virginica")
  for i in 0..<macro_f1.length() {
    let fold = FoldObservation::new(i + 1)
    fold.add_metric("macro_f1", macro_f1[i])
    fold.add_metric("accuracy", accuracy[i])
    experiment.add_fold(fold)
  }
  experiment
}

///|
fn wine_regression_experiment(
  model_name : String,
  rmse : Array[Double],
  r2 : Array[Double],
) -> Experiment raise @core.MetricError {
  if rmse.length() != r2.length() {
    raise @core.DimensionMismatch(expected=rmse.length(), actual=r2.length())
  }
  let experiment = Experiment::new(model_name, "regression")
  experiment.add_metadata("dataset", "UCI Wine Quality compact fixture")
  experiment.add_metadata("target", "quality")
  for i in 0..<rmse.length() {
    let fold = FoldObservation::new(i + 1)
    fold.add_metric("rmse", rmse[i])
    fold.add_metric("r2_score", r2[i])
    experiment.add_fold(fold)
  }
  experiment
}

///|
fn search_ranking_experiment(
  model_name : String,
  ndcg : Array[Double],
  map : Array[Double],
) -> Experiment raise @core.MetricError {
  if ndcg.length() != map.length() {
    raise @core.DimensionMismatch(expected=ndcg.length(), actual=map.length())
  }
  let experiment = Experiment::new(model_name, "learning-to-rank")
  experiment.add_metadata("dataset", "LETOR MQ2008 compact relevance fixture")
  experiment.add_metadata("cutoff", "10")
  for i in 0..<ndcg.length() {
    let fold = FoldObservation::new(i + 1)
    fold.add_metric("ndcg_at_10", ndcg[i])
    fold.add_metric("map", map[i])
    experiment.add_fold(fold)
  }
  experiment
}

///|
test "Iris-like multiclass selection protects macro F1" {
  let baseline = summarize(
    iris_like_multiclass_experiment(
      "softmax-baseline",
      [0.91, 0.90, 0.92, 0.91],
      [0.93, 0.92, 0.94, 0.93],
    ),
  )
  let candidate = summarize(
    iris_like_multiclass_experiment(
      "calibrated-softmax",
      [0.94, 0.95, 0.93, 0.94],
      [0.95, 0.96, 0.94, 0.95],
    ),
  )
  let comparison = compare(baseline, candidate)
  let gate = evaluate_gate(candidate, "iris-model-card", [
    GateRule::new("macro_f1").with_minimum(0.92).with_maximum_stddev(0.02),
    GateRule::new("accuracy").with_minimum(0.93),
  ])
  inspect(deployment_ready(comparison, gate, ["macro_f1"]), content="true")
}

///|
test "Wine regression gate catches high error" {
  let baseline = summarize(
    wine_regression_experiment("ridge", [0.72, 0.70, 0.73, 0.71], [
      0.61, 0.63, 0.60, 0.62,
    ]),
  )
  let candidate = summarize(
    wine_regression_experiment("tree", [0.67, 0.66, 0.68, 0.67], [
      0.69, 0.70, 0.68, 0.69,
    ]),
  )
  let comparison = compare(baseline, candidate)
  let gate = evaluate_gate(candidate, "wine-quality-regression", [
    GateRule::new("rmse").with_maximum(0.70),
    GateRule::new("r2_score").with_minimum(0.65),
  ])
  inspect(gate.is_passed(), content="true")
  inspect(
    deployment_ready(comparison, gate, ["rmse", "r2_score"]),
    content="true",
  )
}

///|
test "LETOR ranking report exports the primary metric" {
  let bm25 = summarize(
    search_ranking_experiment("bm25", [0.41, 0.42, 0.40, 0.41], [
      0.29, 0.30, 0.28, 0.29,
    ]),
  )
  let neural = summarize(
    search_ranking_experiment("neural-ranker", [0.47, 0.46, 0.48, 0.47], [
      0.34, 0.35, 0.33, 0.34,
    ]),
  )
  let ranked = rank(
    [bm25, neural],
    "ndcg_at_10",
    MetricDirection::HigherIsBetter,
  )
  inspect(ranked[0].model_name, content="neural-ranker")
  let csv = summaries_to_csv([bm25, neural], ["ndcg_at_10", "map"])
  inspect(csv.contains("neural-ranker"), content="true")
  inspect(csv.contains("ndcg_at_10_stddev"), content="true")
}
