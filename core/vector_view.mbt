///|
/// A lightweight, zero-copy view of a 1D array slice for numerical and metric evaluations.
pub struct Vector[T] {
  data : Array[T]
  start : Int
  length : Int
} derive(Debug, Eq)

///|
/// Creates a new `Vector` view from an entire array without copying.
pub fn[T] Vector::from_array(arr : Array[T]) -> Vector[T] {
  { data: arr, start: 0, length: arr.length() }
}

///|
/// Creates a sub-vector slice of length `len` starting at `start` without copying underlying data.
pub fn[T] Vector::slice(
  self : Vector[T],
  start : Int,
  len : Int
) -> Vector[T] raise MetricError {
  if start < 0 || len < 0 || start + len > self.length {
    raise InvalidInput(message="Invalid slice bounds for Vector view")
  }
  { data: self.data, start: self.start + start, length: len }
}

///|
/// Returns the number of elements in this `Vector` view.
pub fn[T] Vector::length(self : Vector[T]) -> Int {
  self.length
}

///|
/// Safely retrieves the element at index `i`, raising `MetricError::InvalidInput` if out of bounds.
pub fn[T] Vector::get(self : Vector[T], i : Int) -> T raise MetricError {
  if i < 0 || i >= self.length {
    raise InvalidInput(message="Vector index out of bounds: " + i.to_string())
  }
  self.data[self.start + i]
}

///|
/// Converts the `Vector` view into a freshly allocated standard MoonBit `Array[T]`.
pub fn[T] Vector::to_array(self : Vector[T]) -> Array[T] {
  let result : Array[T] = []
  for i in 0..<self.length {
    result.push(self.data[self.start + i])
  }
  result
}
