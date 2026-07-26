///|
test "Vector basic slicing and access" {
  let arr = [10.0, 20.0, 30.0, 40.0, 50.0]
  let vec = Vector::from_array(arr)
  inspect(vec.length(), content="5")
  let slice = vec.slice(1, 3)
  inspect(slice.length(), content="3")
  inspect(slice.get(0), content="20")
  inspect(slice.get(2), content="40")
  debug_inspect(slice.to_array(), content="[20, 30, 40]")
}

///|
test "Matrix creation, set, get, and row view" {
  let mat = Matrix::new(2, 3, 0.0)
  mat.set(0, 1, 5.5)
  mat.set(1, 2, 9.9)
  inspect(mat.rows(), content="2")
  inspect(mat.cols(), content="3")
  inspect(mat.get(0, 1), content="5.5")
  inspect(mat.get(1, 2), content="9.9")
  let row1 = mat.row_view(1)
  debug_inspect(row1.to_array(), content="[0, 0, 9.9]")
}

///|
test "Matrix from_2d_array" {
  let mat = Matrix::from_2d_array([[1, 2], [3, 4]])
  inspect(mat.get(1, 0), content="3")
  inspect(mat.get(1, 1), content="4")
}

///|
test "panic Matrix index out of bounds" {
  let mat = Matrix::new(2, 2, 1)
  ignore(mat.get(2, 0))
}

///|
test "stats_utils mean, variance, and std_dev" {
  let data = [2.0, 4.0, 4.0, 4.0, 5.0, 5.0, 7.0, 9.0]
  let m = mean(data)
  inspect(m, content="5")
  let var_val = variance(data, ddof=1)
  inspect(var_val, content="4.571428571428571")
  let std_val = std_dev(data, ddof=1)
  inspect(std_val, content="2.138089935299395")
}

///|
test "stats_utils weighted_mean" {
  let values = [10.0, 20.0, 30.0]
  let weights = [1.0, 2.0, 3.0]
  let wm = weighted_mean(values, weights)
  inspect(wm, content="23.333333333333332")
}

///|
test "stats_utils argmax and argsort" {
  let arr = [3.5, 1.2, 8.9, 4.4]
  inspect(argmax(arr), content="2")
  debug_inspect(argsort(arr), content="[1, 0, 3, 2]")
}

///|
test "stats_utils trapezoidal_area" {
  let x = [0.0, 1.0, 2.0]
  let y = [0.0, 2.0, 4.0]
  let area = trapezoidal_area(x, y)
  inspect(area, content="4")
}

///|
test "panic validate_same_length dimension mismatch" {
  validate_same_length([1, 2], [1, 2, 3])
}

///|
test "panic validate_non_empty" {
  validate_non_empty(([] : Array[Int]))
}
