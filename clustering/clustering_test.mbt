///|
test "internal clustering metrics: silhouette, calinski_harabasz, davies_bouldin" {
  let x = [[1.0, 1.0], [1.2, 0.8], [5.0, 5.0], [5.2, 4.8]]
  let labels = [0, 0, 1, 1]
  let sil = silhouette_score(x, labels)
  inspect(sil > 0.8 && sil < 1.0, content="true")
  let ch = calinski_harabasz_score(x, labels)
  inspect(ch > 100.0, content="true")
  let dbi = davies_bouldin_score(x, labels)
  inspect(dbi < 0.2, content="true")
}

///|
test "external clustering metrics: ARI, NMI, FMI" {
  let labels_true = [0, 0, 1, 1, 2, 2]
  let labels_pred = [1, 1, 0, 0, 2, 2]
  inspect(adjusted_rand_index(labels_true, labels_pred), content="1")
  inspect(
    normalized_mutual_info(labels_true, labels_pred, average_method="arithmetic"),
    content="1",
  )
  inspect(fowlkes_mallows_score(labels_true, labels_pred), content="1")
}

///|
test "external clustering metrics partial agreement" {
  let labels_true = [0, 0, 1, 1]
  let labels_pred = [0, 1, 0, 1]
  let ari = adjusted_rand_index(labels_true, labels_pred)
  inspect(ari < 0.1, content="true")
  let nmi = normalized_mutual_info(
    labels_true,
    labels_pred,
    average_method="geometric",
  )
  inspect(nmi < 0.1, content="true")
}

///|
test "panic silhouette single cluster or invalid clusters" {
  let x = [[1.0], [2.0], [3.0]]
  ignore(silhouette_score(x, [0, 0, 0]))
}
