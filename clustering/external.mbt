///|
/// Helper to compute `n choose 2` (`n * (n - 1) / 2`).
fn comb2(n : Int) -> Double {
  if n < 2 {
    0.0
  } else {
    n.to_double() * (n - 1).to_double() / 2.0
  }
}

///|
/// Helper to construct contingency table between two clusterings.
fn build_contingency_table(
  labels_true : Array[Int],
  labels_pred : Array[Int]
) -> (@core.Matrix[Int], Array[Int], Array[Int]) raise @core.MetricError {
  let true_map : Map[Int, Int] = {}
  let pred_map : Map[Int, Int] = {}
  let mut t_idx = 0
  let mut p_idx = 0
  for l in labels_true {
    if !true_map.contains(l) {
      true_map[l] = t_idx
      t_idx += 1
    }
  }
  for l in labels_pred {
    if !pred_map.contains(l) {
      pred_map[l] = p_idx
      p_idx += 1
    }
  }
  let mat = @core.Matrix::new(t_idx, p_idx, 0)
  for i in 0..<labels_true.length() {
    let r = true_map[labels_true[i]]
    let c = pred_map[labels_pred[i]]
    let cur = mat.get(r, c)
    mat.set(r, c, cur + 1)
  }
  let row_sums = Array::make(t_idx, 0)
  let col_sums = Array::make(p_idx, 0)
  for r in 0..<t_idx {
    for c in 0..<p_idx {
      let val = mat.get(r, c)
      row_sums[r] = row_sums[r] + val
      col_sums[c] = col_sums[c] + val
    }
  }
  (mat, row_sums, col_sums)
}

///|
/// Computes Adjusted Rand Index (`ARI`) evaluating similarity between two clusterings adjusted for chance (`[-1.0, 1.0]`).
pub fn adjusted_rand_index(
  labels_true : Array[Int],
  labels_pred : Array[Int]
) -> Double raise @core.MetricError {
  @core.validate_same_length(labels_true, labels_pred)
  @core.validate_non_empty(labels_true)
  let n = labels_true.length()
  if n < 2 {
    return 1.0
  }
  let (contingency, row_sums, col_sums) = build_contingency_table(
    labels_true, labels_pred,
  )
  let mut sum_comb_ij = 0.0
  for r in 0..<contingency.rows() {
    for c in 0..<contingency.cols() {
      sum_comb_ij += comb2(contingency.get(r, c))
    }
  }
  let mut sum_comb_a = 0.0
  for a in row_sums {
    sum_comb_a += comb2(a)
  }
  let mut sum_comb_b = 0.0
  for b in col_sums {
    sum_comb_b += comb2(b)
  }
  let total_comb = comb2(n)
  if total_comb < @core.EPSILON {
    return 1.0
  }
  let expected_idx = sum_comb_a * sum_comb_b / total_comb
  let max_idx = (sum_comb_a + sum_comb_b) / 2.0
  let denom = max_idx - expected_idx
  if denom.abs() < @core.EPSILON {
    if (sum_comb_ij - expected_idx).abs() < @core.EPSILON {
      1.0
    } else {
      0.0
    }
  } else {
    (sum_comb_ij - expected_idx) / denom
  }
}

///|
/// Computes Normalized Mutual Information (`NMI`) normalized by arithmetic or geometric mean entropy (`[0.0, 1.0]`).
pub fn normalized_mutual_info(
  labels_true : Array[Int],
  labels_pred : Array[Int],
  average_method~ : String = "arithmetic"
) -> Double raise @core.MetricError {
  @core.validate_same_length(labels_true, labels_pred)
  @core.validate_non_empty(labels_true)
  let n = labels_true.length().to_double()
  let (contingency, row_sums, col_sums) = build_contingency_table(
    labels_true, labels_pred,
  )
  let mut mi = 0.0
  for r in 0..<contingency.rows() {
    for c in 0..<contingency.cols() {
      let nij = contingency.get(r, c).to_double()
      if nij > 0.0 {
        let ai = row_sums[r].to_double()
        let bj = col_sums[c].to_double()
        mi += nij / n * @math.ln(nij * n / (ai * bj))
      }
    }
  }
  let mut h_true = 0.0
  for a in row_sums {
    let ai = a.to_double()
    if ai > 0.0 {
      h_true -= ai / n * @math.ln(ai / n)
    }
  }
  let mut h_pred = 0.0
  for b in col_sums {
    let bj = b.to_double()
    if bj > 0.0 {
      h_pred -= bj / n * @math.ln(bj / n)
    }
  }
  let denom = if average_method == "arithmetic" {
    (h_true + h_pred) / 2.0
  } else if average_method == "geometric" {
    (h_true * h_pred).sqrt()
  } else {
    raise @core.InvalidInput(
      message="Unknown NMI average_method: " +
      average_method +
      " (expected arithmetic/geometric)",
    )
  }
  if denom < @core.EPSILON {
    if mi < @core.EPSILON {
      1.0
    } else {
      0.0
    }
  } else {
    mi / denom
  }
}

///|
/// Computes Fowlkes-Mallows Index (`FMI`) measuring geometric mean of precision and recall between clustering pairs (`[0.0, 1.0]`).
pub fn fowlkes_mallows_score(
  labels_true : Array[Int],
  labels_pred : Array[Int]
) -> Double raise @core.MetricError {
  @core.validate_same_length(labels_true, labels_pred)
  @core.validate_non_empty(labels_true)
  let n = labels_true.length()
  if n < 2 {
    return 1.0
  }
  let (contingency, row_sums, col_sums) = build_contingency_table(
    labels_true, labels_pred,
  )
  let mut sum_comb_ij = 0.0
  for r in 0..<contingency.rows() {
    for c in 0..<contingency.cols() {
      sum_comb_ij += comb2(contingency.get(r, c))
    }
  }
  let mut sum_comb_a = 0.0
  for a in row_sums {
    sum_comb_a += comb2(a)
  }
  let mut sum_comb_b = 0.0
  for b in col_sums {
    sum_comb_b += comb2(b)
  }
  if sum_comb_a < @core.EPSILON || sum_comb_b < @core.EPSILON {
    return 0.0
  }
  sum_comb_ij / (sum_comb_a * sum_comb_b).sqrt()
}
