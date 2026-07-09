///|
/// Computes Mean Huber Loss (`delta > 0`) combining quadratic and linear penalties for robustness to outliers.
pub fn huber_loss(
  y_true : Array[Double],
  y_pred : Array[Double],
  delta~ : Double = 1.0
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  if delta <= 0.0 {
    raise @core.InvalidInput(message="Huber loss delta must be strictly positive")
  }
  let mut sum_loss = 0.0
  for i in 0..<y_true.length() {
    let diff = (y_true[i] - y_pred[i]).abs()
    if diff <= delta {
      sum_loss += 0.5 * diff * diff
    } else {
      sum_loss += delta * (diff - 0.5 * delta)
    }
  }
  sum_loss / y_true.length().to_double()
}

///|
/// Computes Mean Pinball Loss (Quantile Loss) for asymmetric penalty at quantile `alpha` (`0.0 <= alpha <= 1.0`).
pub fn pinball_loss(
  y_true : Array[Double],
  y_pred : Array[Double],
  alpha~ : Double = 0.5
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  if alpha < 0.0 || alpha > 1.0 {
    raise @core.InvalidThreshold(threshold=alpha)
  }
  let mut sum_loss = 0.0
  for i in 0..<y_true.length() {
    let err = y_true[i] - y_pred[i]
    if err >= 0.0 {
      sum_loss += alpha * err
    } else {
      sum_loss += (alpha - 1.0) * err
    }
  }
  sum_loss / y_true.length().to_double()
}

///|
/// Numerically stable `log(cosh(x))` approximation for robust regression loss.
fn log_cosh_val(x : Double) -> Double {
  let abs_x = x.abs()
  if abs_x > 20.0 {
    abs_x - @math.ln(2.0)
  } else {
    let exp_pos = @math.exp(abs_x)
    let exp_neg = @math.exp(-abs_x)
    let cosh_val = (exp_pos + exp_neg) * 0.5
    @math.ln(cosh_val)
  }
}

///|
/// Computes Mean Log-Cosh Loss (`Mean(ln(cosh(y_true - y_pred)))`), approximately `(y - y_pred)^2 / 2` for small errors and `|y - y_pred| - ln(2)` for large errors.
pub fn log_cosh_loss(
  y_true : Array[Double],
  y_pred : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut sum_loss = 0.0
  for i in 0..<y_true.length() {
    sum_loss += log_cosh_val(y_true[i] - y_pred[i])
  }
  sum_loss / y_true.length().to_double()
}
