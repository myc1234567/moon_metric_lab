///|
/// Averaging strategies for multi-class metrics evaluation.
pub(all) enum AveragingMethod {
  Macro
  Micro
  Weighted
} derive(Debug, Eq)

///|
/// Computes multi-class classification accuracy (`correct / N`).
pub fn multiclass_accuracy(
  y_true : Array[Int],
  y_pred : Array[Int]
) -> Double raise @core.MetricError {
  accuracy(y_true, y_pred)
}

///|
/// Computes Top-K classification accuracy given true labels (`y_true`) and a 2D probability/score matrix `y_prob` (`N x n_classes`).
pub fn top_k_accuracy(
  y_true : Array[Int],
  y_prob : @core.Matrix[Double],
  k~ : Int = 5
) -> Double raise @core.MetricError {
  let n = y_true.length()
  if n != y_prob.rows() {
    raise @core.DimensionMismatch(expected=n, actual=y_prob.rows())
  }
  @core.validate_non_empty(y_true)
  if k <= 0 || k > y_prob.cols() {
    raise @core.InvalidInput(
      message="k must be between 1 and total classes (" +
      y_prob.cols().to_string() +
      ")",
    )
  }
  let mut correct = 0
  for i in 0..<n {
    let true_label = y_true[i]
    if true_label < 0 || true_label >= y_prob.cols() {
      raise @core.InvalidInput(
        message="True label out of class index bounds: " +
        true_label.to_string(),
      )
    }
    let row_scores = y_prob.row_view(i).to_array()
    let sorted_indices = @core.argsort(row_scores)
    let mut found = false
    let num_cols = sorted_indices.length()
    for j in 0..<k {
      let idx = sorted_indices[num_cols - 1 - j]
      if idx == true_label {
        found = true
        break
      }
    }
    if found {
      correct += 1
    }
  }
  correct.to_double() / n.to_double()
}

///|
/// Helper to extract all unique class labels sorted in ascending order.
fn get_unique_classes(arr1 : Array[Int], arr2 : Array[Int]) -> Array[Int] {
  let set = {}
  for v in arr1 {
    set[v] = ()
  }
  for v in arr2 {
    set[v] = ()
  }
  let classes : Array[Int] = []
  for k, _ in set {
    classes.push(k)
  }
  classes.sort()
  classes
}

///|
/// Computes multi-class precision using `Macro`, `Micro`, or `Weighted` averaging.
pub fn multiclass_precision(
  y_true : Array[Int],
  y_pred : Array[Int],
  averaging~ : AveragingMethod = Macro
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let classes = get_unique_classes(y_true, y_pred)
  match averaging {
    Micro => {
      let mut total_tp = 0
      let mut total_fp = 0
      for cls in classes {
        for i in 0..<y_true.length() {
          if y_pred[i] == cls {
            if y_true[i] == cls {
              total_tp += 1
            } else {
              total_fp += 1
            }
          }
        }
      }
      @core.safe_div(total_tp.to_double(), (total_tp + total_fp).to_double())
    }
    Macro => {
      let mut sum_prec = 0.0
      for cls in classes {
        sum_prec += precision(y_true, y_pred, pos_label=cls)
      }
      sum_prec / classes.length().to_double()
    }
    Weighted => {
      let mut sum_weighted_prec = 0.0
      let mut total_support = 0.0
      for cls in classes {
        let mut support = 0.0
        for y in y_true {
          if y == cls {
            support += 1.0
          }
        }
        let p = precision(y_true, y_pred, pos_label=cls)
        sum_weighted_prec += p * support
        total_support += support
      }
      @core.safe_div(sum_weighted_prec, total_support)
    }
  }
}

///|
/// Computes multi-class recall using `Macro`, `Micro`, or `Weighted` averaging.
pub fn multiclass_recall(
  y_true : Array[Int],
  y_pred : Array[Int],
  averaging~ : AveragingMethod = Macro
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let classes = get_unique_classes(y_true, y_pred)
  match averaging {
    Micro => {
      let mut total_tp = 0
      let mut total_fn = 0
      for cls in classes {
        for i in 0..<y_true.length() {
          if y_true[i] == cls {
            if y_pred[i] == cls {
              total_tp += 1
            } else {
              total_fn += 1
            }
          }
        }
      }
      @core.safe_div(total_tp.to_double(), (total_tp + total_fn).to_double())
    }
    Macro => {
      let mut sum_rec = 0.0
      for cls in classes {
        sum_rec += recall(y_true, y_pred, pos_label=cls)
      }
      sum_rec / classes.length().to_double()
    }
    Weighted => {
      let mut sum_weighted_rec = 0.0
      let mut total_support = 0.0
      for cls in classes {
        let mut support = 0.0
        for y in y_true {
          if y == cls {
            support += 1.0
          }
        }
        let r = recall(y_true, y_pred, pos_label=cls)
        sum_weighted_rec += r * support
        total_support += support
      }
      @core.safe_div(sum_weighted_rec, total_support)
    }
  }
}

///|
/// Computes multi-class F1 score using `Macro`, `Micro`, or `Weighted` averaging.
pub fn multiclass_f1_score(
  y_true : Array[Int],
  y_pred : Array[Int],
  averaging~ : AveragingMethod = Macro
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let classes = get_unique_classes(y_true, y_pred)
  match averaging {
    Micro => {
      let prec = multiclass_precision(y_true, y_pred, averaging=Micro)
      let rec = multiclass_recall(y_true, y_pred, averaging=Micro)
      @core.safe_div(2.0 * prec * rec, prec + rec)
    }
    Macro => {
      let mut sum_f1 = 0.0
      for cls in classes {
        sum_f1 += f1_score(y_true, y_pred, pos_label=cls)
      }
      sum_f1 / classes.length().to_double()
    }
    Weighted => {
      let mut sum_weighted_f1 = 0.0
      let mut total_support = 0.0
      for cls in classes {
        let mut support = 0.0
        for y in y_true {
          if y == cls {
            support += 1.0
          }
        }
        let f = f1_score(y_true, y_pred, pos_label=cls)
        sum_weighted_f1 += f * support
        total_support += support
      }
      @core.safe_div(sum_weighted_f1, total_support)
    }
  }
}

///|
/// Computes multi-class cross-entropy log loss given true class labels `y_true` (`0..C-1`) and `y_prob` (`N x C`).
pub fn multiclass_log_loss(
  y_true : Array[Int],
  y_prob : @core.Matrix[Double]
) -> Double raise @core.MetricError {
  let n = y_true.length()
  if n != y_prob.rows() {
    raise @core.DimensionMismatch(expected=n, actual=y_prob.rows())
  }
  @core.validate_non_empty(y_true)
  let mut loss_sum = 0.0
  for i in 0..<n {
    let cls = y_true[i]
    if cls < 0 || cls >= y_prob.cols() {
      raise @core.InvalidInput(
        message="True label index out of bounds: " + cls.to_string(),
      )
    }
    let p = y_prob.get(i, cls)
    if p < 0.0 || p > 1.0 {
      raise @core.InvalidProbability(prob=p)
    }
    loss_sum -= @core.safe_log(p)
  }
  loss_sum / n.to_double()
}
