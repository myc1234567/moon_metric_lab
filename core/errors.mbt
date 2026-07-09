///|
/// Core error types for the `MoonMetricLab` evaluation framework.
pub suberror MetricError {
  DimensionMismatch(expected~ : Int, actual~ : Int)
  EmptyInput(message~ : String)
  ZeroDivision(message~ : String)
  InvalidThreshold(threshold~ : Double)
  InvalidProbability(prob~ : Double)
  InvalidInput(message~ : String)
} derive(Debug, Eq)

///|
/// Returns a human-readable description of a `MetricError`.
pub fn MetricError::to_string(self : MetricError) -> String {
  match self {
    DimensionMismatch(expected~, actual~) =>
      "Dimension mismatch: expected length " +
      expected.to_string() +
      ", got " +
      actual.to_string()
    EmptyInput(message~) => "Empty input array: " + message
    ZeroDivision(message~) => "Zero division error: " + message
    InvalidThreshold(threshold~) =>
      "Invalid threshold value: " + threshold.to_string() + " (must be in [0, 1])"
    InvalidProbability(prob~) =>
      "Invalid probability value: " + prob.to_string() + " (must be in [0, 1])"
    InvalidInput(message~) => "Invalid input: " + message
  }
}

///|
/// Asserts that two arrays have identical lengths, raising `MetricError::DimensionMismatch` if they differ.
pub fn[T, U] validate_same_length(
  arr1 : Array[T],
  arr2 : Array[U]
) -> Unit raise MetricError {
  if arr1.length() != arr2.length() {
    raise DimensionMismatch(expected=arr1.length(), actual=arr2.length())
  }
}

///|
/// Asserts that an array is non-empty, raising `MetricError::EmptyInput` if empty.
pub fn[T] validate_non_empty(
  arr : Array[T],
  message~ : String = "Array must not be empty"
) -> Unit raise MetricError {
  if arr.is_empty() {
    raise EmptyInput(message~)
  }
}

///|
/// Asserts that all elements in an array of probabilities are within [0.0, 1.0].
pub fn validate_probabilities(arr : Array[Double]) -> Unit raise MetricError {
  for p in arr {
    if p < 0.0 || p > 1.0 {
      raise InvalidProbability(prob=p)
    }
  }
}
