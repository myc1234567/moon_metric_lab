///|
/// Calculates the mean of a vector.
pub fn mean(v : @core.Vector[Double]) -> Double raise @core.MetricError {
  let len = v.length()
  if len == 0 {
    raise @core.InvalidInput(message="Vector is empty")
  }
  let mut sum = 0.0
  for i = 0; i < len; i = i + 1 {
    sum += v.get(i)
  }
  sum / len.to_double()
}

///|
/// Calculates the sample variance of a vector.
pub fn variance(v : @core.Vector[Double]) -> Double raise @core.MetricError {
  let len = v.length()
  if len <= 1 {
    raise @core.InvalidInput(message="Variance requires at least two elements")
  }
  let m = mean(v)
  let mut sum_sq = 0.0
  for i = 0; i < len; i = i + 1 {
    let diff = v.get(i) - m
    sum_sq += diff * diff
  }
  sum_sq / (len - 1).to_double()
}

///|
/// Computes the independent two-sample Welch t-test statistic.
pub fn welch_t_test(
  sample1 : @core.Vector[Double],
  sample2 : @core.Vector[Double],
) -> Double raise @core.MetricError {
  let n1 = sample1.length().to_double()
  let n2 = sample2.length().to_double()
  if n1 < 2.0 || n2 < 2.0 {
    raise @core.InvalidInput(
      message="T-test requires at least two samples in each group",
    )
  }
  let m1 = mean(sample1)
  let m2 = mean(sample2)
  let v1 = variance(sample1)
  let v2 = variance(sample2)
  let denom = (v1 / n1 + v2 / n2).sqrt()
  if denom <= @core.EPSILON {
    0.0
  } else {
    (m1 - m2) / denom
  }
}

///|
/// Aggregates a metric vector across folds or random seeds.
pub fn aggregate_folds_mean(
  folds : Array[@core.Vector[Double]],
) -> Array[Double] raise @core.MetricError {
  if folds.length() == 0 {
    raise @core.InvalidInput(message="No folds provided")
  }
  let inner_len = folds[0].length()
  let result = Array::make(inner_len, 0.0)
  let fold_count = folds.length().to_double()
  for f in folds {
    if f.length() != inner_len {
      raise @core.DimensionMismatch(expected=inner_len, actual=f.length())
    }
    for i = 0; i < inner_len; i = i + 1 {
      result[i] = result[i] + f.get(i)
    }
  }
  for i = 0; i < inner_len; i = i + 1 {
    result[i] = result[i] / fold_count
  }
  result
}
