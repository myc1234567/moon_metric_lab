///|
/// Computes Mean Absolute Error (`MAE`) between true and predicted continuous values.
pub fn mae(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut sum_abs = 0.0
  for i in 0..<y_true.length() {
    sum_abs += (y_true[i] - y_pred[i]).abs()
  }
  sum_abs / y_true.length().to_double()
}

///|
/// Computes Mean Squared Error (`MSE`).
pub fn mse(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut sum_sq = 0.0
  for i in 0..<y_true.length() {
    let diff = y_true[i] - y_pred[i]
    sum_sq += diff * diff
  }
  sum_sq / y_true.length().to_double()
}

///|
/// Computes Root Mean Squared Error (`RMSE`).
pub fn rmse(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  mse(y_true, y_pred).sqrt()
}

///|
/// Computes R-squared (`R2 Score` / Coefficient of Determination).
pub fn r2_score(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let y_mean = @core.mean(y_true)
  let mut ss_tot = 0.0
  let mut ss_res = 0.0
  for i in 0..<y_true.length() {
    let diff_tot = y_true[i] - y_mean
    let diff_res = y_true[i] - y_pred[i]
    ss_tot += diff_tot * diff_tot
    ss_res += diff_res * diff_res
  }
  if ss_tot.abs() < @core.EPSILON {
    if ss_res.abs() < @core.EPSILON {
      1.0
    } else {
      0.0
    }
  } else {
    1.0 - ss_res / ss_tot
  }
}

///|
/// Computes Mean Absolute Percentage Error (`MAPE`) expressed as a percentage `[0.0, 100.0+]`.
pub fn mape(
  y_true : Array[Double],
  y_pred : Array[Double],
  epsilon~ : Double = 1.0e-15
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut sum_pct = 0.0
  for i in 0..<y_true.length() {
    let denom = if y_true[i].abs() < epsilon { epsilon } else { y_true[i].abs() }
    sum_pct += (y_true[i] - y_pred[i]).abs() / denom
  }
  sum_pct / y_true.length().to_double() * 100.0
}

///|
/// Computes the Explained Variance Score (`1 - Var(y_true - y_pred) / Var(y_true)`).
pub fn explained_variance_score(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  if y_true.length() < 2 {
    raise @core.InvalidInput(
      message="Explained variance score requires at least 2 samples",
    )
  }
  let residuals : Array[Double] = []
  for i in 0..<y_true.length() {
    residuals.push(y_true[i] - y_pred[i])
  }
  let var_res = @core.variance(residuals, ddof=0)
  let var_true = @core.variance(y_true, ddof=0)
  if var_true.abs() < @core.EPSILON {
    0.0
  } else {
    1.0 - var_res / var_true
  }
}

///|
/// Computes the maximum residual error across all samples.
pub fn max_error(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut max_err = 0.0
  for i in 0..<y_true.length() {
    let err = (y_true[i] - y_pred[i]).abs()
    if err > max_err {
      max_err = err
    }
  }
  max_err
}
