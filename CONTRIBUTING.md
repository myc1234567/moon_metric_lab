# Contributing to MoonMetricLab

We welcome all contributions from the MoonBit developer community! Whether you want to add a new evaluation metric, improve numerical stability, or add documentation examples, please follow these guidelines:

## Development Setup

1. Make sure you have the latest MoonBit toolchain installed (`moon version --all`).
2. Clone the repository and run all tests before making edits:
   ```bash
   moon check --target all
   moon test -v
   ```

## Coding Conventions

- **Module Layout**: Keep new features under the appropriate package (`core`, `classification`, `regression`, `clustering`, `ranking`, `report`, or `visualization`).
- **Separation of Concerns**: Use `///|` as the block delimiter between top-level functions or structs.
- **Spec-Driven**: If introducing a major new trait or top-level type, declare its contract in `spec.mbt` or package interface.
- **Tests**: Add comprehensive black-box or white-box tests (`*_test.mbt` / `*_wbtest.mbt`). Always use `inspect(..)` or `debug_inspect(..)` snapshot testing.
- **Documentation**: Write clear docstrings for all `pub` symbols and verify them with `README.mbt.md` / `mbt check`.

## Submitting Pull Requests

1. Run `moon fmt` to format your code.
2. Run `moon info` to update `pkg.generated.mbti` if you added/changed public APIs.
3. Write descriptive commit messages explaining the problem and the solution.
