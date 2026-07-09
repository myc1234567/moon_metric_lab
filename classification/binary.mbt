///|
/// Computes binary classification accuracy (`(TP + TN) / N`).
pub fn accuracy(
  y_true : Array[Int],
  y_pred : Array[Int]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true, message="Input arrays must not be empty")
  let mut correct = 0
  for i in 0..<y_true.length() {
    if y_true[i] == y_pred[i] {
      correct += 1
    }
  }
  correct.to_double() / y_true.length().to_double()
}

///|
/// Computes precision (`TP / (TP + FP)`), returning `0.0` if `TP + FP == 0`.
pub fn precision(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut tp = 0
  let mut fp = 0
  for i in 0..<y_true.length() {
    if y_pred[i] == pos_label {
      if y_true[i] == pos_label {
        tp += 1
      } else {
        fp += 1
      }
    }
  }
  @core.safe_div(tp.to_double(), (tp + fp).to_double())
}

///|
/// Computes recall / sensitivity (`TP / (TP + FN)`), returning `0.0` if `TP + FN == 0`.
pub fn recall(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut tp = 0
  let mut fn_count = 0
  for i in 0..<y_true.length() {
    if y_true[i] == pos_label {
      if y_pred[i] == pos_label {
        tp += 1
      } else {
        fn_count += 1
      }
    }
  }
  @core.safe_div(tp.to_double(), (tp + fn_count).to_double())
}

///|
/// Computes F-Beta score given `beta` weighting precision vs recall.
pub fn f_beta_score(
  y_true : Array[Int],
  y_pred : Array[Int],
  beta~ : Double = 1.0,
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  if beta < 0.0 {
    raise @core.InvalidInput(message="beta must be non-negative")
  }
  let p = precision(y_true, y_pred, pos_label~)
  let r = recall(y_true, y_pred, pos_label~)
  let beta_sq = beta * beta
  let num = (1.0 + beta_sq) * p * r
  let den = beta_sq * p + r
  @core.safe_div(num, den)
}

///|
/// Computes the harmonic mean of precision and recall (`F1 Score`).
pub fn f1_score(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  f_beta_score(y_true, y_pred, beta=1.0, pos_label~)
}

///|
/// Computes binary cross-entropy (log loss) given true binary labels `{0, 1}` and predicted probabilities in `[0, 1]`.
pub fn log_loss(
  y_true : Array[Int],
  y_prob : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_prob)
  @core.validate_non_empty(y_true)
  @core.validate_probabilities(y_prob)
  let mut loss_sum = 0.0
  let n = y_true.length()
  for i in 0..<n {
    let y = y_true[i].to_double()
    let p = y_prob[i]
    loss_sum -= y * @core.safe_log(p) + (1.0 - y) * @core.safe_log(1.0 - p)
  }
  loss_sum / n.to_double()
}

///|
/// Computes the Matthews Correlation Coefficient (`MCC`) in `[-1.0, 1.0]`.
pub fn mcc(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut tp = 0.0
  let mut tn = 0.0
  let mut fp = 0.0
  let mut fn_count = 0.0
  for i in 0..<y_true.length() {
    let is_true_pos = y_true[i] == pos_label
    let is_pred_pos = y_pred[i] == pos_label
    if is_true_pos && is_pred_pos {
      tp += 1.0
    } else if !is_true_pos && !is_pred_pos {
      tn += 1.0
    } else if !is_true_pos && is_pred_pos {
      fp += 1.0
    } else {
      fn_count += 1.0
    }
  }
  let num = tp * tn - fp * fn_count
  let den_sq = (tp + fp) * (tp + fn_count) * (tn + fp) * (tn + fn_count)
  if den_sq.abs() < @core.EPSILON {
    0.0
  } else {
    num / den_sq.sqrt()
  }
}

///|
/// Computes balanced accuracy (`(sensitivity + specificity) / 2`).
pub fn balanced_accuracy(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  let sens = recall(y_true, y_pred, pos_label~)
  let mut tn = 0
  let mut fp = 0
  for i in 0..<y_true.length() {
    if y_true[i] != pos_label {
      if y_pred[i] != pos_label {
        tn += 1
      } else {
        fp += 1
      }
    }
  }
  let spec = @core.safe_div(tn.to_double(), (tn + fp).to_double())
  (sens + spec) / 2.0
}

///|
/// Computes the Jaccard similarity coefficient score (`TP / (TP + FP + FN)`).
pub fn jaccard_score(
  y_true : Array[Int],
  y_pred : Array[Int],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let mut tp = 0
  let mut fp = 0
  let mut fn_count = 0
  for i in 0..<y_true.length() {
    let is_true_pos = y_true[i] == pos_label
    let is_pred_pos = y_pred[i] == pos_label
    if is_true_pos && is_pred_pos {
      tp += 1
    } else if !is_true_pos && is_pred_pos {
      fp += 1
    } else if is_true_pos && !is_pred_pos {
      fn_count += 1
    }
  }
  @core.safe_div(tp.to_double(), (tp + fp + fn_count).to_double())
}

///|
/// Computes the Brier score loss (`Mean((y_true - y_prob)^2)`).
pub fn brier_score_loss(
  y_true : Array[Int],
  y_prob : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_prob)
  @core.validate_non_empty(y_true)
  @core.validate_probabilities(y_prob)
  let mut sum_sq = 0.0
  for i in 0..<y_true.length() {
    let diff = y_prob[i] - y_true[i].to_double()
    sum_sq += diff * diff
  }
  sum_sq / y_true.length().to_double()
}
