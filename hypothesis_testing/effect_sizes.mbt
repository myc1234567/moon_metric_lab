///|
/// Returns the paired mean difference `after - before`.
///
/// This is useful when comparing two models on the same folds or seeds. Keeping
/// the pairing avoids hiding per-fold variation behind two independent means.
pub fn paired_mean_difference(
  before : @core.Vector[Double],
  after : @core.Vector[Double],
) -> Double raise @core.MetricError {
  if before.length() != after.length() {
    raise @core.DimensionMismatch(
      expected=before.length(),
      actual=after.length(),
    )
  }
  if before.length() == 0 {
    raise @core.EmptyInput(
      message="Paired comparison requires at least one observation",
    )
  }
  let mut total = 0.0
  for i = 0; i < before.length(); i = i + 1 {
    total += after.get(i) - before.get(i)
  }
  total / before.length().to_double()
}

///|
/// Returns the standard error of the mean for a sample.
pub fn standard_error(
  sample : @core.Vector[Double],
) -> Double raise @core.MetricError {
  let n = sample.length()
  if n <= 1 {
    raise @core.InvalidInput(
      message="Standard error requires at least two observations",
    )
  }
  variance(sample).sqrt() / n.to_double().sqrt()
}

///|
/// Computes Cohen's d using the pooled sample standard deviation.
/// A zero effect size is returned when both samples are identical constants.
pub fn cohens_d(
  sample1 : @core.Vector[Double],
  sample2 : @core.Vector[Double],
) -> Double raise @core.MetricError {
  let n1 = sample1.length()
  let n2 = sample2.length()
  if n1 <= 1 || n2 <= 1 {
    raise @core.InvalidInput(
      message="Cohen's d requires at least two observations per sample",
    )
  }
  let pooled_variance = (
      (n1 - 1).to_double() * variance(sample1) +
      (n2 - 1).to_double() * variance(sample2)
    ) /
    (n1 + n2 - 2).to_double()
  if pooled_variance <= @core.EPSILON {
    if mean(sample1) == mean(sample2) {
      0.0
    } else {
      raise @core.ZeroDivision(message="Cohen's d has zero pooled variance")
    }
  } else {
    (mean(sample1) - mean(sample2)) / pooled_variance.sqrt()
  }
}
