///|
/// T-Test result representation
pub struct TTestResult {
  t_value : Double
  p_value : Double
  df : Double
}

///|
/// Calculate the mean of a vector view
fn mean(v : @core.VectorView) -> Double {
  let mut sum = 0.0
  for i = 0; i < v.length(); i = i + 1 {
    sum = sum + v[i]
  }
  sum / v.length().to_double()
}

///|
/// Calculate the variance of a vector view
fn variance(v : @core.VectorView, m : Double) -> Double {
  let mut sum = 0.0
  for i = 0; i < v.length(); i = i + 1 {
    let diff = v[i] - m
    sum = sum + diff * diff
  }
  sum / (v.length().to_double() - 1.0)
}

///|
/// Perform an independent two-sample t-test
pub fn independent_t_test(
  sample1 : @core.VectorView,
  sample2 : @core.VectorView,
) -> TTestResult raise @core.MetricError {
  let n1 = sample1.length().to_double()
  let n2 = sample2.length().to_double()
  if n1 < 2.0 || n2 < 2.0 {
    raise @core.DimensionMismatch("Sample size must be at least 2")
  }

  let mean1 = mean(sample1)
  let mean2 = mean(sample2)
  let var1 = variance(sample1, mean1)
  let var2 = variance(sample2, mean2)

  let pooled_var = ((n1 - 1.0) * var1 + (n2 - 1.0) * var2) / (n1 + n2 - 2.0)
  if pooled_var < @core.EPSILON {
    raise @core.DivisionByZero("Pooled variance is zero")
  }

  let t = (mean1 - mean2) / @core.sqrt(pooled_var * (1.0 / n1 + 1.0 / n2))
  let df = n1 + n2 - 2.0

  // Simplified P-value estimation for demonstration
  // In a full implementation, we would use the incomplete beta function for exact Student's t CDF
  let p = @core.exp(-0.5 * t * t)

  { t_value: t, p_value: p, df }
}
