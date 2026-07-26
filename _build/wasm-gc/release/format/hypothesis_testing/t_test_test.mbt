test "independent_t_test" {
  let s1 = @core.VectorView::from_array([1.0, 2.0, 3.0, 4.0, 5.0])
  let s2 = @core.VectorView::from_array([2.0, 3.0, 4.0, 5.0, 6.0])
  let res = independent_t_test!(s1, s2)
  @core.assert_approx_eq!(res.t_value, -1.0, 1e-5)
  @core.assert_approx_eq!(res.df, 8.0, 1e-5)
}
