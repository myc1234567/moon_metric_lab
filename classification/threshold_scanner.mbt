///|
/// Result of an ROC curve evaluation containing False Positive Rates (`fpr`), True Positive Rates (`tpr`), thresholds, and area under curve (`auc`).
pub struct RocCurveResult {
  fpr : Array[Double]
  tpr : Array[Double]
  thresholds : Array[Double]
  auc : Double
} derive(Debug, Eq)

///|
/// Result of a Precision-Recall curve evaluation containing precision array, recall array, thresholds, and AUC.
pub struct PrCurveResult {
  precision_curve : Array[Double]
  recall_curve : Array[Double]
  thresholds : Array[Double]
  auc : Double
} derive(Debug, Eq)

///|
/// Computes ROC curve points (`fpr`, `tpr`, `thresholds`) and area under curve (`auc`) using trapezoidal integration.
pub fn roc_curve(
  y_true : Array[Int],
  y_prob : Array[Double],
  pos_label~ : Int = 1
) -> RocCurveResult raise @core.MetricError {
  @core.validate_same_length(y_true, y_prob)
  @core.validate_non_empty(y_true)
  @core.validate_probabilities(y_prob)
  let n = y_true.length()
  let mut total_pos = 0.0
  let mut total_neg = 0.0
  for y in y_true {
    if y == pos_label {
      total_pos += 1.0
    } else {
      total_neg += 1.0
    }
  }
  if total_pos == 0.0 || total_neg == 0.0 {
    raise @core.InvalidInput(
      message="ROC curve requires both positive and negative samples in y_true",
    )
  }
  let sorted_indices = @core.argsort(y_prob)
  let thresholds : Array[Double] = []
  let fpr : Array[Double] = []
  let tpr : Array[Double] = []
  thresholds.push(1.0 + @core.EPSILON)
  fpr.push(0.0)
  tpr.push(0.0)
  for i in 0..<n {
    let idx = sorted_indices[n - 1 - i]
    let t = y_prob[idx]
    if t < 0.0 || t > 1.0 {
      raise @core.InvalidThreshold(threshold=t)
    }
    let mut tp = 0.0
    let mut fp = 0.0
    for j in 0..<n {
      if y_prob[j] >= t {
        if y_true[j] == pos_label {
          tp += 1.0
        } else {
          fp += 1.0
        }
      }
    }
    let cur_fpr = fp / total_neg
    let cur_tpr = tp / total_pos
    if thresholds.length() > 0 &&
      (thresholds[thresholds.length() - 1] - t).abs() < @core.EPSILON {
      fpr[fpr.length() - 1] = cur_fpr
      tpr[tpr.length() - 1] = cur_tpr
    } else {
      thresholds.push(t)
      fpr.push(cur_fpr)
      tpr.push(cur_tpr)
    }
  }
  if (thresholds[thresholds.length() - 1] - 0.0).abs() >= @core.EPSILON {
    thresholds.push(0.0)
    fpr.push(1.0)
    tpr.push(1.0)
  }
  let auc = @core.trapezoidal_area(fpr, tpr)
  { fpr, tpr, thresholds, auc }
}

///|
/// Computes Precision-Recall curve points and AUC.
pub fn precision_recall_curve(
  y_true : Array[Int],
  y_prob : Array[Double],
  pos_label~ : Int = 1
) -> PrCurveResult raise @core.MetricError {
  @core.validate_same_length(y_true, y_prob)
  @core.validate_non_empty(y_true)
  @core.validate_probabilities(y_prob)
  let n = y_true.length()
  let sorted_indices = @core.argsort(y_prob)
  let thresholds : Array[Double] = []
  let precision_curve : Array[Double] = []
  let recall_curve : Array[Double] = []
  for i in 0..<n {
    let idx = sorted_indices[n - 1 - i]
    let t = y_prob[idx]
    let mut tp = 0.0
    let mut fp = 0.0
    let mut fn_count = 0.0
    for j in 0..<n {
      let pred_pos = y_prob[j] >= t
      let true_pos = y_true[j] == pos_label
      if pred_pos && true_pos {
        tp += 1.0
      } else if pred_pos && !true_pos {
        fp += 1.0
      } else if !pred_pos && true_pos {
        fn_count += 1.0
      }
    }
    let p = @core.safe_div(tp, tp + fp)
    let r = @core.safe_div(tp, tp + fn_count)
    if thresholds.length() > 0 &&
      (thresholds[thresholds.length() - 1] - t).abs() < @core.EPSILON {
      precision_curve[precision_curve.length() - 1] = p
      recall_curve[recall_curve.length() - 1] = r
    } else {
      thresholds.push(t)
      precision_curve.push(p)
      recall_curve.push(r)
    }
  }
  let auc = @core.trapezoidal_area(recall_curve, precision_curve)
  { precision_curve, recall_curve, thresholds, auc }
}

///|
/// Scans candidate probability thresholds (`0.01..0.99`) to discover the optimal decision threshold maximizing either `"f1"` or `"youden"` (TPR - FPR).
pub fn find_optimal_threshold(
  y_true : Array[Int],
  y_prob : Array[Double],
  metric~ : String = "f1",
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_prob)
  @core.validate_non_empty(y_true)
  let mut best_thresh = 0.5
  let mut best_score = -1.0
  let n = y_true.length()
  let step = 0.02
  let mut t = 0.02
  while t < 0.99 {
    let y_pred : Array[Int] = []
    for i in 0..<n {
      if y_prob[i] >= t {
        y_pred.push(pos_label)
      } else {
        y_pred.push(if pos_label == 1 { 0 } else { 1 })
      }
    }
    let cur_score = if metric == "f1" {
      f1_score(y_true, y_pred, pos_label~)
    } else if metric == "youden" {
      let sens = recall(y_true, y_pred, pos_label~)
      let mut tn = 0
      let mut fp = 0
      for i in 0..<n {
        if y_true[i] != pos_label {
          if y_pred[i] != pos_label {
            tn += 1
          } else {
            fp += 1
          }
        }
      }
      let spec = @core.safe_div(tn.to_double(), (tn + fp).to_double())
      sens + spec - 1.0
    } else {
      raise @core.InvalidInput(
        message="Unknown threshold metric: " + metric + " (expected f1/youden)",
      )
    }
    if cur_score > best_score {
      best_score = cur_score
      best_thresh = t
    }
    t += step
  }
  best_thresh
}
