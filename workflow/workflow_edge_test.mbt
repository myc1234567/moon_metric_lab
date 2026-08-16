///|
test "workflow rejects empty and duplicate inputs" {
  let empty = Experiment::new("", "classification")
  validate_experiment(empty) catch {
    @core.InvalidInput(message=_) => ()
    _ => fail("expected invalid experiment")
  }
  let experiment = Experiment::new("model", "classification")
  let fold = FoldObservation::new(1)
  fold.add_metric("accuracy", 0.9)
  experiment.add_fold(fold)
  let duplicate = FoldObservation::new(1)
  duplicate.add_metric("accuracy", 0.91)
  experiment.add_fold(duplicate) catch {
    @core.InvalidInput(message=_) => ()
    _ => fail("expected duplicate fold error")
  }
}

///|
test "quality gate reports missing metric and unstable folds" {
  let experiment = Experiment::new("unstable", "regression")
  for i, value in [1.0, 3.0, 1.0, 3.0] {
    let fold = FoldObservation::new(i)
    fold.add_metric("rmse", value)
    experiment.add_fold(fold)
  }
  let summary = summarize(experiment)
  let gate = evaluate_gate(summary, "regression-release", [
    GateRule::new("rmse").with_maximum(2.0).with_maximum_stddev(0.5),
    GateRule::new("r2_score").with_minimum(0.8),
  ])
  inspect(gate.is_passed(), content="false")
  inspect(gate.failure_count(), content="2")
  inspect(gate_to_markdown(gate).contains("missing"), content="true")
}

///|
test "comparison rejects incompatible tasks and missing common metrics" {
  let classification = Experiment::new("classification", "classification")
  let c_fold = FoldObservation::new(1)
  c_fold.add_metric("accuracy", 0.9)
  classification.add_fold(c_fold)
  let regression = Experiment::new("regression", "regression")
  let r_fold = FoldObservation::new(1)
  r_fold.add_metric("rmse", 0.4)
  regression.add_fold(r_fold)
  try {
    let _ = compare(summarize(classification), summarize(regression))
    fail("expected task mismatch")
  } catch {
    @core.InvalidInput(message=_) => ()
    _ => fail("expected task mismatch")
  }
  let left = Experiment::new("left", "classification")
  let left_fold = FoldObservation::new(1)
  left_fold.add_metric("accuracy", 0.9)
  left.add_fold(left_fold)
  let right = Experiment::new("right", "classification")
  let right_fold = FoldObservation::new(1)
  right_fold.add_metric("f1_score", 0.9)
  right.add_fold(right_fold)
  try {
    let _ = compare(summarize(left), summarize(right))
    fail("expected common metric error")
  } catch {
    @core.InvalidInput(message=_) => ()
    _ => fail("expected common metric error")
  }
}

///|
test "CSV renderer quotes commas and double quotes" {
  let experiment = Experiment::new("model, \"A\"", "classification")
  let fold = FoldObservation::new(1)
  fold.add_metric("accuracy", 0.9)
  experiment.add_fold(fold)
  let csv = summaries_to_csv([summarize(experiment)], ["accuracy"])
  inspect(csv.contains("\"model, \"\"A\"\"\""), content="true")
}
