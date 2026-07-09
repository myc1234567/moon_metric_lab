///|
/// Spec-driven Development declarations for `MoonMetricLab`.
/// All module-level interfaces and contracts are declared here to guide implementation across packages.

///|
declare pub type Vector[T]

///|
declare pub type Matrix[T]

///|
declare pub trait MetricEvaluator {
  name(Self) -> String
  evaluate(Self, Array[Double], Array[Double]) -> Double raise
}

///|
declare pub trait ClassifierMetric {
  name(Self) -> String
  compute(Self, Array[Int], Array[Int]) -> Double raise
}

///|
declare pub trait ClusteringMetric {
  name(Self) -> String
  evaluate_clusters(Self, Array[Array[Double]], Array[Int]) -> Double raise
}
