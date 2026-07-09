///|
/// A structured representation of a confusion matrix (`N_classes x N_classes`) where row is true class and col is predicted class.
pub struct ConfusionMatrix {
  matrix : @core.Matrix[Int]
  classes : Array[Int]
} derive(Debug, Eq)

///|
/// Constructs a `ConfusionMatrix` from true labels `y_true` and predicted labels `y_pred`.
pub fn ConfusionMatrix::from_predictions(
  y_true : Array[Int],
  y_pred : Array[Int]
) -> ConfusionMatrix raise @core.MetricError {
  @core.validate_same_length(y_true, y_pred)
  @core.validate_non_empty(y_true)
  let classes = get_unique_classes(y_true, y_pred)
  let n_classes = classes.length()
  let class_map : Map[Int, Int] = {}
  for i in 0..<n_classes {
    class_map[classes[i]] = i
  }
  let mat = @core.Matrix::new(n_classes, n_classes, 0)
  for i in 0..<y_true.length() {
    let r = match class_map.get(y_true[i]) {
      Some(idx) => idx
      None =>
        raise @core.InvalidInput(
          message="Unknown true class: " + y_true[i].to_string(),
        )
    }
    let c = match class_map.get(y_pred[i]) {
      Some(idx) => idx
      None =>
        raise @core.InvalidInput(
          message="Unknown predicted class: " + y_pred[i].to_string(),
        )
    }
    let cur = mat.get(r, c)
    mat.set(r, c, cur + 1)
  }
  { matrix: mat, classes }
}

///|
/// Constructs a `ConfusionMatrix` from true class labels and a 2D probability matrix (`N x n_classes`).
pub fn ConfusionMatrix::from_probabilities(
  y_true : Array[Int],
  y_prob : @core.Matrix[Double]
) -> ConfusionMatrix raise @core.MetricError {
  let n = y_true.length()
  if n != y_prob.rows() {
    raise @core.DimensionMismatch(expected=n, actual=y_prob.rows())
  }
  let y_pred : Array[Int] = []
  for i in 0..<n {
    let row_view = y_prob.row_view(i).to_array()
    y_pred.push(@core.argmax(row_view))
  }
  ConfusionMatrix::from_predictions(y_true, y_pred)
}

///|
/// Returns the underlying `@core.Matrix[Int]` matrix.
pub fn ConfusionMatrix::matrix(self : ConfusionMatrix) -> @core.Matrix[Int] {
  self.matrix
}

///|
/// Returns the array of unique class labels.
pub fn ConfusionMatrix::classes(self : ConfusionMatrix) -> Array[Int] {
  self.classes
}

///|
/// Extracts `(TP, FP, FN, TN)` counts for a specific class `cls_label` (One-vs-Rest breakdown).
pub fn ConfusionMatrix::get_tp_fp_fn_tn(
  self : ConfusionMatrix,
  cls_label : Int
) -> (Int, Int, Int, Int) raise @core.MetricError {
  let mut target_idx = -1
  for i in 0..<self.classes.length() {
    if self.classes[i] == cls_label {
      target_idx = i
      break
    }
  }
  if target_idx == -1 {
    raise @core.InvalidInput(
      message="Class label not found in confusion matrix: " +
      cls_label.to_string(),
    )
  }
  let n = self.classes.length()
  let tp = self.matrix.get(target_idx, target_idx)
  let mut fp = 0
  let mut fn_count = 0
  let mut total = 0
  for r in 0..<n {
    for c in 0..<n {
      let val = self.matrix.get(r, c)
      total += val
      if r != target_idx && c == target_idx {
        fp += val
      }
      if r == target_idx && c != target_idx {
        fn_count += val
      }
    }
  }
  let tn = total - (tp + fp + fn_count)
  (tp, fp, fn_count, tn)
}

///|
/// Returns a normalized double matrix of the confusion matrix (`mode` can be `"true"`, `"pred"`, or `"all"`).
pub fn ConfusionMatrix::normalized(
  self : ConfusionMatrix,
  mode~ : String = "all"
) -> @core.Matrix[Double] raise @core.MetricError {
  let n = self.classes.length()
  let result = @core.Matrix::new(n, n, 0.0)
  if mode == "true" {
    for r in 0..<n {
      let mut row_sum = 0
      for c in 0..<n {
        row_sum += self.matrix.get(r, c)
      }
      for c in 0..<n {
        let val = self.matrix.get(r, c).to_double()
        result.set(r, c, @core.safe_div(val, row_sum.to_double()))
      }
    }
  } else if mode == "pred" {
    for c in 0..<n {
      let mut col_sum = 0
      for r in 0..<n {
        col_sum += self.matrix.get(r, c)
      }
      for r in 0..<n {
        let val = self.matrix.get(r, c).to_double()
        result.set(r, c, @core.safe_div(val, col_sum.to_double()))
      }
    }
  } else if mode == "all" {
    let mut total = 0
    for r in 0..<n {
      for c in 0..<n {
        total += self.matrix.get(r, c)
      }
    }
    for r in 0..<n {
      for c in 0..<n {
        let val = self.matrix.get(r, c).to_double()
        result.set(r, c, @core.safe_div(val, total.to_double()))
      }
    }
  } else {
    raise @core.InvalidInput(
      message="Unknown normalization mode: " +
      mode +
      " (expected 'true', 'pred', or 'all')",
    )
  }
  result
}

///|
/// Formats the confusion matrix as an ASCII grid table string for terminal display or markdown representation.
pub fn ConfusionMatrix::to_table_string(self : ConfusionMatrix) -> String {
  let n = self.classes.length()
  let mut out = "Confusion Matrix (True \\ Pred)\n"
  out += "       |"
  for c in 0..<n {
    out += "  C" + self.classes[c].to_string() + "  |"
  }
  out += "\n-------+"
  for _ in 0..<n {
    out += "-------+"
  }
  out += "\n"
  for r in 0..<n {
    out += "  C" + self.classes[r].to_string() + "  |"
    for c in 0..<n {
      let val = try self.matrix.get(r, c) catch { _ => 0 }
      let s = val.to_string()
      let mut pad = " "
      if s.length() < 4 {
        for _ in 0..<(4 - s.length()) {
          pad += " "
        }
      }
      out += pad + s + " |"
    }
    out += "\n"
  }
  out
}
