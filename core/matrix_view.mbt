///|
/// A dense 2D matrix structure stored row-major in a flat array, optimized for confusion matrices and multi-class statistics.
pub struct Matrix[T] {
  data : Array[T]
  rows : Int
  cols : Int
} derive(Debug, Eq)

///|
/// Creates a new `Matrix` of dimensions `rows` by `cols` initialized with `init_val`.
pub fn[T] Matrix::new(
  rows : Int,
  cols : Int,
  init_val : T
) -> Matrix[T] raise MetricError {
  if rows < 0 || cols < 0 {
    raise InvalidInput(message="Matrix dimensions cannot be negative")
  }
  let total = rows * cols
  let data : Array[T] = []
  for _i in 0..<total {
    data.push(init_val)
  }
  { data, rows, cols }
}

///|
/// Creates a `Matrix` from a nested 2D array, raising `MetricError::InvalidInput` if rows have inconsistent lengths.
pub fn[T] Matrix::from_2d_array(
  nested : Array[Array[T]]
) -> Matrix[T] raise MetricError {
  let rows = nested.length()
  if rows == 0 {
    return { data: [], rows: 0, cols: 0 }
  }
  let cols = nested[0].length()
  let data : Array[T] = []
  for r in 0..<rows {
    if nested[r].length() != cols {
      raise InvalidInput(
        message="Matrix from_2d_array requires all rows to have equal length",
      )
    }
    for c in 0..<cols {
      data.push(nested[r][c])
    }
  }
  { data, rows, cols }
}

///|
/// Returns the number of rows in the matrix.
pub fn[T] Matrix::rows(self : Matrix[T]) -> Int {
  self.rows
}

///|
/// Returns the number of columns in the matrix.
pub fn[T] Matrix::cols(self : Matrix[T]) -> Int {
  self.cols
}

///|
/// Retrieves the element at index `(row, col)`.
pub fn[T] Matrix::get(
  self : Matrix[T],
  row : Int,
  col : Int
) -> T raise MetricError {
  if row < 0 || row >= self.rows || col < 0 || col >= self.cols {
    raise InvalidInput(
      message="Matrix index out of bounds: (" +
      row.to_string() +
      ", " +
      col.to_string() +
      ")",
    )
  }
  self.data[row * self.cols + col]
}

///|
/// Sets the element at index `(row, col)` to `val`.
pub fn[T] Matrix::set(
  self : Matrix[T],
  row : Int,
  col : Int,
  val : T
) -> Unit raise MetricError {
  if row < 0 || row >= self.rows || col < 0 || col >= self.cols {
    raise InvalidInput(
      message="Matrix index out of bounds: (" +
      row.to_string() +
      ", " +
      col.to_string() +
      ")",
    )
  }
  self.data[row * self.cols + col] = val
}

///|
/// Returns row `row` as a zero-copy `Vector` view.
pub fn[T] Matrix::row_view(
  self : Matrix[T],
  row : Int
) -> Vector[T] raise MetricError {
  if row < 0 || row >= self.rows {
    raise InvalidInput(
      message="Matrix row index out of bounds: " + row.to_string(),
    )
  }
  { data: self.data, start: row * self.cols, length: self.cols }
}
