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

///|
test "paired difference and effect size" {
  let before = @core.Vector::from_array([0.70, 0.75, 0.80, 0.85])
  let after = @core.Vector::from_array([0.75, 0.80, 0.85, 0.90])
  let difference = paired_mean_difference(before, after)
  if difference < 0.049 || difference > 0.051 {
    fail("paired mean difference is wrong")
  }
  if standard_error(before) <= 0.0 {
    fail("standard error should be positive")
  }
  if cohens_d(before, after) >= 0.0 {
    fail("effect direction should be before minus after")
  }
}

///|
test "effect size rejects invalid boundaries" {
  let one = @core.Vector::from_array([1.0])
  let two = @core.Vector::from_array([1.0, 2.0])
  let _ = standard_error(one) catch {
    @core.InvalidInput(message=_) => 0.0
    _ => fail("expected invalid sample error")
  }
  let _ = paired_mean_difference(one, two) catch {
    @core.DimensionMismatch(expected=1, actual=2) => 0.0
    _ => fail("expected paired dimension error")
  }
}
