///|
test "mean and variance" {
  let v = @core.Vector::from_array([1.0, 2.0, 3.0, 4.0, 5.0])
  let m = mean(v)
  let v_var = variance(v)
  if m != 3.0 {
    fail("mean is wrong")
  }
  if v_var != 2.5 {
    fail("variance is wrong")
  }
}

///|
test "welch_t_test" {
  let v1 = @core.Vector::from_array([20.1, 20.2, 20.3, 20.4, 20.5])
  let v2 = @core.Vector::from_array([10.1, 10.2, 10.3, 10.4, 10.5])
  let t = welch_t_test(v1, v2)
  if t <= 10.0 {
    fail("T-statistic should be large")
  }
}
