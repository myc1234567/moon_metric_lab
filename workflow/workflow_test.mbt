///|
fn classification_experiment(
  model_name : String,
  scores : Array[Double],
) -> Experiment raise @core.MetricError {
  let experiment = Experiment::new(model_name, "classification")
  experiment.add_metadata(
    "dataset", "UCI Breast Cancer Wisconsin (Diagnostic) compact split",
  )
  experiment.add_metadata("split", "stratified-4-fold")
  for i in 0..<scores.length() {
    let fold = FoldObservation::new(i + 1)
    fold.add_metric("roc_auc", scores[i])
    fold.add_metric("f1_score", scores[i] - 0.03)
    fold.add_metric("log_loss", 1.0 - scores[i])
    experiment.add_fold(fold)
  }
  experiment
}

///|
test "classification release workflow aggregates real metric shape" {
  let experiment = classification_experiment("calibrated-logistic", [
    0.96, 0.95, 0.97, 0.96,
  ])
  let summary = summarize(experiment)
  inspect(summary.fold_count, content="4")
  let auc = summary.get_metric("roc_auc").unwrap()
  inspect(auc.mean > 0.959 && auc.mean < 0.961, content="true")
  inspect(auc.minimum, content="0.95")
  inspect(auc.maximum, content="0.97")
  inspect(summary.metadata["split"], content="stratified-4-fold")
}

///|
test "baseline candidate comparison respects loss direction" {
  let baseline = summarize(
    classification_experiment("baseline", [0.90, 0.91, 0.90, 0.92]),
  )
  let candidate = summarize(
    classification_experiment("candidate", [0.94, 0.95, 0.93, 0.94]),
  )
  let specs = [
    MetricSpec::new("roc_auc", MetricDirection::HigherIsBetter),
    MetricSpec::new("log_loss", MetricDirection::LowerIsBetter),
  ]
  let comparison = compare(baseline, candidate, specs~)
  inspect(comparison.rows.length(), content="3")
  let gate = evaluate_gate(candidate, "production-classification-v1", [
    GateRule::new("roc_auc").with_minimum(0.93).with_maximum_stddev(0.02),
    GateRule::new("log_loss").with_maximum(0.10),
  ])
  inspect(gate.is_passed(), content="true")
  inspect(deployment_ready(comparison, gate, ["roc_auc"]), content="true")
}

///|
test "ranking models are deterministic for deployment choice" {
  let first = summarize(
    classification_experiment("zeta", [0.93, 0.93, 0.93, 0.93]),
  )
  let second = summarize(
    classification_experiment("alpha", [0.93, 0.93, 0.93, 0.93]),
  )
  let ranked = rank([first, second], "roc_auc", MetricDirection::HigherIsBetter)
  inspect(ranked[0].model_name, content="alpha")
  inspect(ranked[1].rank, content="2")
}

///|
test "report renderers produce reviewable evidence" {
  let summary = summarize(
    classification_experiment("candidate", [0.94, 0.95, 0.93, 0.94]),
  )
  let baseline = summarize(
    classification_experiment("baseline", [0.90, 0.91, 0.90, 0.92]),
  )
  let comparison = compare(baseline, summary)
  let gate = evaluate_gate(summary, "release", [
    GateRule::new("roc_auc").with_minimum(0.90),
  ])
  let evidence = deployment_report(summary, comparison, gate)
  inspect(evidence.contains("production"), content="false")
  inspect(evidence.contains("Quality Gate"), content="true")
  inspect(evidence.contains("roc_auc"), content="true")
  let csv = summaries_to_csv([baseline, summary], ["roc_auc", "log_loss"])
  inspect(csv.contains("candidate"), content="true")
  inspect(csv.contains("roc_auc_mean"), content="true")
}
