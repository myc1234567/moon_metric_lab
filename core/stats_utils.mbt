///|
/// Machine epsilon tolerance used to prevent zero-division and floating-point instability.
pub const EPSILON : Double = 1.0e-15

///|
/// Performs safe division `numerator / denominator`, returning `0.0` or raising if `denominator` is near zero depending on `raise_on_zero`.
pub fn safe_div(
  numerator : Double,
  denominator : Double,
  raise_on_zero~ : Bool = false
) -> Double raise MetricError {
  if denominator.abs() < EPSILON {
    if raise_on_zero {
      raise ZeroDivision(message="Division by zero encountered in calculation")
    } else {
      0.0
    }
  } else {
    numerator / denominator
  }
}

///|
/// Performs numerically stable natural logarithm `ln(max(p, EPSILON))` to prevent `-Infinity` in cross-entropy/log-loss.
pub fn safe_log(p : Double) -> Double {
  if p < EPSILON {
    @math.ln(EPSILON)
  } else if p > 1.0 - EPSILON {
    @math.ln(1.0 - EPSILON)
  } else {
    @math.ln(p)
  }
}

///|
/// Computes the arithmetic mean of a double array.
pub fn mean(arr : Array[Double]) -> Double raise MetricError {
  validate_non_empty(arr, message="Cannot compute mean of an empty array")
  let mut sum = 0.0
  for v in arr {
    sum += v
  }
  sum / arr.length().to_double()
}

///|
/// Computes the weighted mean of a double array given weights.
pub fn weighted_mean(
  arr : Array[Double],
  weights : Array[Double]
) -> Double raise MetricError {
  validate_same_length(arr, weights)
  validate_non_empty(arr, message="Cannot compute weighted mean of empty array")
  let mut sum_val = 0.0
  let mut sum_w = 0.0
  for i in 0..<arr.length() {
    sum_val += arr[i] * weights[i]
    sum_w += weights[i]
  }
  safe_div(sum_val, sum_w)
}

///|
/// Computes the sample variance of a double array (`ddof=1` by default, set `ddof=0` for population variance).
pub fn variance(
  arr : Array[Double],
  ddof~ : Int = 1
) -> Double raise MetricError {
  let n = arr.length()
  if n <= ddof {
    raise InvalidInput(
      message="Array length must be greater than degrees of freedom (" +
      ddof.to_string() +
      ")",
    )
  }
  let m = mean(arr)
  let mut sum_sq = 0.0
  for v in arr {
    let diff = v - m
    sum_sq += diff * diff
  }
  sum_sq / (n - ddof).to_double()
}

///|
/// Computes the standard deviation of a double array.
pub fn std_dev(
  arr : Array[Double],
  ddof~ : Int = 1
) -> Double raise MetricError {
  variance(arr, ddof~).sqrt()
}

///|
/// Returns the index of the maximum element in `arr`.
pub fn argmax(arr : Array[Double]) -> Int raise MetricError {
  validate_non_empty(arr, message="Cannot compute argmax of empty array")
  let mut max_idx = 0
  let mut max_val = arr[0]
  for i in 1..<arr.length() {
    if arr[i] > max_val {
      max_val = arr[i]
      max_idx = i
    }
  }
  max_idx
}

///|
/// Returns an array of indices that sort the input array in ascending order (`argsort`).
pub fn argsort(arr : Array[Double]) -> Array[Int] {
  let indices : Array[Int] = []
  for i in 0..<arr.length() {
    indices.push(i)
  }
  indices.sort_by(fn(i, j) {
    if arr[i] < arr[j] {
      -1
    } else if arr[i] > arr[j] {
      1
    } else {
      0
    }
  })
  indices
}

///|
/// Computes the trapezoidal area under a curve given points `(x, y)` sorted by `x`.
pub fn trapezoidal_area(
  x : Array[Double],
  y : Array[Double]
) -> Double raise MetricError {
  validate_same_length(x, y)
  if x.length() < 2 {
    return 0.0
  }
  let mut area = 0.0
  for i in 1..<x.length() {
    let dx = x[i] - x[i - 1]
    let avg_y = (y[i] + y[i - 1]) / 2.0
    area += dx * avg_y
  }
  area.abs()
}
