///|
test "ranking metrics: dcg_at_k and ndcg_at_k" {
  let y_rels = [3.0, 2.0, 3.0, 0.0, 1.0, 2.0]
  let y_scores = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4]
  let ndcg_5 = ndcg_at_k(y_rels, y_scores, k=5)
  inspect(ndcg_5, content=(
    #|0.8755943764161997
  ))
  let ideal_scores = [3.0, 3.0, 2.0, 2.0, 1.0, 0.0]
  let ndcg_perfect = ndcg_at_k(y_rels, ideal_scores, k=6)
  inspect(ndcg_perfect, content=(
    #|0.9488107485678985
  ))
}

///|
test "ranking metrics: reciprocal_rank and mrr" {
  let q1_rels = [0.0, 1.0, 0.0]
  let q1_scores = [0.1, 0.9, 0.5]
  inspect(reciprocal_rank(q1_rels, q1_scores, threshold=0.5), content="1")
  let q2_rels = [0.0, 0.0, 1.0]
  let q2_scores = [0.8, 0.9, 0.5]
  inspect(
    reciprocal_rank(q2_rels, q2_scores, threshold=0.5),
    content="0.3333333333333333",
  )
  let mrr_val = mean_reciprocal_rank([q1_rels, q2_rels], [q1_scores, q2_scores])
  inspect(mrr_val, content="0.6666666666666666")
}

///|
test "ranking metrics: average_precision and map" {
  let q1_true = [1, 0, 1, 0, 0]
  let q1_scores = [0.9, 0.8, 0.7, 0.6, 0.5]
  let ap1 = average_precision(q1_true, q1_scores, pos_label=1)
  inspect(ap1, content="0.8333333333333333")
  let q2_true = [0, 1, 0]
  let q2_scores = [0.9, 0.8, 0.7]
  let ap2 = average_precision(q2_true, q2_scores, pos_label=1)
  inspect(ap2, content="0.5")
  let map_val = mean_average_precision([q1_true, q2_true], [q1_scores, q2_scores])
  inspect(map_val, content="0.6666666666666666")
}

///|
test "panic dcg_at_k negative k" {
  ignore(dcg_at_k([1.0, 2.0], k=0))
}
