///|
test "continuous regression metrics: mae, mse, rmse, r2, mape" {
  let y_true = [3.0, -0.5, 2.0, 7.0]
  let y_pred = [2.5, 0.0, 2.0, 8.0]
  inspect(mae(y_true, y_pred), content="0.5")
  inspect(mse(y_true, y_pred), content="0.375")
  inspect(rmse(y_true, y_pred), content="0.6123724356957945")
  let r2 = r2_score(y_true, y_pred)
  inspect(r2 > 0.94 && r2 < 0.96, content="true")
  let mape_val = mape(y_true, y_pred)
  inspect(mape_val > 32.0 && mape_val < 33.0, content="true")
}

///|
test "continuous regression metrics: explained_variance and max_error" {
  let y_true = [3.0, -0.5, 2.0, 7.0]
  let y_pred = [2.5, 0.0, 2.0, 8.0]
  let ev = explained_variance_score(y_true, y_pred)
  inspect(ev > 0.95 && ev < 0.97, content="true")
  inspect(max_error(y_true, y_pred), content="1")
}

///|
test "robust regression metrics: huber_loss, pinball_loss, log_cosh_loss" {
  let y_true = [1.0, 2.0, 3.0, 10.0]
  let y_pred = [1.0, 2.0, 3.0, 2.0]
  let huber = huber_loss(y_true, y_pred, delta=1.5)
  inspect(huber, content="2.71875")
  let pinball_50 = pinball_loss(y_true, y_pred, alpha=0.5)
  inspect(pinball_50, content="1")
  let pinball_90 = pinball_loss(y_true, y_pred, alpha=0.9)
  inspect(pinball_90, content="1.8")
  let lc = log_cosh_loss(y_true, y_pred)
  inspect(lc > 1.8 && lc < 1.9, content="true")
}

///|
test "panic regression length mismatch" {
  ignore(mae([1.0, 2.0], [1.0]))
}

///|
test "panic huber_loss negative delta" {
  ignore(huber_loss([1.0], [1.0], delta=-0.5))
}
