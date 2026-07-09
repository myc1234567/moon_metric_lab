///|
/// Computes Euclidean distance (`L2 norm`) between two feature vectors.
pub fn euclidean_distance(
  p1 : Array[Double],
  p2 : Array[Double]
) -> Double raise @core.MetricError {
  @core.validate_same_length(p1, p2)
  let mut sum_sq = 0.0
  for i in 0..<p1.length() {
    let diff = p1[i] - p2[i]
    sum_sq += diff * diff
  }
  sum_sq.sqrt()
}

///|
/// Computes Mean Silhouette Coefficient across all samples (`[-1.0, 1.0]`).
pub fn silhouette_score(
  x : Array[Array[Double]],
  labels : Array[Int]
) -> Double raise @core.MetricError {
  let n = x.length()
  if n != labels.length() {
    raise @core.DimensionMismatch(expected=n, actual=labels.length())
  }
  if n < 2 {
    raise @core.InvalidInput(
      message="Silhouette score requires at least 2 samples",
    )
  }
  let cluster_set : Map[Int, Int] = {}
  for l in labels {
    let cur = match cluster_set.get(l) {
      Some(c) => c
      None => 0
    }
    cluster_set[l] = cur + 1
  }
  let unique_clusters : Array[Int] = []
  for k, _ in cluster_set {
    unique_clusters.push(k)
  }
  let k = unique_clusters.length()
  if k < 2 || k >= n {
    raise @core.InvalidInput(
      message="Silhouette score requires 2 <= n_clusters < n_samples",
    )
  }
  let mut total_silhouette = 0.0
  for i in 0..<n {
    let my_cluster = labels[i]
    let my_cluster_size = cluster_set[my_cluster]
    if my_cluster_size <= 1 {
      continue
    }
    let mut sum_a = 0.0
    for j in 0..<n {
      if i != j && labels[j] == my_cluster {
        sum_a += euclidean_distance(x[i], x[j])
      }
    }
    let a_i = sum_a / (my_cluster_size - 1).to_double()
    let mut b_i = @double.max_value
    for c in unique_clusters {
      if c == my_cluster {
        continue
      }
      let mut sum_b = 0.0
      let mut count_b = 0.0
      for j in 0..<n {
        if labels[j] == c {
          sum_b += euclidean_distance(x[i], x[j])
          count_b += 1.0
        }
      }
      if count_b > 0.0 {
        let avg_b = sum_b / count_b
        if avg_b < b_i {
          b_i = avg_b
        }
      }
    }
    let max_ab = if a_i > b_i { a_i } else { b_i }
    if max_ab > @core.EPSILON {
      total_silhouette += (b_i - a_i) / max_ab
    }
  }
  total_silhouette / n.to_double()
}

///|
/// Helper to compute the centroid of a subset of points.
fn compute_centroid(
  points : Array[Array[Double]]
) -> Array[Double] raise @core.MetricError {
  @core.validate_non_empty(points)
  let d = points[0].length()
  let centroid = Array::make(d, 0.0)
  for p in points {
    for i in 0..<d {
      centroid[i] = centroid[i] + p[i]
    }
  }
  let n = points.length().to_double()
  for i in 0..<d {
    centroid[i] = centroid[i] / n
  }
  centroid
}

///|
/// Computes Calinski-Harabasz score (`Variance Ratio Criterion`).
pub fn calinski_harabasz_score(
  x : Array[Array[Double]],
  labels : Array[Int]
) -> Double raise @core.MetricError {
  let n = x.length()
  if n != labels.length() {
    raise @core.DimensionMismatch(expected=n, actual=labels.length())
  }
  if n < 2 {
    raise @core.InvalidInput(
      message="Calinski-Harabasz score requires at least 2 samples",
    )
  }
  let cluster_map : Map[Int, Array[Array[Double]]] = {}
  for i in 0..<n {
    let l = labels[i]
    let arr = match cluster_map.get(l) {
      Some(a) => a
      None => []
    }
    arr.push(x[i])
    cluster_map[l] = arr
  }
  let unique_clusters : Array[Int] = []
  for k, _ in cluster_map {
    unique_clusters.push(k)
  }
  let k = unique_clusters.length()
  if k < 2 || k >= n {
    raise @core.InvalidInput(
      message="Calinski-Harabasz score requires 2 <= n_clusters < n_samples",
    )
  }
  let overall_centroid = compute_centroid(x)
  let mut bgss = 0.0
  let mut wgss = 0.0
  for c_id in unique_clusters {
    let c_points = cluster_map[c_id]
    let c_centroid = compute_centroid(c_points)
    let dist_overall = euclidean_distance(c_centroid, overall_centroid)
    bgss += c_points.length().to_double() * dist_overall * dist_overall
    for p in c_points {
      let dist_p = euclidean_distance(p, c_centroid)
      wgss += dist_p * dist_p
    }
  }
  if wgss < @core.EPSILON {
    1.0
  } else {
    bgss * (n - k).to_double() / (wgss * (k - 1).to_double())
  }
}

///|
/// Computes Davies-Bouldin index (`DBI`, lower is better cluster separation).
pub fn davies_bouldin_score(
  x : Array[Array[Double]],
  labels : Array[Int]
) -> Double raise @core.MetricError {
  let n = x.length()
  if n != labels.length() {
    raise @core.DimensionMismatch(expected=n, actual=labels.length())
  }
  if n < 2 {
    raise @core.InvalidInput(message="Davies-Bouldin requires at least 2 samples")
  }
  let cluster_map : Map[Int, Array[Array[Double]]] = {}
  for i in 0..<n {
    let l = labels[i]
    let arr = match cluster_map.get(l) {
      Some(a) => a
      None => []
    }
    arr.push(x[i])
    cluster_map[l] = arr
  }
  let unique_clusters : Array[Int] = []
  for k, _ in cluster_map {
    unique_clusters.push(k)
  }
  let k = unique_clusters.length()
  if k < 2 || k >= n {
    raise @core.InvalidInput(
      message="Davies-Bouldin requires 2 <= n_clusters < n_samples",
    )
  }
  let centroids : Map[Int, Array[Double]] = {}
  let scatters : Map[Int, Double] = {}
  for c_id in unique_clusters {
    let c_points = cluster_map[c_id]
    let c_centroid = compute_centroid(c_points)
    centroids[c_id] = c_centroid
    let mut sum_dist = 0.0
    for p in c_points {
      sum_dist += euclidean_distance(p, c_centroid)
    }
    scatters[c_id] = sum_dist / c_points.length().to_double()
  }
  let mut total_max_r = 0.0
  for i in 0..<k {
    let c_i = unique_clusters[i]
    let s_i = scatters[c_i]
    let mut max_r = 0.0
    for j in 0..<k {
      if i == j {
        continue
      }
      let c_j = unique_clusters[j]
      let s_j = scatters[c_j]
      let dist_ij = euclidean_distance(centroids[c_i], centroids[c_j])
      if dist_ij > @core.EPSILON {
        let r_ij = (s_i + s_j) / dist_ij
        if r_ij > max_r {
          max_r = r_ij
        }
      }
    }
    total_max_r += max_r
  }
  total_max_r / k.to_double()
}
