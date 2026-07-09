///|
/// A structured evaluation report for a single model run recording multiple metrics and hyperparameter metadata.
pub(all) struct ModelResult {
  model_name : String
  task_type : String
  metrics : Map[String, Double]
  metadata : Map[String, String]
} derive(Debug, Eq)

///|
/// Creates a new `ModelResult` for model `model_name` and task `task_type` (`"classification"`, `"regression"`, `"clustering"`, `"ranking"`).
pub fn ModelResult::new(model_name : String, task_type : String) -> ModelResult {
  { model_name, task_type, metrics: {}, metadata: {} }
}

///|
/// Adds or updates a numerical metric evaluation score (`name` -> `value`).
pub fn ModelResult::add_metric(
  self : ModelResult,
  name : String,
  value : Double
) -> Unit {
  self.metrics[name] = value
}

///|
/// Retrieves the evaluated value for `name` if present.
pub fn ModelResult::get_metric(self : ModelResult, name : String) -> Double? {
  self.metrics.get(name)
}

///|
/// Returns an iterator over all recorded metric `(name, value)` pairs.
pub fn ModelResult::iter_metrics(
  self : ModelResult
) -> Iter[(String, Double)] {
  self.metrics.iter()
}

///|
/// Adds hyperparameter or experiment context (`key` -> `value`).
pub fn ModelResult::add_metadata(
  self : ModelResult,
  key : String,
  value : String
) -> Unit {
  self.metadata[key] = value
}

///|
/// Retrieves experiment metadata for `key` if present.
pub fn ModelResult::get_metadata(self : ModelResult, key : String) -> String? {
  self.metadata.get(key)
}

///|
/// Returns all metric names sorted alphabetically.
pub fn ModelResult::metric_names(self : ModelResult) -> Array[String] {
  let names : Array[String] = []
  for k, _ in self.metrics {
    names.push(k)
  }
  names.sort()
  names
}
