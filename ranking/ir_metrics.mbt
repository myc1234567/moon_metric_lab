///|
/// Helper to sort indices by scores in descending order.
fn argsort_desc(scores : Array[Double]) -> Array[Int] {
  let indices : Array[Int] = []
  for i in 0..<scores.length() {
    indices.push(i)
  }
  indices.sort_by(fn(i, j) {
    if scores[i] > scores[j] {
      -1
    } else if scores[i] < scores[j] {
      1
    } else {
      0
    }
  })
  indices
}

///|
/// Computes Discounted Cumulative Gain (`DCG@k`) given relevance scores sorted in rank order.
pub fn dcg_at_k(
  relevances : Array[Double],
  k~ : Int = 10
) -> Double raise @core.MetricError {
  if k <= 0 {
    raise @core.InvalidInput(message="k must be strictly positive in DCG@k")
  }
  let limit = if k < relevances.length() { k } else { relevances.length() }
  let mut dcg = 0.0
  for i in 0..<limit {
    let rel = relevances[i]
    let gain = @math.pow(2.0, rel) - 1.0
    let discount = @math.log2((i + 2).to_double())
    dcg += gain / discount
  }
  dcg
}

///|
/// Computes Normalized Discounted Cumulative Gain (`NDCG@k`).
pub fn ndcg_at_k(
  y_true_relevances : Array[Double],
  y_scores : Array[Double],
  k~ : Int = 10
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true_relevances, y_scores)
  @core.validate_non_empty(y_true_relevances)
  let pred_order = argsort_desc(y_scores)
  let ranked_rels : Array[Double] = []
  for idx in pred_order {
    ranked_rels.push(y_true_relevances[idx])
  }
  let dcg = dcg_at_k(ranked_rels, k~)
  let ideal_order = argsort_desc(y_true_relevances)
  let ideal_rels : Array[Double] = []
  for idx in ideal_order {
    ideal_rels.push(y_true_relevances[idx])
  }
  let idcg = dcg_at_k(ideal_rels, k~)
  if idcg.abs() < @core.EPSILON {
    0.0
  } else {
    dcg / idcg
  }
}

///|
/// Computes Reciprocal Rank (`RR`) for a single query ranking.
pub fn reciprocal_rank(
  y_true_relevances : Array[Double],
  y_scores : Array[Double],
  threshold~ : Double = 0.5
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true_relevances, y_scores)
  @core.validate_non_empty(y_true_relevances)
  let order = argsort_desc(y_scores)
  for i in 0..<order.length() {
    let idx = order[i]
    if y_true_relevances[idx] >= threshold {
      return 1.0 / (i + 1).to_double()
    }
  }
  0.0
}

///|
/// Computes Mean Reciprocal Rank (`MRR`) across a set of query rankings.
pub fn mean_reciprocal_rank(
  queries_relevances : Array[Array[Double]],
  queries_scores : Array[Array[Double]],
  threshold~ : Double = 0.5
) -> Double raise @core.MetricError {
  @core.validate_same_length(queries_relevances, queries_scores)
  @core.validate_non_empty(
    queries_relevances,
    message="Must provide at least one query for MRR",
  )
  let mut sum_rr = 0.0
  for i in 0..<queries_relevances.length() {
    sum_rr += reciprocal_rank(
      queries_relevances[i],
      queries_scores[i],
      threshold~,
    )
  }
  sum_rr / queries_relevances.length().to_double()
}

///|
/// Computes Average Precision (`AP`) for a single query given binary relevance indicators (`y_true`).
pub fn average_precision(
  y_true : Array[Int],
  y_scores : Array[Double],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(y_true, y_scores)
  @core.validate_non_empty(y_true)
  let mut total_rel = 0.0
  for y in y_true {
    if y == pos_label {
      total_rel += 1.0
    }
  }
  if total_rel < @core.EPSILON {
    return 0.0
  }
  let order = argsort_desc(y_scores)
  let mut hit_count = 0.0
  let mut sum_prec = 0.0
  for i in 0..<order.length() {
    let idx = order[i]
    if y_true[idx] == pos_label {
      hit_count += 1.0
      let prec_at_i = hit_count / (i + 1).to_double()
      sum_prec += prec_at_i
    }
  }
  sum_prec / total_rel
}

///|
/// Computes Mean Average Precision (`MAP`) across multiple queries.
pub fn mean_average_precision(
  queries_true : Array[Array[Int]],
  queries_scores : Array[Array[Double]],
  pos_label~ : Int = 1
) -> Double raise @core.MetricError {
  @core.validate_same_length(queries_true, queries_scores)
  @core.validate_non_empty(
    queries_true,
    message="Must provide at least one query for MAP",
  )
  let mut sum_ap = 0.0
  for i in 0..<queries_true.length() {
    sum_ap += average_precision(queries_true[i], queries_scores[i], pos_label~)
  }
  sum_ap / queries_true.length().to_double()
}
