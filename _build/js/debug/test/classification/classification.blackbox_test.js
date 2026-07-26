const $bytes_literal$0 = new Uint8Array([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47]);
function _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB13SourceLocRepr(param0, param1, param2, param3, param4) {
  this.filename = param0;
  this.start_line = param1;
  this.start_column = param2;
  this.end_line = param3;
  this.end_column = param4;
}
function _M0DTPC16result6ResultGuRPB12InspectErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB12InspectErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB12InspectErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB12InspectErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError.prototype.$tag = 10;
function _M0DTPC15error5Error131username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error131username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 9;
function _M0DTPC15error5Error133username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error133username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 8;
function _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch.prototype.$tag = 7;
function _M0DTPC15error5Error62username_2fmoon__metric__lab_2fcore_2eMetricError_2eEmptyInput(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62username_2fmoon__metric__lab_2fcore_2eMetricError_2eEmptyInput.prototype.$tag = 6;
function _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eZeroDivision(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eZeroDivision.prototype.$tag = 5;
function _M0DTPC15error5Error68username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidThreshold(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error68username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidThreshold.prototype.$tag = 4;
function _M0DTPC15error5Error70username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidProbability(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error70username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidProbability.prototype.$tag = 3;
function _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput.prototype.$tag = 2;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUiuEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiuE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGiuEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab4core6MatrixGiE(param0, param1, param2) {
  this.data = param0;
  this.rows = param1;
  this.cols = param2;
}
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab4core6MatrixGdE(param0, param1, param2) {
  this.data = param0;
  this.rows = param1;
  this.cols = param2;
}
function _M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab4core6VectorGdE(param0, param1, param2) {
  this.data = param0;
  this.start = param1;
  this.length = param2;
}
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab14classification14RocCurveResult(param0, param1, param2, param3) {
  this.fpr = param0;
  this.tpr = param1;
  this.thresholds = param2;
  this.auc = param3;
}
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification13PrCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification13PrCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification13PrCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification13PrCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab14classification13PrCurveResult(param0, param1, param2, param3) {
  this.precision_curve = param0;
  this.recall_curve = param1;
  this.thresholds = param2;
  this.auc = param3;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUiuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TP38username17moon__metric__lab14classification15ConfusionMatrix(param0, param1) {
  this.matrix = param0;
  this.classes = param1;
}
function _M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP38username17moon__metric__lab30classification__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP38username17moon__metric__lab30classification__blackbox__test38moonbit__test__driver__js__parse__args = () => {
  try {
    let testParams = []
    // check if there is command line argument
    if (process.argv.length > 2) {
      const testArgs = JSON.parse(process.argv[2])
      testParams = testArgs.file_and_index.flatMap(([file, ranges]) => {
        let arr = []
        for (let range of ranges) {
          for (let i = range.start; i < range.end; i++) {
            arr.push([file, i])
          }
        }
        return arr
      })
      return testParams
    }
  } catch (error) {
    console.error('failed to parse args: ', error.message)
    process.exit(1)
  }
};
const _M0FP090moonbitlang_2fcore_2fbuiltin_2fArray_5bInt_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug = { method_0: _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE };
const _M0FP050Bool_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGbE, method_1: _M0IPC14bool4BoolPB4Show10to__string };
const _M0FP093moonbitlang_2fcore_2fbuiltin_2fArray_5bDouble_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug = { method_0: _M0IPC15array5ArrayPC15debug5Debug8to__reprGdE };
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGdE, method_1: _M0IPC16double6DoublePB4Show10to__string };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 5: {
      return "username/moon_metric_lab/core.MetricError.ZeroDivision";
    }
    case 2: {
      return "username/moon_metric_lab/core.MetricError.InvalidInput";
    }
    case 8: {
      return "username/moon_metric_lab/classification_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    case 1: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
    case 4: {
      return "username/moon_metric_lab/core.MetricError.InvalidThreshold";
    }
    case 7: {
      return "username/moon_metric_lab/core.MetricError.DimensionMismatch";
    }
    case 9: {
      return "username/moon_metric_lab/classification_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
    }
    case 3: {
      return "username/moon_metric_lab/core.MetricError.InvalidProbability";
    }
    case 6: {
      return "username/moon_metric_lab/core.MetricError.EmptyInput";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    default: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
  }
}
const _M0FPB14base64__encodeN6base64S2128 = $bytes_literal$0;
const _M0MPC16string6String4trimN7_2abindS6450 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9224GUiuEE = 0;
const _M0MPB4Iter4nextN6constrS9225GUiuEE = 0;
const _M0MPB4Iter3newN6constrS9232GUiuEE = 0;
const _M0FPC15debug14compact__linesN7_2abindS1173 = "";
const _M0FPC15debug14compact__linesN7_2abindS1196 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1190 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1183 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1177 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1175 = "";
const _M0FPC15debug14compact__linesN7_2abindS1197 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1201 = "";
const _M0FPC15debug14compact__linesN7_2abindS1210 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1204 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1215 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1224 = "";
const _M0FPC15debug14print__contentN7_2abindS1293 = "\n";
const _M0FPC15debug6renderN6constrS1755 = 16;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPB18brute__force__findN6constrS9235 = 0;
const _M0FPB28boyer__moore__horspool__findN6constrS9234 = 0;
const _bind = [{ _0: 0, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__0, _1: ["ROC curve evaluation and AUC"] } }, { _0: 1, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__1, _1: ["Precision-Recall curve points and AUC"] } }, { _0: 2, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__2, _1: ["Optimal threshold finding (F1 and Youden)"] } }];
const _tmp = { _0: "threshold_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 3), undefined) };
const _bind$2 = [];
const _tmp$2 = { _0: "threshold_scanner.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$2, 0, 0), undefined) };
const _bind$3 = [];
const _tmp$3 = { _0: "multiclass.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$3, 0, 0), undefined) };
const _bind$4 = [{ _0: 0, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__0, _1: ["ConfusionMatrix from_predictions and properties"] } }, { _0: 1, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__1, _1: ["ConfusionMatrix normalization modes"] } }, { _0: 2, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__2, _1: ["ConfusionMatrix to_table_string"] } }];
const _tmp$4 = { _0: "confusion_matrix_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$4, 0, 3), undefined) };
const _bind$5 = [];
const _tmp$5 = { _0: "confusion_matrix.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$5, 0, 0), undefined) };
const _bind$6 = [{ _0: 0, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__0, _1: ["binary metrics: accuracy, precision, recall, f1"] } }, { _0: 1, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__1, _1: ["binary metrics: log_loss, mcc, balanced_accuracy, jaccard, brier"] } }, { _0: 2, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__2, _1: ["multiclass metrics: precision, recall, f1 (Macro, Micro, Weighted)"] } }, { _0: 3, _1: { _0: _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__3, _1: ["top_k_accuracy and multiclass_log_loss"] } }];
const _tmp$6 = { _0: "classification_test.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$6, 0, 4), undefined) };
const _bind$7 = [];
const _bind$8 = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, { _0: "binary.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$7, 0, 0), undefined) }];
const _M0FP38username17moon__metric__lab30classification__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$8, 0, 7), undefined);
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGiE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGRPB12MutArrayViewGiEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_5192, _x_5193) {
  const _Failure = _x_5192;
  const _$42$arg_5194 = _Failure._0;
  _x_5193.method_table.method_0(_x_5193.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_5193, _$42$arg_5194);
  _x_5193.method_table.method_0(_x_5193.self, ")");
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i < len) {
        const _tmp$8 = dst_offset + i | 0;
        const _tmp$9 = src_offset + i | 0;
        $bound_check(src, _tmp$9);
        $bound_check(dst, _tmp$8);
        dst[_tmp$8] = src[_tmp$9];
        _tmp$7 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$7 = len - 1 | 0;
    while (true) {
      const i = _tmp$7;
      if (i >= 0) {
        const _tmp$8 = dst_offset + i | 0;
        const _tmp$9 = src_offset + i | 0;
        $bound_check(src, _tmp$9);
        $bound_check(dst, _tmp$8);
        dst[_tmp$8] = src[_tmp$9];
        _tmp$7 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0FPB14base64__encode(data) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const len = data.length;
  if (3 === 0) {
    $panic();
  }
  const rem = len % 3 | 0;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < (len - rem | 0)) {
      $bound_check(data, i);
      const b0 = data[i];
      const _tmp$8 = i + 1 | 0;
      $bound_check(data, _tmp$8);
      const b1 = data[_tmp$8];
      const _tmp$9 = i + 2 | 0;
      $bound_check(data, _tmp$9);
      const b2 = data[_tmp$9];
      const _tmp$10 = (b0 & 252) >> 2;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$10);
      const x0 = _M0FPB14base64__encodeN6base64S2128[_tmp$10];
      const _tmp$11 = (b0 & 3) << 4 | (b1 & 240) >> 4;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$11);
      const x1 = _M0FPB14base64__encodeN6base64S2128[_tmp$11];
      const _tmp$12 = (b1 & 15) << 2 | (b2 & 192) >> 6;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$12);
      const x2 = _M0FPB14base64__encodeN6base64S2128[_tmp$12];
      const _tmp$13 = b2 & 63;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$13);
      const x3 = _M0FPB14base64__encodeN6base64S2128[_tmp$13];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x0));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x1));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x2));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x3));
      _tmp$7 = i + 3 | 0;
      continue;
    } else {
      break;
    }
  }
  if (rem === 1) {
    const _tmp$8 = len - 1 | 0;
    $bound_check(data, _tmp$8);
    const b0 = data[_tmp$8];
    const _tmp$9 = (b0 & 252) >> 2;
    $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$9);
    const x0 = _M0FPB14base64__encodeN6base64S2128[_tmp$9];
    const _tmp$10 = (b0 & 3) << 4;
    $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$10);
    const x1 = _M0FPB14base64__encodeN6base64S2128[_tmp$10];
    _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x0));
    _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x1));
    _M0IPB13StringBuilderPB6Logger11write__char(buf, 61);
    _M0IPB13StringBuilderPB6Logger11write__char(buf, 61);
  } else {
    if (rem === 2) {
      const _tmp$8 = len - 2 | 0;
      $bound_check(data, _tmp$8);
      const b0 = data[_tmp$8];
      const _tmp$9 = len - 1 | 0;
      $bound_check(data, _tmp$9);
      const b1 = data[_tmp$9];
      const _tmp$10 = (b0 & 252) >> 2;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$10);
      const x0 = _M0FPB14base64__encodeN6base64S2128[_tmp$10];
      const _tmp$11 = (b0 & 3) << 4 | (b1 & 240) >> 4;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$11);
      const x1 = _M0FPB14base64__encodeN6base64S2128[_tmp$11];
      const _tmp$12 = (b1 & 15) << 2;
      $bound_check(_M0FPB14base64__encodeN6base64S2128, _tmp$12);
      const x2 = _M0FPB14base64__encodeN6base64S2128[_tmp$12];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x0));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x1));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC14byte4Byte8to__char(x2));
      _M0IPB13StringBuilderPB6Logger11write__char(buf, 61);
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0MPC16string6String20char__length_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    let _tmp$7 = start_offset;
    let _tmp$8 = 0;
    while (true) {
      const utf16_index = _tmp$7;
      const char_count = _tmp$8;
      if (utf16_index < end_offset$2) {
        const c1 = self.charCodeAt(utf16_index);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (utf16_index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(utf16_index + 1 | 0);
          if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
            _tmp$7 = utf16_index + 2 | 0;
            _tmp$8 = char_count + 1 | 0;
            continue;
          } else {
            _M0FPC15abort5abortGuE("invalid surrogate pair");
          }
        }
        _tmp$7 = utf16_index + 1 | 0;
        _tmp$8 = char_count + 1 | 0;
        continue;
      } else {
        return char_count;
      }
    }
  } else {
    return _M0FPC15abort5abortGiE("invalid start or end index for String::codepoint_length");
  }
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0FPB33base64__encode__string__codepoint(s) {
  const codepoint_length = _M0MPC16string6String20char__length_2einner(s, 0, undefined);
  const data = $makebytes(Math.imul(codepoint_length, 4) | 0, 0);
  let _tmp$7 = 0;
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$7;
    const utf16_index = _tmp$8;
    if (i < codepoint_length) {
      const c = _M0MPC16string6String16unsafe__char__at(s, utf16_index);
      if (c > 65535) {
        const _tmp$9 = Math.imul(i, 4) | 0;
        $bound_check(data, _tmp$9);
        data[_tmp$9] = c & 255;
        const _tmp$10 = (Math.imul(i, 4) | 0) + 1 | 0;
        $bound_check(data, _tmp$10);
        data[_tmp$10] = c >> 8 & 255;
        const _tmp$11 = (Math.imul(i, 4) | 0) + 2 | 0;
        $bound_check(data, _tmp$11);
        data[_tmp$11] = c >> 16 & 255;
        const _tmp$12 = (Math.imul(i, 4) | 0) + 3 | 0;
        $bound_check(data, _tmp$12);
        data[_tmp$12] = c >> 24 & 255;
        _tmp$7 = i + 1 | 0;
        _tmp$8 = utf16_index + 2 | 0;
        continue;
      } else {
        const _tmp$9 = Math.imul(i, 4) | 0;
        $bound_check(data, _tmp$9);
        data[_tmp$9] = c & 255;
        const _tmp$10 = (Math.imul(i, 4) | 0) + 1 | 0;
        $bound_check(data, _tmp$10);
        data[_tmp$10] = c >> 8 & 255;
        const _tmp$11 = (Math.imul(i, 4) | 0) + 2 | 0;
        $bound_check(data, _tmp$11);
        data[_tmp$11] = 0;
        const _tmp$12 = (Math.imul(i, 4) | 0) + 3 | 0;
        $bound_check(data, _tmp$12);
        data[_tmp$12] = 0;
      }
      _tmp$7 = i + 1 | 0;
      _tmp$8 = utf16_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB14base64__encode(data);
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3848(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3848(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3848(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = _end < 0 ? self.end + _end | 0 : self.start + _end | 0;
  }
  const abs_start = start < 0 ? self.end + start | 0 : self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp$7 = 0;
  let _tmp$8 = 0;
  _L: while (true) {
    const i = _tmp$7;
    const seg = _tmp$8;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp$7 = i + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp$7 = i + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp$7 = i + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp$7 = i + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (_M0IP016_24default__implPB7Compare6op__ltGkE(code, 32)) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp$7 = i + 1 | 0;
            _tmp$8 = i + 1 | 0;
            continue _L;
          } else {
            _tmp$7 = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3833(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp$7 = i + 1 | 0;
    _tmp$8 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPB13SourceLocRepr5parse(repr) {
  const _bind$9 = new _M0TPC16string10StringView(repr, 0, repr.length);
  const _data = _M0MPC16string10StringView4data(_bind$9);
  const _start = _M0MPC16string10StringView13start__offset(_bind$9);
  const _end = _start + _M0MPC16string10StringView6length(_bind$9) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let match_tag_saver_1 = -1;
  let match_tag_saver_2 = -1;
  let match_tag_saver_3 = -1;
  let match_tag_saver_4 = -1;
  let tag_0 = -1;
  let tag_0_1 = -1;
  let tag_0_2 = -1;
  let tag_2 = -1;
  let tag_1 = -1;
  let tag_1_1 = -1;
  let tag_4 = -1;
  let tag_3 = -1;
  _L: {
    if (_cursor < _end) {
      _cursor = _cursor + 1 | 0;
      let _tmp$7 = 0;
      _L$2: while (true) {
        const dispatch_15 = _tmp$7;
        _L$3: {
          _L$4: {
            _L$5: {
              switch (dispatch_15) {
                case 6: {
                  tag_0 = _cursor;
                  if (_cursor < _end) {
                    const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                    _cursor = _cursor + 1 | 0;
                    if (next_char === 58) {
                      _tmp$7 = 1;
                      continue _L$2;
                    } else {
                      _tmp$7 = 6;
                      continue _L$2;
                    }
                  } else {
                    break _L$4;
                  }
                }
                case 3: {
                  tag_0_2 = tag_0_1;
                  tag_0_1 = tag_0;
                  tag_0 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 58) {
                        if (next_char < 48) {
                          break _L$6;
                        } else {
                          tag_0 = _cursor;
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$7: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 48) {
                                if (next_char$2 === 45) {
                                  break _L$3;
                                } else {
                                  break _L$7;
                                }
                              } else {
                                if (next_char$2 > 57) {
                                  if (next_char$2 < 59) {
                                    _tmp$7 = 3;
                                    continue _L$2;
                                  } else {
                                    break _L$7;
                                  }
                                } else {
                                  _tmp$7 = 7;
                                  continue _L$2;
                                }
                              }
                            }
                            _tmp$7 = 0;
                            continue _L$2;
                          } else {
                            break _L;
                          }
                        }
                      } else {
                        if (next_char > 58) {
                          break _L$6;
                        } else {
                          _tmp$7 = 1;
                          continue _L$2;
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 7: {
                  tag_0 = _cursor;
                  tag_1 = _cursor;
                  tag_2 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 48) {
                        if (next_char === 45) {
                          break _L$3;
                        } else {
                          break _L$6;
                        }
                      } else {
                        if (next_char > 57) {
                          if (next_char < 59) {
                            _tmp$7 = 3;
                            continue _L$2;
                          } else {
                            break _L$6;
                          }
                        } else {
                          _tmp$7 = 7;
                          continue _L$2;
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 5: {
                  tag_0 = _cursor;
                  tag_1 = _cursor;
                  tag_4 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 59) {
                        if (next_char < 48) {
                          break _L$6;
                        } else {
                          if (next_char > 57) {
                            _tmp$7 = 3;
                            continue _L$2;
                          } else {
                            _tmp$7 = 5;
                            continue _L$2;
                          }
                        }
                      } else {
                        if (next_char > 63) {
                          if (next_char < 65) {
                            break _L$5;
                          } else {
                            break _L$6;
                          }
                        } else {
                          break _L$6;
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 1: {
                  tag_0_1 = tag_0;
                  tag_0 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 58) {
                        if (next_char < 48) {
                          break _L$6;
                        } else {
                          _tmp$7 = 2;
                          continue _L$2;
                        }
                      } else {
                        if (next_char > 58) {
                          break _L$6;
                        } else {
                          _tmp$7 = 1;
                          continue _L$2;
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 4: {
                  tag_0 = _cursor;
                  tag_3 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 58) {
                        if (next_char < 48) {
                          break _L$6;
                        } else {
                          _tmp$7 = 4;
                          continue _L$2;
                        }
                      } else {
                        if (next_char > 58) {
                          break _L$6;
                        } else {
                          tag_0_2 = tag_0_1;
                          tag_0_1 = tag_0;
                          tag_0 = _cursor;
                          if (_cursor < _end) {
                            _L$7: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$7;
                                } else {
                                  tag_0 = _cursor;
                                  tag_1_1 = tag_1;
                                  tag_1 = _cursor;
                                  tag_4 = _cursor;
                                  if (_cursor < _end) {
                                    _L$8: {
                                      const next_char$3 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$3 < 59) {
                                        if (next_char$3 < 48) {
                                          break _L$8;
                                        } else {
                                          if (next_char$3 > 57) {
                                            _tmp$7 = 3;
                                            continue _L$2;
                                          } else {
                                            _tmp$7 = 5;
                                            continue _L$2;
                                          }
                                        }
                                      } else {
                                        if (next_char$3 > 63) {
                                          if (next_char$3 < 65) {
                                            break _L$5;
                                          } else {
                                            break _L$8;
                                          }
                                        } else {
                                          break _L$8;
                                        }
                                      }
                                    }
                                    _tmp$7 = 0;
                                    continue _L$2;
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$7;
                                } else {
                                  _tmp$7 = 1;
                                  continue _L$2;
                                }
                              }
                            }
                            _tmp$7 = 0;
                            continue _L$2;
                          } else {
                            break _L;
                          }
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 2: {
                  tag_0 = _cursor;
                  tag_1 = _cursor;
                  if (_cursor < _end) {
                    _L$6: {
                      const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char < 58) {
                        if (next_char < 48) {
                          break _L$6;
                        } else {
                          _tmp$7 = 2;
                          continue _L$2;
                        }
                      } else {
                        if (next_char > 58) {
                          break _L$6;
                        } else {
                          _tmp$7 = 3;
                          continue _L$2;
                        }
                      }
                    }
                    _tmp$7 = 0;
                    continue _L$2;
                  } else {
                    break _L;
                  }
                }
                case 0: {
                  tag_0 = _cursor;
                  if (_cursor < _end) {
                    const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                    _cursor = _cursor + 1 | 0;
                    if (next_char === 58) {
                      _tmp$7 = 1;
                      continue _L$2;
                    } else {
                      _tmp$7 = 0;
                      continue _L$2;
                    }
                  } else {
                    break _L;
                  }
                }
                default: {
                  break _L;
                }
              }
            }
            tag_0_1 = tag_0_2;
            tag_0 = _cursor;
            tag_1 = tag_1_1;
            if (_cursor < _end) {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char === 58) {
                _tmp$7 = 1;
                continue;
              } else {
                _tmp$7 = 6;
                continue;
              }
            } else {
              break _L$4;
            }
          }
          tag_0 = tag_0_1;
          match_tag_saver_0 = tag_0;
          match_tag_saver_1 = tag_1;
          match_tag_saver_2 = tag_2;
          match_tag_saver_3 = tag_3;
          match_tag_saver_4 = tag_4;
          accept_state = 0;
          match_end = _cursor;
          break _L;
        }
        tag_0_1 = tag_0_2;
        tag_0 = _cursor;
        tag_1 = tag_1_1;
        if (_cursor < _end) {
          _L$4: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 58) {
              if (next_char < 48) {
                break _L$4;
              } else {
                _tmp$7 = 4;
                continue;
              }
            } else {
              if (next_char > 58) {
                break _L$4;
              } else {
                _tmp$7 = 1;
                continue;
              }
            }
          }
          _tmp$7 = 0;
          continue;
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    _M0MPC16string6String4view(_data, match_tag_saver_4 + 1 | 0, match_end);
    const end_column = _M0MPC16string6String4view(_data, match_tag_saver_3 + 1 | 0, match_tag_saver_4);
    const end_line = _M0MPC16string6String4view(_data, match_tag_saver_2 + 1 | 0, match_tag_saver_3);
    const filename = _M0MPC16string6String4view(_data, _start, match_tag_saver_0);
    const start_column = _M0MPC16string6String4view(_data, match_tag_saver_1 + 1 | 0, match_tag_saver_2);
    const start_line = _M0MPC16string6String4view(_data, match_tag_saver_0 + 1 | 0, match_tag_saver_1);
    return new _M0TPB13SourceLocRepr(filename, start_line, start_column, end_line, end_column);
  } else {
    return $panic();
  }
}
function _M0MPB13SourceLocRepr16to__json__string(self) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(69);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"filename\":");
  _M0MPC16string10StringView18escape__to_2einner(self.filename, { self: _string_builder, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, true);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"start_line\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.start_line);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"start_column\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.start_column);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"end_line\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.end_line);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"end_column\":");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, self.end_column);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
  return _M0MPB13StringBuilder10to__string(_string_builder);
}
function _M0MPB9SourceLoc16to__json__string(self) {
  return _M0MPB13SourceLocRepr16to__json__string(_M0MPB13SourceLocRepr5parse(self));
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB7ArgsLoc8to__json(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(10);
  const _self = self;
  _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
  const _bind$9 = _self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const item = _self[i];
      if (i !== 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(buf, ", ");
      }
      if (item === undefined) {
        _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
      } else {
        const _Some = item;
        const _loc = _Some;
        _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPB9SourceLoc16to__json__string(_loc));
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPB15inspect_2einner(obj, content, loc, args_loc) {
  const actual = obj.method_table.method_1(obj.self);
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(actual, content)) {
    const loc$2 = _M0MPB9SourceLoc16to__json__string(loc);
    const args_loc$2 = _M0MPB7ArgsLoc8to__json(args_loc);
    const expect_escaped = _M0MPC16string6String14escape_2einner(content, true);
    const actual_escaped = _M0MPC16string6String14escape_2einner(actual, true);
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPB33base64__encode__string__codepoint(content));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "\"");
    const expect_base64 = _M0MPB13StringBuilder10to__string(_string_builder);
    const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, _M0FPB33base64__encode__string__codepoint(actual));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\"");
    const actual_base64 = _M0MPB13StringBuilder10to__string(_string_builder$2);
    const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(100);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "@EXPECT_FAILED {\"loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ", \"args_loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, args_loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ", \"expect\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, expect_escaped);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ", \"actual\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, actual_escaped);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ", \"expect_base64\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, expect_base64);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ", \"actual_base64\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, actual_base64);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "}");
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(_M0MPB13StringBuilder10to__string(_string_builder$3)));
  } else {
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE2Ok(undefined);
  }
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start$2, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGbE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC14bool4BoolPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUiuEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$9 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9225GUiuEE;
  } else {
    if (_bind$9 === undefined) {
    } else {
      const _Some = _bind$9;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9224GUiuEE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUiuEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9232GUiuEE;
  }
  return new _M0TPB4IterGUiuEE(f, size_hint$2);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB12MutArrayViewGiEE("Invalid index for View");
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp$7 = 0;
    while (true) {
      const i = _tmp$7;
      if (i < len) {
        if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
        } else {
          return false;
        }
        _tmp$7 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB12MutArrayViewGiEE("Invalid index for View");
}
function _M0MPC16string6String4view(self, start_offset$46$opt, end_offset) {
  let start_offset;
  if (start_offset$46$opt === undefined) {
    start_offset = 0;
  } else {
    const _Some = start_offset$46$opt;
    start_offset = _Some;
  }
  return _M0MPC16string6String12view_2einner(self, start_offset, end_offset);
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp$7 = end_offset;
  let _tmp$8 = 0;
  while (true) {
    const utf16_offset = _tmp$7;
    const char_count = _tmp$8;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp$7 = utf16_offset - 2 | 0;
        _tmp$8 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$7 = utf16_offset - 1 | 0;
        _tmp$8 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$7 = start_offset;
    let _tmp$8 = 0;
    while (true) {
      const utf16_offset = _tmp$7;
      const char_count = _tmp$8;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp$7 = utf16_offset + 2 | 0;
          _tmp$8 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$7 = utf16_offset + 1 | 0;
          _tmp$8 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB28boyer__moore__horspool__find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _bind$9 = needle_len - 1 | 0;
      let _tmp$7 = 0;
      while (true) {
        const i = _tmp$7;
        if (i < _bind$9) {
          const _tmp$8 = needle.str.charCodeAt(needle.start + i | 0) & 255;
          $bound_check(skip_table, _tmp$8);
          skip_table[_tmp$8] = (needle_len - 1 | 0) - i | 0;
          _tmp$7 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$8 = 0;
      while (true) {
        const i = _tmp$8;
        if (i <= (haystack_len - needle_len | 0)) {
          const _bind$10 = needle_len - 1 | 0;
          let _tmp$9 = 0;
          while (true) {
            const j = _tmp$9;
            if (j <= _bind$10) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + (i + j | 0) | 0), needle.str.charCodeAt(needle.start + j | 0))) {
                break;
              }
              _tmp$9 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$10 = haystack.str.charCodeAt(haystack.start + ((i + needle_len | 0) - 1 | 0) | 0) & 255;
          $bound_check(skip_table, _tmp$10);
          _tmp$8 = i + skip_table[_tmp$10] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB28boyer__moore__horspool__findN6constrS9234;
  }
}
function _M0FPB18brute__force__find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = needle.str.charCodeAt(needle.start);
      const forward_len = haystack_len - needle_len | 0;
      let _tmp$7 = 0;
      while (true) {
        const i = _tmp$7;
        if (i <= forward_len) {
          _L: {
            if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + i | 0), needle_first)) {
              break _L;
            }
            let _tmp$8 = 1;
            while (true) {
              const j = _tmp$8;
              if (j < needle_len) {
                if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + (i + j | 0) | 0), needle.str.charCodeAt(needle.start + j | 0))) {
                  break;
                }
                _tmp$8 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            break _L;
          }
          _tmp$7 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB18brute__force__findN6constrS9235;
  }
}
function _M0MPC16string10StringView4find(self, str) {
  return (str.end - str.start | 0) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
}
function _M0FPB33boyer__moore__horspool__rev__find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      let _tmp$7 = needle_len - 1 | 0;
      while (true) {
        const i = _tmp$7;
        if (i >= 1) {
          const _tmp$8 = needle.str.charCodeAt(needle.start + i | 0) & 255;
          $bound_check(skip_table, _tmp$8);
          skip_table[_tmp$8] = i;
          _tmp$7 = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$8 = haystack_len - needle_len | 0;
      while (true) {
        const i = _tmp$8;
        if (i >= 0) {
          let _tmp$9 = 0;
          while (true) {
            const j = _tmp$9;
            if (j < needle_len) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + (i + j | 0) | 0), needle.str.charCodeAt(needle.start + j | 0))) {
                break;
              }
              _tmp$9 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$10 = haystack.str.charCodeAt(haystack.start + i | 0) & 255;
          $bound_check(skip_table, _tmp$10);
          _tmp$8 = i - skip_table[_tmp$10] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return haystack_len;
  }
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB12MutArrayViewGiEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp$7;
        if (len === 0) {
          _tmp$7 = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp$7 = (total / n | 0) === len;
        }
        if (_tmp$7) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$8 = 0;
          while (true) {
            const _ = _tmp$8;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$8 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB12MutArrayViewGiEE("repeat result too large");
        }
      }
    }
  }
}
function _M0FPB23brute__force__rev__find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = needle.str.charCodeAt(needle.start);
      const _bind$9 = haystack_len - needle_len | 0;
      let _tmp$7 = _bind$9;
      while (true) {
        const i = _tmp$7;
        if (i >= 0) {
          _L: {
            if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + i | 0), needle_first)) {
              break _L;
            }
            let _tmp$8 = 1;
            while (true) {
              const j = _tmp$8;
              if (j < needle_len) {
                if (_M0IPC16uint166UInt16PB2Eq10not__equal(haystack.str.charCodeAt(haystack.start + (i + j | 0) | 0), needle.str.charCodeAt(needle.start + j | 0))) {
                  break;
                }
                _tmp$8 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            break _L;
          }
          _tmp$7 = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return haystack_len;
  }
}
function _M0MPC16string10StringView9rev__find(self, str) {
  return (str.end - str.start | 0) <= 4 ? _M0FPB23brute__force__rev__find(self, str) : _M0FPB33boyer__moore__horspool__rev__find(self, str);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const _bind$9 = _M0MPC16string10StringView9rev__find(self, str);
  if (_bind$9 === undefined) {
    return false;
  } else {
    const _Some = _bind$9;
    const _i = _Some;
    return _i === ((self.end - self.start | 0) - (str.end - str.start | 0) | 0);
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array4pushGdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  const _bind$9 = self.end - self.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), code)) {
        return true;
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind$9 = str.end - str.start | 0;
  switch (_bind$9) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$10 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$10 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp$7 = 0;
            while (true) {
              const i = _tmp$7;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp$7 = i + 2 | 0;
                  continue;
                }
                _tmp$7 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView19trim__start_2einner(self, chars) {
  let _tmp$7 = self;
  while (true) {
    const x = _tmp$7;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$8 = x.str;
      const _bind$9 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$9;
      if (_bind$9 === undefined) {
        _tmp$9 = x.end;
      } else {
        const _Some = _bind$9;
        _tmp$9 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$8, _tmp$9, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$7 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView17trim__end_2einner(self, chars) {
  let _tmp$7 = self;
  while (true) {
    const x = _tmp$7;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$7 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  return _M0MPC16string10StringView17trim__end_2einner(_M0MPC16string10StringView19trim__start_2einner(self, chars), chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6450, 0, _M0MPC16string6String4trimN7_2abindS6450.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$9 = _M0MPB4Iter4nextGUiuEE(self);
    if (_bind$9 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$9;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUiuEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array9ArrayView3allGsE(self, f) {
  const _bind$9 = self.end - self.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const v = self.buf[self.start + _ | 0];
      if (!f(v)) {
        return false;
      }
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$9 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$7 = 0;
    let _tmp$8 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$7;
      const size_hint$2 = _tmp$8;
      if (_ < _bind$9) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$7 = _ + 1 | 0;
        const _bind$10 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$8 = (size_hint$2 + (_bind$10.end - _bind$10.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$10 = _x_end - _x_start | 0;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$10) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$10 = _x_end - _x_start | 0;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$10) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$9 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$7 = 0;
    let _tmp$8 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$7;
      const size_hint$2 = _tmp$8;
      if (_ < _bind$9) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$7 = _ + 1 | 0;
        const _bind$10 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$8 = (size_hint$2 + (_bind$10.end - _bind$10.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$10 = _x_end - _x_start | 0;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$10) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$10 = _x_end - _x_start | 0;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$10) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC15array5Array17mut__view_2einnerGiE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind$9 = self;
    const _bind$10 = end$2 - start$2 | 0;
    return new _M0TPB12MutArrayViewGiE(_bind$9, start$2, start$2 + _bind$10 | 0);
  } else {
    return _M0FPC15abort5abortGRPB12MutArrayViewGiEE("View index out of bounds");
  }
}
function _M0MPC15array12MutArrayView17mut__view_2einnerGiE(self, start, end) {
  const len = self.end - self.start | 0;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind$9 = self.buf;
    const _bind$10 = self.start + start$2 | 0;
    const _bind$11 = end$2 - start$2 | 0;
    return new _M0TPB12MutArrayViewGiE(_bind$9, _bind$10, _bind$10 + _bind$11 | 0);
  } else {
    return _M0FPC15abort5abortGRPB12MutArrayViewGiEE("View index out of bounds");
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$9 = capacity$2 - 1 | 0;
  const _bind$10 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$11 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$12 = undefined;
  return new _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$11, 0, capacity$2, _bind$9, _bind$10, _bind$12, -1);
}
function _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$9 = capacity$2 - 1 | 0;
  const _bind$10 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$11 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$12 = undefined;
  return new _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(_bind$11, 0, capacity$2, _bind$9, _bind$10, _bind$12, -1);
}
function _M0FPB8new__mapGiiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$9 = capacity$2 - 1 | 0;
  const _bind$10 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$11 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$12 = undefined;
  return new _M0TPB3MapGiiE(_bind$11, 0, capacity$2, _bind$9, _bind$10, _bind$12, -1);
}
function _M0FPB8new__mapGiuE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$9 = capacity$2 - 1 | 0;
  const _bind$10 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$11 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$12 = undefined;
  return new _M0TPB3MapGiuE(_bind$11, 0, capacity$2, _bind$9, _bind$10, _bind$12, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  const _bind$9 = self.tail;
  if (_bind$9 === -1) {
    self.head = entry;
  } else {
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, _bind$9);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$7[_bind$9]).next = entry;
  }
  self.tail = idx;
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, idx);
  _tmp$7[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  const _bind$9 = self.tail;
  if (_bind$9 === -1) {
    self.head = entry;
  } else {
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, _bind$9);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$7[_bind$9]).next = entry;
  }
  self.tail = idx;
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, idx);
  _tmp$7[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry) {
  const _bind$9 = self.tail;
  if (_bind$9 === -1) {
    self.head = entry;
  } else {
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, _bind$9);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$7[_bind$9]).next = entry;
  }
  self.tail = idx;
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, idx);
  _tmp$7[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiuE(self, idx, entry) {
  const _bind$9 = self.tail;
  if (_bind$9 === -1) {
    self.head = entry;
  } else {
    const _tmp$7 = self.entries;
    $bound_check(_tmp$7, _bind$9);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$7[_bind$9]).next = entry;
  }
  self.tail = idx;
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, idx);
  _tmp$7[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry, new_idx) {
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, new_idx);
  _tmp$7[new_idx] = entry;
  const _bind$9 = entry.next;
  if (_bind$9 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$9;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry, new_idx) {
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, new_idx);
  _tmp$7[new_idx] = entry;
  const _bind$9 = entry.next;
  if (_bind$9 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$9;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiiE(self, entry, new_idx) {
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, new_idx);
  _tmp$7[new_idx] = entry;
  const _bind$9 = entry.next;
  if (_bind$9 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$9;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiuE(self, entry, new_idx) {
  const _tmp$7 = self.entries;
  $bound_check(_tmp$7, new_idx);
  _tmp$7[new_idx] = entry;
  const _bind$9 = entry.next;
  if (_bind$9 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$9;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  let _tmp$7 = entry.psl + 1 | 0;
  let _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$9 = entry;
  while (true) {
    const psl = _tmp$7;
    const idx$2 = _tmp$8;
    const entry$2 = _tmp$9;
    const _tmp$10 = self.entries;
    $bound_check(_tmp$10, idx$2);
    const _bind$9 = _tmp$10[idx$2];
    if (_bind$9 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
        _tmp$7 = _curr_entry.psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$9 = _curr_entry;
        continue;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  let _tmp$7 = entry.psl + 1 | 0;
  let _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$9 = entry;
  while (true) {
    const psl = _tmp$7;
    const idx$2 = _tmp$8;
    const entry$2 = _tmp$9;
    const _tmp$10 = self.entries;
    $bound_check(_tmp$10, idx$2);
    const _bind$9 = _tmp$10[idx$2];
    if (_bind$9 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
        _tmp$7 = _curr_entry.psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$9 = _curr_entry;
        continue;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiiE(self, idx, entry) {
  let _tmp$7 = entry.psl + 1 | 0;
  let _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$9 = entry;
  while (true) {
    const psl = _tmp$7;
    const idx$2 = _tmp$8;
    const entry$2 = _tmp$9;
    const _tmp$10 = self.entries;
    $bound_check(_tmp$10, idx$2);
    const _bind$9 = _tmp$10[idx$2];
    if (_bind$9 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiiE(self, entry$2, idx$2);
        _tmp$7 = _curr_entry.psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$9 = _curr_entry;
        continue;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiuE(self, idx, entry) {
  let _tmp$7 = entry.psl + 1 | 0;
  let _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$9 = entry;
  while (true) {
    const psl = _tmp$7;
    const idx$2 = _tmp$8;
    const entry$2 = _tmp$9;
    const _tmp$10 = self.entries;
    $bound_check(_tmp$10, idx$2);
    const _bind$9 = _tmp$10[idx$2];
    if (_bind$9 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiuE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiuE(self, entry$2, idx$2);
        _tmp$7 = _curr_entry.psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$9 = _curr_entry;
        continue;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, outer) {
  const hash = outer.hash;
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, outer) {
  const hash = outer.hash;
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiiE(self, outer) {
  const hash = outer.hash;
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiuE(self, outer) {
  const hash = outer.hash;
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiuE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiuE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiuE(self, idx, outer);
        return undefined;
      } else {
        _tmp$7 = psl + 1 | 0;
        _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$7 = old_head;
  while (true) {
    const x = _tmp$7;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, _e);
      _tmp$7 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$7 = old_head;
  while (true) {
    const x = _tmp$7;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, _e);
      _tmp$7 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$7 = old_head;
  while (true) {
    const x = _tmp$7;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiiE(self, _e);
      _tmp$7 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$7 = old_head;
  while (true) {
    const x = _tmp$7;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiuE(self, _e);
      _tmp$7 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, hash) {
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$7 = 0;
        _tmp$8 = hash & self.capacity_mask;
        continue;
      }
      const _bind$10 = self.tail;
      const _bind$11 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$10, _bind$11, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$7 = 0;
          _tmp$8 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$10 = self.tail;
        const _bind$11 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$10, _bind$11, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$7 = psl + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, hash) {
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
        _tmp$7 = 0;
        _tmp$8 = hash & self.capacity_mask;
        continue;
      }
      const _bind$10 = self.tail;
      const _bind$11 = undefined;
      const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$10, _bind$11, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
          _tmp$7 = 0;
          _tmp$8 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr_entry);
        const _bind$10 = self.tail;
        const _bind$11 = undefined;
        const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$10, _bind$11, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
        return undefined;
      }
      _tmp$7 = psl + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiiE(self, key, value, hash) {
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiiE(self);
        _tmp$7 = 0;
        _tmp$8 = hash & self.capacity_mask;
        continue;
      }
      const _bind$10 = self.tail;
      const _bind$11 = undefined;
      const entry = new _M0TPB5EntryGiiE(_bind$10, _bind$11, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiiE(self);
          _tmp$7 = 0;
          _tmp$8 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiiE(self, idx, _curr_entry);
        const _bind$10 = self.tail;
        const _bind$11 = undefined;
        const entry = new _M0TPB5EntryGiiE(_bind$10, _bind$11, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiiE(self, idx, entry);
        return undefined;
      }
      _tmp$7 = psl + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiuE(self, key, value, hash) {
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiuE(self);
        _tmp$7 = 0;
        _tmp$8 = hash & self.capacity_mask;
        continue;
      }
      const _bind$10 = self.tail;
      const _bind$11 = undefined;
      const entry = new _M0TPB5EntryGiuE(_bind$10, _bind$11, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiuE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$9;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiuE(self);
          _tmp$7 = 0;
          _tmp$8 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiuE(self, idx, _curr_entry);
        const _bind$10 = self.tail;
        const _bind$11 = undefined;
        const entry = new _M0TPB5EntryGiuE(_bind$10, _bind$11, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiuE(self, idx, entry);
        return undefined;
      }
      _tmp$7 = psl + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiiE(self, key, value) {
  _M0MPB3Map15set__with__hashGiiE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiuE(self, key, value) {
  _M0MPB3Map15set__with__hashGiuE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(m, e._0, e._1);
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity$2);
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(m, e._0, e._1);
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiiE(capacity$2);
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiiE(m, e._0, e._1);
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiuE(capacity$2);
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiuE(m, e._0, e._1);
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$9;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$7 = i + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$9;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$7 = i + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$7 = 0;
  let _tmp$8 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$7;
    const idx = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx);
    const _bind$9 = _tmp$9[idx];
    if (_bind$9 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$9;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$7 = i + 1 | 0;
      _tmp$8 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGiuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGiuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUiuEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$9 = curr_entry.val;
        if (_bind$9 === undefined) {
          break _L;
        } else {
          const _Some = _bind$9;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GiuE(self) {
  return _M0MPB3Map4iterGiuE(self);
}
function _M0MPC15array5Array3mapGdRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGiRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGiuE(self) {
  return _M0MPB4Iter4nextGUiuEE(self);
}
function _M0MPC16string6String20unsafe__charcode__at(self, idx) {
  return self.charCodeAt(idx);
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0FPB7printlnGsE(input) {
  console.log(_M0IPC16string6StringPB4Show10to__string(input));
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array9is__emptyGiE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGRPC15debug7ContentE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array24unsafe__grow__to__lengthGsE(self, new_len) {
  if (new_len >= self.length) {
    _M0MPB7JSArray11set__length(self, new_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array2atGRP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntryE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGiE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGiE(arr, start, end) {
  return _M0MPC15array12MutArrayView17mut__view_2einnerGiE(arr, start, end);
}
function _M0MPC15array5Array3setGdE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGiE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp$7 = 0;
  while (true) {
    const i = _tmp$7;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$7 = len;
  let _tmp$8 = 0;
  while (true) {
    const len$2 = _tmp$7;
    const limit = _tmp$8;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp$7 = len$2 / 2 | 0;
      _tmp$8 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGiE(arr) {
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 1;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      let _tmp$8 = i;
      while (true) {
        const j = _tmp$8;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$8 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S548GiE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S552GiE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S548GiE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S548GiE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S548GiE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGiE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S552GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S552GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S552GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S552GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGiE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp$7 = index;
  let _tmp$8 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$7;
    const child = _tmp$8;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$7 = child$2;
      _tmp$8 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGiE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$9 = len / 2 | 0;
  let _tmp$7 = _bind$9 - 1 | 0;
  while (true) {
    const i = _tmp$7;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGiE(arr, i);
      _tmp$7 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$8 = len - 1 | 0;
  while (true) {
    const i = _tmp$8;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB17fixed__sift__downGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0);
      _tmp$8 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGiE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$9 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$7 = 0;
  let _tmp$8 = 0;
  let _tmp$9 = true;
  while (true) {
    const j = _tmp$7;
    const i = _tmp$8;
    const partitioned = _tmp$9;
    if (j < _bind$9) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$7 = j + 1 | 0;
          _tmp$8 = i + 1 | 0;
          _tmp$9 = false;
          continue;
        } else {
          _tmp$7 = j + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$7 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGiE(arr) {
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 1;
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$7;
    const tries = _tmp$8;
    if (i < _bind$9) {
      let sorted;
      let _tmp$9 = i;
      let _tmp$10 = true;
      while (true) {
        const j = _tmp$9;
        const sorted$2 = _tmp$10;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$9 = j - 1 | 0;
          _tmp$10 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$7 = i + 1 | 0;
        _tmp$8 = tries$2;
        continue;
      } else {
        _tmp$7 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGiE(arr, pred, limit) {
  let _tmp$7 = limit;
  let _tmp$8 = arr;
  let _tmp$9 = pred;
  let _tmp$10 = true;
  let _tmp$11 = true;
  while (true) {
    const limit$2 = _tmp$7;
    const arr$2 = _tmp$8;
    const pred$2 = _tmp$9;
    const was_partitioned = _tmp$10;
    const balanced = _tmp$11;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGiE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGiE(arr$2);
      return undefined;
    }
    const _bind$9 = _M0FPB20fixed__choose__pivotGiE(arr$2);
    const _pivot_index = _bind$9._0;
    const _likely_sorted = _bind$9._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGiE(arr$2)) {
        return undefined;
      }
    }
    const _bind$10 = _M0FPB16fixed__partitionGiE(arr$2, _pivot_index);
    const _pivot = _bind$10._0;
    const _partitioned = _bind$10._1;
    const _tmp$12 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$12 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$13 = _pivot;
        while (true) {
          const i$2 = _tmp$13;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$13 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$7 = limit$3;
        _tmp$8 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$10 = _partitioned;
        _tmp$11 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGiE(left, pred$2, limit$3);
      _tmp$7 = limit$3;
      _tmp$8 = right;
      _tmp$9 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$10 = _partitioned;
      _tmp$11 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGiE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$7 = limit$3;
      _tmp$8 = left;
      _tmp$10 = _partitioned;
      _tmp$11 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGiE(self) {
  _M0FPB18fixed__quick__sortGiE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0FPB23fixed__bubble__sort__byGiE(arr, cmp) {
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 1;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$9) {
      let _tmp$8 = i;
      while (true) {
        const j = _tmp$8;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$8 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S428GiE(_env, a, b) {
  const arr = _env._2;
  const swaps = _env._1;
  const cmp = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S432GiE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S428GiE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S428GiE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S428GiE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGiE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: swaps, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S432GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S432GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S432GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S432GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGiE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$7 = index;
  let _tmp$8 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$7;
    const child = _tmp$8;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$7 = child$2;
      _tmp$8 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGiE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$9 = len / 2 | 0;
  let _tmp$7 = _bind$9 - 1 | 0;
  while (true) {
    const i = _tmp$7;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGiE(arr, i, cmp);
      _tmp$7 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$8 = len - 1 | 0;
  while (true) {
    const i = _tmp$8;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0, cmp);
      _tmp$8 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGiE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$9 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$7 = 0;
  let _tmp$8 = 0;
  let _tmp$9 = true;
  while (true) {
    const j = _tmp$7;
    const i = _tmp$8;
    const partitioned = _tmp$9;
    if (j < _bind$9) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$7 = j + 1 | 0;
          _tmp$8 = i + 1 | 0;
          _tmp$9 = false;
          continue;
        } else {
          _tmp$7 = j + 1 | 0;
          _tmp$8 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$7 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGiE(arr, cmp) {
  const _bind$9 = arr.end - arr.start | 0;
  let _tmp$7 = 1;
  let _tmp$8 = 0;
  while (true) {
    const i = _tmp$7;
    const tries = _tmp$8;
    if (i < _bind$9) {
      let sorted;
      let _tmp$9 = i;
      let _tmp$10 = true;
      while (true) {
        const j = _tmp$9;
        const sorted$2 = _tmp$10;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$9 = j - 1 | 0;
          _tmp$10 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$7 = i + 1 | 0;
        _tmp$8 = tries$2;
        continue;
      } else {
        _tmp$7 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGiE(arr, cmp, pred, limit) {
  let _tmp$7 = limit;
  let _tmp$8 = arr;
  let _tmp$9 = pred;
  let _tmp$10 = true;
  let _tmp$11 = true;
  while (true) {
    const limit$2 = _tmp$7;
    const arr$2 = _tmp$8;
    const pred$2 = _tmp$9;
    const was_partitioned = _tmp$10;
    const balanced = _tmp$11;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGiE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGiE(arr$2, cmp);
      return undefined;
    }
    const _bind$9 = _M0FPB24fixed__choose__pivot__byGiE(arr$2, cmp);
    const _pivot_index = _bind$9._0;
    const _likely_sorted = _bind$9._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGiE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$10 = _M0FPB20fixed__partition__byGiE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$10._0;
    const _partitioned = _bind$10._1;
    const _tmp$12 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$12 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$13 = _pivot;
        while (true) {
          const i$2 = _tmp$13;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$13 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$7 = limit$3;
        _tmp$8 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$10 = _partitioned;
        _tmp$11 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGiE(left, cmp, pred$2, limit$3);
      _tmp$7 = limit$3;
      _tmp$8 = right;
      _tmp$9 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$10 = _partitioned;
      _tmp$11 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGiE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$7 = limit$3;
      _tmp$8 = left;
      _tmp$10 = _partitioned;
      _tmp$11 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGiE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGiE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGiE(self) {
  _M0MPC15array12MutArrayView4sortGiE(_M0MPC15array5Array17mut__view_2einnerGiE(self, 0, undefined));
}
function _M0MPC15array5Array8sort__byGiE(self, cmp) {
  _M0MPC15array12MutArrayView8sort__byGiE(_M0MPC15array5Array17mut__view_2einnerGiE(self, 0, undefined), cmp);
}
function _M0MPC15array9ArrayView16blit__to_2einnerGsE(self, dst, dst_offset) {
  const len = self.end - self.start | 0;
  if (dst_offset >= 0 && dst_offset <= dst.length) {
    if ((dst_offset + len | 0) > dst.length) {
      _M0MPC15array5Array24unsafe__grow__to__lengthGsE(dst, dst_offset + len | 0);
    }
    _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, self.buf, self.start, len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array6appendGsE(self, other) {
  _M0MPC15array9ArrayView16blit__to_2einnerGsE(other, self, self.length);
}
function _M0MPC15array5Array3allGsE(self, f) {
  return _M0MPC15array9ArrayView3allGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), f);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$9 = self.length;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$9 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$9 === undefined) {
  } else {
    const _Some = _bind$9;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$10 = _M0MPB4Iter4nextGUiuEE(iter);
    if (_bind$10 === undefined) {
      return;
    } else {
      const _Some = _bind$10;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr6double(x) {
  return new _M0DTPC15debug4Repr9DoubleLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr7shallow(self) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple([]);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array([]);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record([]);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, []);
      }
      case 14: {
        const _Opaque = self;
        const _name$2 = _Opaque._0;
        return new _M0DTPC15debug4Repr6Opaque(_name$2, _M0DTPC15debug4Repr7Omitted__);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map([]);
      }
      case 12: {
        const _RecordField = self;
        const _name$3 = _RecordField._0;
        return new _M0DTPC15debug4Repr11RecordField(_name$3, _M0DTPC15debug4Repr7Omitted__);
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
      }
      default: {
        return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
      }
    }
  }
  return self;
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGsE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGsE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind$9 = _x_end - 1 | 0;
        let _tmp$7 = 0;
        while (true) {
          const _ = _tmp$7;
          if (_ < _bind$9) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1173, 0, _M0FPC15debug14compact__linesN7_2abindS1173.length))) {
              _M0MPC15array5Array4pushGsE(parts, t);
            }
            _tmp$7 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1196, 0, _M0FPC15debug14compact__linesN7_2abindS1196.length));
        const _bind$10 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1190, 0, _M0FPC15debug14compact__linesN7_2abindS1190.length));
        let joined;
        if (_bind$10 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$10;
          joined = _Some;
        }
        if (_first === "{") {
          const _bind$11 = _M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1183, 0, _M0FPC15debug14compact__linesN7_2abindS1183.length));
          let s1;
          if (_bind$11 === undefined) {
            s1 = joined;
          } else {
            const _Some = _bind$11;
            s1 = _Some;
          }
          const _bind$12 = _M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1177, 0, _M0FPC15debug14compact__linesN7_2abindS1177.length));
          let inner;
          if (_bind$12 === undefined) {
            inner = s1;
          } else {
            const _Some = _bind$12;
            inner = _Some;
          }
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1175, 0, _M0FPC15debug14compact__linesN7_2abindS1175.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1197, 0, _M0FPC15debug14compact__linesN7_2abindS1197.length)) && _last === ")") {
          const parts = [];
          const _bind$9 = _x_end - 1 | 0;
          let _tmp$7 = 0;
          while (true) {
            const _ = _tmp$7;
            if (_ < _bind$9) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1201, 0, _M0FPC15debug14compact__linesN7_2abindS1201.length))) {
                _M0MPC15array5Array4pushGsE(parts, t);
              }
              _tmp$7 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1210, 0, _M0FPC15debug14compact__linesN7_2abindS1210.length));
          const _bind$10 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1204, 0, _M0FPC15debug14compact__linesN7_2abindS1204.length));
          let joined;
          if (_bind$10 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$10;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$9 = _x_end - 1 | 0;
          let _tmp$7 = 0;
          while (true) {
            const _ = _tmp$7;
            if (_ < _bind$9) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp$7 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1215, 0, _M0FPC15debug14compact__linesN7_2abindS1215.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (lines.length > 0) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGsE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGsE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGsE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1224, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1224.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGsE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$9 = contents.length;
      let _tmp$7 = 0;
      while (true) {
        const _ = _tmp$7;
        if (_ < _bind$9) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$10 = _x_end - 1 | 0;
              let _tmp$8 = 0;
              while (true) {
                const _$2 = _tmp$8;
                if (_$2 < _bind$10) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$8 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp$7 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$9 = _x_end - 1 | 0;
            let _tmp$7 = 0;
            while (true) {
              const _ = _tmp$7;
              if (_ < _bind$9) {
                const item = contents[1 + _ | 0];
                const _bind$10 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$10, 0, _bind$10.length));
                _tmp$7 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGsE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGsE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGsE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$9 = contents.length;
            let _tmp$7 = 0;
            while (true) {
              const _ = _tmp$7;
              if (_ < _bind$9) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$10 = _x_end - 1 | 0;
                    let _tmp$8 = 0;
                    while (true) {
                      const _$2 = _tmp$8;
                      if (_$2 < _bind$10) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$8 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp$7 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$9 = contents.length;
  let _tmp$7 = 0;
  let _tmp$8 = 0;
  while (true) {
    const _ = _tmp$7;
    const size = _tmp$8;
    if (_ < _bind$9) {
      const c = contents[_];
      _tmp$7 = _ + 1 | 0;
      _tmp$8 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1293, 0, _M0FPC15debug14print__contentN7_2abindS1293.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp$7;
  switch (info.$tag) {
    case 12: {
      _tmp$7 = true;
      break;
    }
    case 13: {
      _tmp$7 = true;
      break;
    }
    case 16: {
      _tmp$7 = true;
      break;
    }
    default: {
      _tmp$7 = false;
    }
  }
  return !_tmp$7;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  let _tmp$7 = rest;
  while (true) {
    const rest$2 = _tmp$7;
    let rest$3;
    _L$2: {
      if ((rest$2.end - rest$2.start | 0) >= 1) {
        const _x = rest$2.str.charCodeAt(rest$2.start);
        if (_x >= 97 && _x <= 122) {
          const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
          rest$3 = _x$2;
          break _L$2;
        } else {
          if (_x >= 65 && _x <= 90) {
            const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
            rest$3 = _x$2;
            break _L$2;
          } else {
            if (_x >= 48 && _x <= 57) {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$3 = _x$2;
              break _L$2;
            } else {
              if (_x === 95) {
                const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                rest$3 = _x$2;
                break _L$2;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return true;
      }
    }
    _tmp$7 = rest$3;
    continue;
  }
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp$7;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp$7 = 1;
        } else {
          _tmp$7 = 0;
        }
      } else {
        _tmp$7 = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$7, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPC15debug7ContentE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$9 = v.lines;
        if (_bind$9.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$9.length === 1) {
            const _one = _bind$9[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$9[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$9, 1, _bind$9.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$8 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$8, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$9 = _val.lines;
        if (_bind$9.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$9.length === 1) {
            const _first = _bind$9[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$9[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$9, 1, _bind$9.length);
            const _tmp$8 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$8, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$9 = v.lines;
        if (_bind$9.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$9.length === 1) {
            const _one = _bind$9[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$9[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$9, 1, _bind$9.length);
            const _tmp$8 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$8, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1755 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16double6DoublePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6double(self);
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGdE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGdRPC15debug4ReprE(self, (x) => _M0IPC16double6DoublePC15debug5Debug8to__repr(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGiE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGiRPC15debug4ReprE(self, (x) => _M0IPC13int3IntPC15debug5Debug8to__repr(x)));
}
function _M0FPC15debug14debug__inspect(obj, content, loc, args_loc) {
  const loc$2 = _M0MPB9SourceLoc16to__json__string(loc);
  const args_loc$2 = _M0MPB7ArgsLoc8to__json(args_loc);
  const actual = _M0FPC15debug6render(obj.method_table.method_0(obj.self), undefined);
  let want;
  if (content === undefined) {
    want = "";
  } else {
    const _Some = content;
    want = _Some;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(actual, want)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(63);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "@EXPECT_FAILED {\"loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"args_loc\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, args_loc$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"expect\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC16string6String14escape_2einner(want, true));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", \"actual\": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC16string6String14escape_2einner(actual, true));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(_M0MPB13StringBuilder10to__string(_string_builder)));
  } else {
    return new _M0DTPC16result6ResultGuRPB12InspectErrorE2Ok(undefined);
  }
}
function _M0FPC14math2ln(_tmp$7) {
  return Math.log(_tmp$7);
}
function _M0MP38username17moon__metric__lab4core6Vector9to__arrayGdE(self) {
  const result = [];
  const _bind$9 = 0;
  const _bind$10 = self.length;
  let _tmp$7 = _bind$9;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$10) {
      _M0MPC15array5Array4pushGdE(result, _M0MPC15array5Array2atGdE(self.data, self.start + i | 0));
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP38username17moon__metric__lab4core17safe__div_2einner(numerator, denominator, raise_on_zero) {
  if (Math.abs(denominator) < 1e-015) {
    if (raise_on_zero) {
      return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eZeroDivision("Division by zero encountered in calculation"));
    } else {
      return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(0);
    }
  } else {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(numerator / denominator);
  }
}
function _M0FP38username17moon__metric__lab4core9safe__log(p) {
  return p < 1e-015 ? _M0FPC14math2ln(1e-015) : p > 0.999999999999999 ? _M0FPC14math2ln(0.999999999999999) : _M0FPC14math2ln(p);
}
function _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(arr, message) {
  if (_M0MPC15array5Array9is__emptyGiE(arr)) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error62username_2fmoon__metric__lab_2fcore_2eMetricError_2eEmptyInput(message));
  } else {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(undefined);
  }
}
function _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(arr1.length, arr2.length));
  } else {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(undefined);
  }
}
function _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(arr1.length, arr2.length));
  } else {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(undefined);
  }
}
function _M0FP38username17moon__metric__lab4core22validate__same__lengthGddE(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(arr1.length, arr2.length));
  } else {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(undefined);
  }
}
function _M0FP38username17moon__metric__lab4core7argsort(arr) {
  const indices = [];
  const _bind$9 = 0;
  const _bind$10 = arr.length;
  let _tmp$7 = _bind$9;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$10) {
      _M0MPC15array5Array4pushGiE(indices, i);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGiE(indices, (i, j) => _M0MPC15array5Array2atGdE(arr, i) < _M0MPC15array5Array2atGdE(arr, j) ? -1 : _M0MPC15array5Array2atGdE(arr, i) > _M0MPC15array5Array2atGdE(arr, j) ? 1 : 0);
  return indices;
}
function _M0FP38username17moon__metric__lab4core17trapezoidal__area(x, y) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGddE(x, y);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  if (x.length < 2) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(0);
  }
  const area = new _M0TPB8MutLocalGdE(0);
  const _bind$10 = 1;
  const _bind$11 = x.length;
  let _tmp$7 = _bind$10;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$11) {
      const dx = _M0MPC15array5Array2atGdE(x, i) - _M0MPC15array5Array2atGdE(x, i - 1 | 0);
      const avg_y = (_M0MPC15array5Array2atGdE(y, i) + _M0MPC15array5Array2atGdE(y, i - 1 | 0)) / 2;
      area.val = area.val + dx * avg_y;
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(Math.abs(area.val));
}
function _M0MP38username17moon__metric__lab4core6Matrix3newGiE(rows, cols, init_val) {
  if (rows < 0 || cols < 0) {
    return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput("Matrix dimensions cannot be negative"));
  }
  const total = Math.imul(rows, cols) | 0;
  const data = [];
  const _bind$9 = 0;
  let _tmp$7 = _bind$9;
  while (true) {
    const _i = _tmp$7;
    if (_i < total) {
      _M0MPC15array5Array4pushGiE(data, init_val);
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGiERP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab4core6MatrixGiE(data, rows, cols));
}
function _M0MP38username17moon__metric__lab4core6Matrix3newGdE(rows, cols, init_val) {
  if (rows < 0 || cols < 0) {
    return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput("Matrix dimensions cannot be negative"));
  }
  const total = Math.imul(rows, cols) | 0;
  const data = [];
  const _bind$9 = 0;
  let _tmp$7 = _bind$9;
  while (true) {
    const _i = _tmp$7;
    if (_i < total) {
      _M0MPC15array5Array4pushGdE(data, init_val);
      _tmp$7 = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab4core6MatrixGdE(data, rows, cols));
}
function _M0MP38username17moon__metric__lab4core6Matrix15from__2d__arrayGdE(nested) {
  const rows = nested.length;
  if (rows === 0) {
    return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab4core6MatrixGdE([], 0, 0));
  }
  const cols = _M0MPC15array5Array2atGRP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntryE(nested, 0).length;
  const data = [];
  const _bind$9 = 0;
  let _tmp$7 = _bind$9;
  while (true) {
    const r = _tmp$7;
    if (r < rows) {
      if (_M0MPC15array5Array2atGRP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntryE(nested, r).length !== cols) {
        return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput("Matrix from_2d_array requires all rows to have equal length"));
      }
      const _bind$10 = 0;
      let _tmp$8 = _bind$10;
      while (true) {
        const c = _tmp$8;
        if (c < cols) {
          _M0MPC15array5Array4pushGdE(data, _M0MPC15array5Array2atGdE(_M0MPC15array5Array2atGRP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntryE(nested, r), c));
          _tmp$8 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$7 = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab4core6MatrixGdE(data, rows, cols));
}
function _M0MP38username17moon__metric__lab4core6Matrix4rowsGdE(self) {
  return self.rows;
}
function _M0MP38username17moon__metric__lab4core6Matrix4colsGdE(self) {
  return self.cols;
}
function _M0MP38username17moon__metric__lab4core6Matrix3getGdE(self, row, col) {
  if (row < 0 || (row >= self.rows || (col < 0 || col >= self.cols))) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Matrix index out of bounds: (${_M0MPC13int3Int18to__string_2einner(row, 10)}, ${_M0MPC13int3Int18to__string_2einner(col, 10)})`));
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(_M0MPC15array5Array2atGdE(self.data, (Math.imul(row, self.cols) | 0) + col | 0));
}
function _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self, row, col) {
  if (row < 0 || (row >= self.rows || (col < 0 || col >= self.cols))) {
    return new _M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Matrix index out of bounds: (${_M0MPC13int3Int18to__string_2einner(row, 10)}, ${_M0MPC13int3Int18to__string_2einner(col, 10)})`));
  }
  return new _M0DTPC16result6ResultGiRP38username17moon__metric__lab4core11MetricErrorE2Ok(_M0MPC15array5Array2atGiE(self.data, (Math.imul(row, self.cols) | 0) + col | 0));
}
function _M0MP38username17moon__metric__lab4core6Matrix3setGiE(self, row, col, val) {
  if (row < 0 || (row >= self.rows || (col < 0 || col >= self.cols))) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Matrix index out of bounds: (${_M0MPC13int3Int18to__string_2einner(row, 10)}, ${_M0MPC13int3Int18to__string_2einner(col, 10)})`));
  }
  return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(_M0MPC15array5Array3setGiE(self.data, (Math.imul(row, self.cols) | 0) + col | 0, val));
}
function _M0MP38username17moon__metric__lab4core6Matrix3setGdE(self, row, col, val) {
  if (row < 0 || (row >= self.rows || (col < 0 || col >= self.cols))) {
    return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Matrix index out of bounds: (${_M0MPC13int3Int18to__string_2einner(row, 10)}, ${_M0MPC13int3Int18to__string_2einner(col, 10)})`));
  }
  return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(_M0MPC15array5Array3setGdE(self.data, (Math.imul(row, self.cols) | 0) + col | 0, val));
}
function _M0MP38username17moon__metric__lab4core6Matrix9row__viewGdE(self, row) {
  if (row < 0 || row >= self.rows) {
    return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Matrix row index out of bounds: ${_M0MPC13int3Int18to__string_2einner(row, 10)}`));
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6VectorGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab4core6VectorGdE(self.data, Math.imul(row, self.cols) | 0, self.cols));
}
function _M0FP38username17moon__metric__lab4core23validate__probabilities(arr) {
  const _bind$9 = arr.length;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$9) {
      const p = arr[_];
      if (p < 0 || p > 1) {
        return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error70username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidProbability(p));
      }
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP38username17moon__metric__lab4core11MetricErrorE2Ok(undefined);
}
function _M0FP38username17moon__metric__lab14classification18roc__curve_2einner(y_true, y_prob, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(y_true, y_prob);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab4core23validate__probabilities(y_prob);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const n = y_true.length;
  const total_pos = new _M0TPB8MutLocalGdE(0);
  const total_neg = new _M0TPB8MutLocalGdE(0);
  const _bind$12 = y_true.length;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$12) {
      const y = y_true[_];
      if (y === pos_label) {
        total_pos.val = total_pos.val + 1;
      } else {
        total_neg.val = total_neg.val + 1;
      }
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (total_pos.val === 0 || total_neg.val === 0) {
    return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput("ROC curve requires both positive and negative samples in y_true"));
  }
  const sorted_indices = _M0FP38username17moon__metric__lab4core7argsort(y_prob);
  const thresholds = [];
  const fpr = [];
  const tpr = [];
  _M0MPC15array5Array4pushGdE(thresholds, 1.0000000000000011);
  _M0MPC15array5Array4pushGdE(fpr, 0);
  _M0MPC15array5Array4pushGdE(tpr, 0);
  const _bind$13 = 0;
  let _tmp$8 = _bind$13;
  while (true) {
    const i = _tmp$8;
    if (i < n) {
      const idx = _M0MPC15array5Array2atGiE(sorted_indices, (n - 1 | 0) - i | 0);
      const t = _M0MPC15array5Array2atGdE(y_prob, idx);
      if (t < 0 || t > 1) {
        return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error68username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidThreshold(t));
      }
      const tp = new _M0TPB8MutLocalGdE(0);
      const fp = new _M0TPB8MutLocalGdE(0);
      const _bind$14 = 0;
      let _tmp$9 = _bind$14;
      while (true) {
        const j = _tmp$9;
        if (j < n) {
          if (_M0MPC15array5Array2atGdE(y_prob, j) >= t) {
            if (_M0MPC15array5Array2atGiE(y_true, j) === pos_label) {
              tp.val = tp.val + 1;
            } else {
              fp.val = fp.val + 1;
            }
          }
          _tmp$9 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const cur_fpr = fp.val / total_neg.val;
      const cur_tpr = tp.val / total_pos.val;
      if (thresholds.length > 0 && Math.abs(_M0MPC15array5Array2atGdE(thresholds, thresholds.length - 1 | 0) - t) < 1e-015) {
        _M0MPC15array5Array3setGdE(fpr, fpr.length - 1 | 0, cur_fpr);
        _M0MPC15array5Array3setGdE(tpr, tpr.length - 1 | 0, cur_tpr);
      } else {
        _M0MPC15array5Array4pushGdE(thresholds, t);
        _M0MPC15array5Array4pushGdE(fpr, cur_fpr);
        _M0MPC15array5Array4pushGdE(tpr, cur_tpr);
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (Math.abs(_M0MPC15array5Array2atGdE(thresholds, thresholds.length - 1 | 0)) >= 1e-015) {
    _M0MPC15array5Array4pushGdE(thresholds, 0);
    _M0MPC15array5Array4pushGdE(fpr, 1);
    _M0MPC15array5Array4pushGdE(tpr, 1);
  }
  const _bind$14 = _M0FP38username17moon__metric__lab4core17trapezoidal__area(fpr, tpr);
  let auc;
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    auc = _ok._0;
  } else {
    return _bind$14;
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification14RocCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab14classification14RocCurveResult(fpr, tpr, thresholds, auc));
}
function _M0FP38username17moon__metric__lab14classification32precision__recall__curve_2einner(y_true, y_prob, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(y_true, y_prob);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab4core23validate__probabilities(y_prob);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const n = y_true.length;
  const sorted_indices = _M0FP38username17moon__metric__lab4core7argsort(y_prob);
  const thresholds = [];
  const precision_curve = [];
  const recall_curve = [];
  const _bind$12 = 0;
  let _tmp$7 = _bind$12;
  while (true) {
    const i = _tmp$7;
    if (i < n) {
      const idx = _M0MPC15array5Array2atGiE(sorted_indices, (n - 1 | 0) - i | 0);
      const t = _M0MPC15array5Array2atGdE(y_prob, idx);
      const tp = new _M0TPB8MutLocalGdE(0);
      const fp = new _M0TPB8MutLocalGdE(0);
      const fn_count = new _M0TPB8MutLocalGdE(0);
      const _bind$13 = 0;
      let _tmp$8 = _bind$13;
      while (true) {
        const j = _tmp$8;
        if (j < n) {
          const pred_pos = _M0MPC15array5Array2atGdE(y_prob, j) >= t;
          const true_pos = _M0MPC15array5Array2atGiE(y_true, j) === pos_label;
          if (pred_pos && true_pos) {
            tp.val = tp.val + 1;
          } else {
            if (pred_pos && !true_pos) {
              fp.val = fp.val + 1;
            } else {
              if (!pred_pos && true_pos) {
                fn_count.val = fn_count.val + 1;
              }
            }
          }
          _tmp$8 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$14 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(tp.val, tp.val + fp.val, false);
      let p;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        p = _ok._0;
      } else {
        return _bind$14;
      }
      const _bind$15 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(tp.val, tp.val + fn_count.val, false);
      let r;
      if (_bind$15.$tag === 1) {
        const _ok = _bind$15;
        r = _ok._0;
      } else {
        return _bind$15;
      }
      if (thresholds.length > 0 && Math.abs(_M0MPC15array5Array2atGdE(thresholds, thresholds.length - 1 | 0) - t) < 1e-015) {
        _M0MPC15array5Array3setGdE(precision_curve, precision_curve.length - 1 | 0, p);
        _M0MPC15array5Array3setGdE(recall_curve, recall_curve.length - 1 | 0, r);
      } else {
        _M0MPC15array5Array4pushGdE(thresholds, t);
        _M0MPC15array5Array4pushGdE(precision_curve, p);
        _M0MPC15array5Array4pushGdE(recall_curve, r);
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$13 = _M0FP38username17moon__metric__lab4core17trapezoidal__area(recall_curve, precision_curve);
  let auc;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    auc = _ok._0;
  } else {
    return _bind$13;
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification13PrCurveResultRP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab14classification13PrCurveResult(precision_curve, recall_curve, thresholds, auc));
}
function _M0FP38username17moon__metric__lab14classification17precision_2einner(y_true, y_pred, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const tp = new _M0TPB8MutLocalGiE(0);
  const fp = new _M0TPB8MutLocalGiE(0);
  const _bind$11 = 0;
  const _bind$12 = y_true.length;
  let _tmp$7 = _bind$11;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$12) {
      if (_M0MPC15array5Array2atGiE(y_pred, i) === pos_label) {
        if (_M0MPC15array5Array2atGiE(y_true, i) === pos_label) {
          tp.val = tp.val + 1 | 0;
        } else {
          fp.val = fp.val + 1 | 0;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP38username17moon__metric__lab4core17safe__div_2einner(tp.val + 0, (tp.val + fp.val | 0) + 0, false);
}
function _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const tp = new _M0TPB8MutLocalGiE(0);
  const fn_count = new _M0TPB8MutLocalGiE(0);
  const _bind$11 = 0;
  const _bind$12 = y_true.length;
  let _tmp$7 = _bind$11;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$12) {
      if (_M0MPC15array5Array2atGiE(y_true, i) === pos_label) {
        if (_M0MPC15array5Array2atGiE(y_pred, i) === pos_label) {
          tp.val = tp.val + 1 | 0;
        } else {
          fn_count.val = fn_count.val + 1 | 0;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP38username17moon__metric__lab4core17safe__div_2einner(tp.val + 0, (tp.val + fn_count.val | 0) + 0, false);
}
function _M0FP38username17moon__metric__lab14classification22f__beta__score_2einner(y_true, y_pred, beta, pos_label) {
  if (beta < 0) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput("beta must be non-negative"));
  }
  const _bind$9 = _M0FP38username17moon__metric__lab14classification17precision_2einner(y_true, y_pred, pos_label);
  let p;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    p = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, pos_label);
  let r;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    r = _ok._0;
  } else {
    return _bind$10;
  }
  const beta_sq = beta * beta;
  const num = (1 + beta_sq) * p * r;
  const den = beta_sq * p + r;
  return _M0FP38username17moon__metric__lab4core17safe__div_2einner(num, den, false);
}
function _M0FP38username17moon__metric__lab14classification17f1__score_2einner(y_true, y_pred, pos_label) {
  return _M0FP38username17moon__metric__lab14classification22f__beta__score_2einner(y_true, y_pred, 1, pos_label);
}
function _M0FP38username17moon__metric__lab14classification32find__optimal__threshold_2einner(y_true, y_prob, metric, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(y_true, y_prob);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const best_thresh = new _M0TPB8MutLocalGdE(0.5);
  const best_score = new _M0TPB8MutLocalGdE(-1);
  const n = y_true.length;
  const step = 0.02;
  const t = new _M0TPB8MutLocalGdE(0.02);
  while (true) {
    if (t.val < 0.99) {
      const y_pred = [];
      const _bind$11 = 0;
      let _tmp$7 = _bind$11;
      while (true) {
        const i = _tmp$7;
        if (i < n) {
          if (_M0MPC15array5Array2atGdE(y_prob, i) >= t.val) {
            _M0MPC15array5Array4pushGiE(y_pred, pos_label);
          } else {
            _M0MPC15array5Array4pushGiE(y_pred, pos_label === 1 ? 0 : 1);
          }
          _tmp$7 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let cur_score;
      if (metric === "f1") {
        const _bind$12 = _M0FP38username17moon__metric__lab14classification17f1__score_2einner(y_true, y_pred, pos_label);
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          cur_score = _ok._0;
        } else {
          return _bind$12;
        }
      } else {
        if (metric === "youden") {
          const _bind$12 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, pos_label);
          let sens;
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            sens = _ok._0;
          } else {
            return _bind$12;
          }
          const tn = new _M0TPB8MutLocalGiE(0);
          const fp = new _M0TPB8MutLocalGiE(0);
          const _bind$13 = 0;
          let _tmp$8 = _bind$13;
          while (true) {
            const i = _tmp$8;
            if (i < n) {
              if (_M0MPC15array5Array2atGiE(y_true, i) !== pos_label) {
                if (_M0MPC15array5Array2atGiE(y_pred, i) !== pos_label) {
                  tn.val = tn.val + 1 | 0;
                } else {
                  fp.val = fp.val + 1 | 0;
                }
              }
              _tmp$8 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$14 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(tn.val + 0, (tn.val + fp.val | 0) + 0, false);
          let spec;
          if (_bind$14.$tag === 1) {
            const _ok = _bind$14;
            spec = _ok._0;
          } else {
            return _bind$14;
          }
          cur_score = sens + spec - 1;
        } else {
          return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Unknown threshold metric: ${metric} (expected f1/youden)`));
        }
      }
      if (cur_score > best_score.val) {
        best_score.val = cur_score;
        best_thresh.val = t.val;
      }
      t.val = t.val + step;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(best_thresh.val);
}
function _M0FP38username17moon__metric__lab14classification8accuracy(y_true, y_pred) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Input arrays must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const correct = new _M0TPB8MutLocalGiE(0);
  const _bind$11 = 0;
  const _bind$12 = y_true.length;
  let _tmp$7 = _bind$11;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$12) {
      if (_M0MPC15array5Array2atGiE(y_true, i) === _M0MPC15array5Array2atGiE(y_pred, i)) {
        correct.val = correct.val + 1 | 0;
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok((correct.val + 0) / (y_true.length + 0));
}
function _M0FP38username17moon__metric__lab14classification24top__k__accuracy_2einner(y_true, y_prob, k) {
  const n = y_true.length;
  if (n !== _M0MP38username17moon__metric__lab4core6Matrix4rowsGdE(y_prob)) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(n, _M0MP38username17moon__metric__lab4core6Matrix4rowsGdE(y_prob)));
  }
  const _bind$9 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  if (k <= 0 || k > _M0MP38username17moon__metric__lab4core6Matrix4colsGdE(y_prob)) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`k must be between 1 and total classes (${_M0MPC13int3Int18to__string_2einner(_M0MP38username17moon__metric__lab4core6Matrix4colsGdE(y_prob), 10)})`));
  }
  const correct = new _M0TPB8MutLocalGiE(0);
  const _bind$10 = 0;
  let _tmp$7 = _bind$10;
  while (true) {
    const i = _tmp$7;
    if (i < n) {
      const true_label = _M0MPC15array5Array2atGiE(y_true, i);
      if (true_label < 0 || true_label >= _M0MP38username17moon__metric__lab4core6Matrix4colsGdE(y_prob)) {
        return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`True label out of class index bounds: ${_M0MPC13int3Int18to__string_2einner(true_label, 10)}`));
      }
      const _bind$11 = _M0MP38username17moon__metric__lab4core6Matrix9row__viewGdE(y_prob, i);
      let _tmp$8;
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _tmp$8 = _ok._0;
      } else {
        return _bind$11;
      }
      const row_scores = _M0MP38username17moon__metric__lab4core6Vector9to__arrayGdE(_tmp$8);
      const sorted_indices = _M0FP38username17moon__metric__lab4core7argsort(row_scores);
      const found = new _M0TPB8MutLocalGbE(false);
      const num_cols = sorted_indices.length;
      const _bind$12 = 0;
      let _tmp$9 = _bind$12;
      while (true) {
        const j = _tmp$9;
        if (j < k) {
          const idx = _M0MPC15array5Array2atGiE(sorted_indices, (num_cols - 1 | 0) - j | 0);
          if (idx === true_label) {
            found.val = true;
            break;
          }
          _tmp$9 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (found.val) {
        correct.val = correct.val + 1 | 0;
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok((correct.val + 0) / (n + 0));
}
function _M0FP38username17moon__metric__lab14classification20get__unique__classes(arr1, arr2) {
  const _bind$9 = [];
  const set = _M0MPB3Map3MapGiuE(new _M0TPB9ArrayViewGUiuEE(_bind$9, 0, 0), undefined);
  const _bind$10 = arr1.length;
  let _tmp$7 = 0;
  while (true) {
    const _ = _tmp$7;
    if (_ < _bind$10) {
      const v = arr1[_];
      _M0MPB3Map3setGiuE(set, v, undefined);
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$11 = arr2.length;
  let _tmp$8 = 0;
  while (true) {
    const _ = _tmp$8;
    if (_ < _bind$11) {
      const v = arr2[_];
      _M0MPB3Map3setGiuE(set, v, undefined);
      _tmp$8 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const classes = [];
  const _it = _M0MPB3Map5iter2GiuE(set);
  while (true) {
    let k;
    _L: {
      const _bind$12 = _M0MPB5Iter24nextGiuE(_it);
      if (_bind$12 === undefined) {
        break;
      } else {
        const _Some = _bind$12;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L;
      }
    }
    _M0MPC15array5Array4pushGiE(classes, k);
    continue;
  }
  _M0MPC15array5Array4sortGiE(classes);
  return classes;
}
function _M0FP38username17moon__metric__lab14classification29multiclass__precision_2einner(y_true, y_pred, averaging) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const classes = _M0FP38username17moon__metric__lab14classification20get__unique__classes(y_true, y_pred);
  switch (averaging) {
    case 1: {
      const total_tp = new _M0TPB8MutLocalGiE(0);
      const total_fp = new _M0TPB8MutLocalGiE(0);
      const _bind$11 = classes.length;
      let _tmp$7 = 0;
      while (true) {
        const _ = _tmp$7;
        if (_ < _bind$11) {
          const cls = classes[_];
          const _bind$12 = 0;
          const _bind$13 = y_true.length;
          let _tmp$8 = _bind$12;
          while (true) {
            const i = _tmp$8;
            if (i < _bind$13) {
              if (_M0MPC15array5Array2atGiE(y_pred, i) === cls) {
                if (_M0MPC15array5Array2atGiE(y_true, i) === cls) {
                  total_tp.val = total_tp.val + 1 | 0;
                } else {
                  total_fp.val = total_fp.val + 1 | 0;
                }
              }
              _tmp$8 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$7 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(total_tp.val + 0, (total_tp.val + total_fp.val | 0) + 0, false);
    }
    case 0: {
      const sum_prec = new _M0TPB8MutLocalGdE(0);
      const _bind$12 = classes.length;
      let _tmp$8 = 0;
      while (true) {
        const _ = _tmp$8;
        if (_ < _bind$12) {
          const cls = classes[_];
          const _tmp$9 = sum_prec.val;
          const _bind$13 = _M0FP38username17moon__metric__lab14classification17precision_2einner(y_true, y_pred, cls);
          let _tmp$10;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _tmp$10 = _ok._0;
          } else {
            return _bind$13;
          }
          sum_prec.val = _tmp$9 + _tmp$10;
          _tmp$8 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(sum_prec.val / (classes.length + 0));
    }
    default: {
      const sum_weighted_prec = new _M0TPB8MutLocalGdE(0);
      const total_support = new _M0TPB8MutLocalGdE(0);
      const _bind$13 = classes.length;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$13) {
          const cls = classes[_];
          const support = new _M0TPB8MutLocalGdE(0);
          const _bind$14 = y_true.length;
          let _tmp$10 = 0;
          while (true) {
            const _$2 = _tmp$10;
            if (_$2 < _bind$14) {
              const y = y_true[_$2];
              if (y === cls) {
                support.val = support.val + 1;
              }
              _tmp$10 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$15 = _M0FP38username17moon__metric__lab14classification17precision_2einner(y_true, y_pred, cls);
          let p;
          if (_bind$15.$tag === 1) {
            const _ok = _bind$15;
            p = _ok._0;
          } else {
            return _bind$15;
          }
          sum_weighted_prec.val = sum_weighted_prec.val + p * support.val;
          total_support.val = total_support.val + support.val;
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(sum_weighted_prec.val, total_support.val, false);
    }
  }
}
function _M0FP38username17moon__metric__lab14classification26multiclass__recall_2einner(y_true, y_pred, averaging) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const classes = _M0FP38username17moon__metric__lab14classification20get__unique__classes(y_true, y_pred);
  switch (averaging) {
    case 1: {
      const total_tp = new _M0TPB8MutLocalGiE(0);
      const total_fn = new _M0TPB8MutLocalGiE(0);
      const _bind$11 = classes.length;
      let _tmp$7 = 0;
      while (true) {
        const _ = _tmp$7;
        if (_ < _bind$11) {
          const cls = classes[_];
          const _bind$12 = 0;
          const _bind$13 = y_true.length;
          let _tmp$8 = _bind$12;
          while (true) {
            const i = _tmp$8;
            if (i < _bind$13) {
              if (_M0MPC15array5Array2atGiE(y_true, i) === cls) {
                if (_M0MPC15array5Array2atGiE(y_pred, i) === cls) {
                  total_tp.val = total_tp.val + 1 | 0;
                } else {
                  total_fn.val = total_fn.val + 1 | 0;
                }
              }
              _tmp$8 = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$7 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(total_tp.val + 0, (total_tp.val + total_fn.val | 0) + 0, false);
    }
    case 0: {
      const sum_rec = new _M0TPB8MutLocalGdE(0);
      const _bind$12 = classes.length;
      let _tmp$8 = 0;
      while (true) {
        const _ = _tmp$8;
        if (_ < _bind$12) {
          const cls = classes[_];
          const _tmp$9 = sum_rec.val;
          const _bind$13 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, cls);
          let _tmp$10;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _tmp$10 = _ok._0;
          } else {
            return _bind$13;
          }
          sum_rec.val = _tmp$9 + _tmp$10;
          _tmp$8 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(sum_rec.val / (classes.length + 0));
    }
    default: {
      const sum_weighted_rec = new _M0TPB8MutLocalGdE(0);
      const total_support = new _M0TPB8MutLocalGdE(0);
      const _bind$13 = classes.length;
      let _tmp$9 = 0;
      while (true) {
        const _ = _tmp$9;
        if (_ < _bind$13) {
          const cls = classes[_];
          const support = new _M0TPB8MutLocalGdE(0);
          const _bind$14 = y_true.length;
          let _tmp$10 = 0;
          while (true) {
            const _$2 = _tmp$10;
            if (_$2 < _bind$14) {
              const y = y_true[_$2];
              if (y === cls) {
                support.val = support.val + 1;
              }
              _tmp$10 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$15 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, cls);
          let r;
          if (_bind$15.$tag === 1) {
            const _ok = _bind$15;
            r = _ok._0;
          } else {
            return _bind$15;
          }
          sum_weighted_rec.val = sum_weighted_rec.val + r * support.val;
          total_support.val = total_support.val + support.val;
          _tmp$9 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(sum_weighted_rec.val, total_support.val, false);
    }
  }
}
function _M0FP38username17moon__metric__lab14classification29multiclass__f1__score_2einner(y_true, y_pred, averaging) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const classes = _M0FP38username17moon__metric__lab14classification20get__unique__classes(y_true, y_pred);
  switch (averaging) {
    case 1: {
      const _bind$11 = _M0FP38username17moon__metric__lab14classification29multiclass__precision_2einner(y_true, y_pred, 1);
      let prec;
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        prec = _ok._0;
      } else {
        return _bind$11;
      }
      const _bind$12 = _M0FP38username17moon__metric__lab14classification26multiclass__recall_2einner(y_true, y_pred, 1);
      let rec;
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        rec = _ok._0;
      } else {
        return _bind$12;
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(2 * prec * rec, prec + rec, false);
    }
    case 0: {
      const sum_f1 = new _M0TPB8MutLocalGdE(0);
      const _bind$13 = classes.length;
      let _tmp$7 = 0;
      while (true) {
        const _ = _tmp$7;
        if (_ < _bind$13) {
          const cls = classes[_];
          const _tmp$8 = sum_f1.val;
          const _bind$14 = _M0FP38username17moon__metric__lab14classification17f1__score_2einner(y_true, y_pred, cls);
          let _tmp$9;
          if (_bind$14.$tag === 1) {
            const _ok = _bind$14;
            _tmp$9 = _ok._0;
          } else {
            return _bind$14;
          }
          sum_f1.val = _tmp$8 + _tmp$9;
          _tmp$7 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(sum_f1.val / (classes.length + 0));
    }
    default: {
      const sum_weighted_f1 = new _M0TPB8MutLocalGdE(0);
      const total_support = new _M0TPB8MutLocalGdE(0);
      const _bind$14 = classes.length;
      let _tmp$8 = 0;
      while (true) {
        const _ = _tmp$8;
        if (_ < _bind$14) {
          const cls = classes[_];
          const support = new _M0TPB8MutLocalGdE(0);
          const _bind$15 = y_true.length;
          let _tmp$9 = 0;
          while (true) {
            const _$2 = _tmp$9;
            if (_$2 < _bind$15) {
              const y = y_true[_$2];
              if (y === cls) {
                support.val = support.val + 1;
              }
              _tmp$9 = _$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$16 = _M0FP38username17moon__metric__lab14classification17f1__score_2einner(y_true, y_pred, cls);
          let f;
          if (_bind$16.$tag === 1) {
            const _ok = _bind$16;
            f = _ok._0;
          } else {
            return _bind$16;
          }
          sum_weighted_f1.val = sum_weighted_f1.val + f * support.val;
          total_support.val = total_support.val + support.val;
          _tmp$8 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0FP38username17moon__metric__lab4core17safe__div_2einner(sum_weighted_f1.val, total_support.val, false);
    }
  }
}
function _M0FP38username17moon__metric__lab14classification21multiclass__log__loss(y_true, y_prob) {
  const n = y_true.length;
  if (n !== _M0MP38username17moon__metric__lab4core6Matrix4rowsGdE(y_prob)) {
    return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error69username_2fmoon__metric__lab_2fcore_2eMetricError_2eDimensionMismatch(n, _M0MP38username17moon__metric__lab4core6Matrix4rowsGdE(y_prob)));
  }
  const _bind$9 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const loss_sum = new _M0TPB8MutLocalGdE(0);
  const _bind$10 = 0;
  let _tmp$7 = _bind$10;
  while (true) {
    const i = _tmp$7;
    if (i < n) {
      const cls = _M0MPC15array5Array2atGiE(y_true, i);
      if (cls < 0 || cls >= _M0MP38username17moon__metric__lab4core6Matrix4colsGdE(y_prob)) {
        return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`True label index out of bounds: ${_M0MPC13int3Int18to__string_2einner(cls, 10)}`));
      }
      const _bind$11 = _M0MP38username17moon__metric__lab4core6Matrix3getGdE(y_prob, i, cls);
      let p;
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        p = _ok._0;
      } else {
        return _bind$11;
      }
      if (p < 0 || p > 1) {
        return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error70username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidProbability(p));
      }
      loss_sum.val = loss_sum.val - _M0FP38username17moon__metric__lab4core9safe__log(p);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(loss_sum.val / (n + 0));
}
function _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17from__predictions(y_true, y_pred) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const classes = _M0FP38username17moon__metric__lab14classification20get__unique__classes(y_true, y_pred);
  const n_classes = classes.length;
  const _bind$11 = [];
  const class_map = _M0MPB3Map3MapGiiE(new _M0TPB9ArrayViewGUiiEE(_bind$11, 0, 0), undefined);
  const _bind$12 = 0;
  let _tmp$7 = _bind$12;
  while (true) {
    const i = _tmp$7;
    if (i < n_classes) {
      _M0MPB3Map3setGiiE(class_map, _M0MPC15array5Array2atGiE(classes, i), i);
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3newGiE(n_classes, n_classes, 0);
  let mat;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    mat = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = 0;
  const _bind$15 = y_true.length;
  let _tmp$8 = _bind$14;
  while (true) {
    const i = _tmp$8;
    if (i < _bind$15) {
      let r;
      const _bind$16 = _M0MPB3Map3getGiiE(class_map, _M0MPC15array5Array2atGiE(y_true, i));
      if (_bind$16 === undefined) {
        return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Unknown true class: ${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(y_true, i), 10)}`));
      } else {
        const _Some = _bind$16;
        const _idx = _Some;
        r = _idx;
      }
      let c;
      const _bind$17 = _M0MPB3Map3getGiiE(class_map, _M0MPC15array5Array2atGiE(y_pred, i));
      if (_bind$17 === undefined) {
        return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Unknown predicted class: ${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(y_pred, i), 10)}`));
      } else {
        const _Some = _bind$17;
        const _idx = _Some;
        c = _idx;
      }
      const _bind$18 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(mat, r, c);
      let cur;
      if (_bind$18.$tag === 1) {
        const _ok = _bind$18;
        cur = _ok._0;
      } else {
        return _bind$18;
      }
      const _bind$19 = _M0MP38username17moon__metric__lab4core6Matrix3setGiE(mat, r, c, cur + 1 | 0);
      if (_bind$19.$tag === 1) {
        const _ok = _bind$19;
        _ok._0;
      } else {
        return _bind$19;
      }
      _tmp$8 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab14classification15ConfusionMatrixRP38username17moon__metric__lab4core11MetricErrorE2Ok(new _M0TP38username17moon__metric__lab14classification15ConfusionMatrix(mat, classes));
}
function _M0MP38username17moon__metric__lab14classification15ConfusionMatrix7classes(self) {
  return self.classes;
}
function _M0MP38username17moon__metric__lab14classification15ConfusionMatrix19get__tp__fp__fn__tn(self, cls_label) {
  const target_idx = new _M0TPB8MutLocalGiE(-1);
  const _bind$9 = 0;
  const _bind$10 = self.classes.length;
  let _tmp$7 = _bind$9;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$10) {
      if (_M0MPC15array5Array2atGiE(self.classes, i) === cls_label) {
        target_idx.val = i;
        break;
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (target_idx.val === -1) {
    return new _M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Class label not found in confusion matrix: ${_M0MPC13int3Int18to__string_2einner(cls_label, 10)}`));
  }
  const n = self.classes.length;
  const _bind$11 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, target_idx.val, target_idx.val);
  let tp;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    tp = _ok._0;
  } else {
    return _bind$11;
  }
  const fp = new _M0TPB8MutLocalGiE(0);
  const fn_count = new _M0TPB8MutLocalGiE(0);
  const total = new _M0TPB8MutLocalGiE(0);
  const _bind$12 = 0;
  let _tmp$8 = _bind$12;
  while (true) {
    const r = _tmp$8;
    if (r < n) {
      const _bind$13 = 0;
      let _tmp$9 = _bind$13;
      while (true) {
        const c = _tmp$9;
        if (c < n) {
          const _bind$14 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
          let val;
          if (_bind$14.$tag === 1) {
            const _ok = _bind$14;
            val = _ok._0;
          } else {
            return _bind$14;
          }
          total.val = total.val + val | 0;
          if (r !== target_idx.val && c === target_idx.val) {
            fp.val = fp.val + val | 0;
          }
          if (r === target_idx.val && c !== target_idx.val) {
            fn_count.val = fn_count.val + val | 0;
          }
          _tmp$9 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$8 = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const tn = total.val - ((tp + fp.val | 0) + fn_count.val | 0) | 0;
  return new _M0DTPC16result6ResultGUiiiiERP38username17moon__metric__lab4core11MetricErrorE2Ok({ _0: tp, _1: fp.val, _2: fn_count.val, _3: tn });
}
function _M0MP38username17moon__metric__lab14classification15ConfusionMatrix18normalized_2einner(self, mode) {
  const n = self.classes.length;
  const _bind$9 = _M0MP38username17moon__metric__lab4core6Matrix3newGdE(n, n, 0);
  let result;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    result = _ok._0;
  } else {
    return _bind$9;
  }
  if (mode === "true") {
    const _bind$10 = 0;
    let _tmp$7 = _bind$10;
    while (true) {
      const r = _tmp$7;
      if (r < n) {
        const row_sum = new _M0TPB8MutLocalGiE(0);
        const _bind$11 = 0;
        let _tmp$8 = _bind$11;
        while (true) {
          const c = _tmp$8;
          if (c < n) {
            const _tmp$9 = row_sum.val;
            const _bind$12 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
            let _tmp$10;
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _tmp$10 = _ok._0;
            } else {
              return _bind$12;
            }
            row_sum.val = _tmp$9 + _tmp$10 | 0;
            _tmp$8 = c + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$12 = 0;
        let _tmp$9 = _bind$12;
        while (true) {
          const c = _tmp$9;
          if (c < n) {
            const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
            let _tmp$10;
            if (_bind$13.$tag === 1) {
              const _ok = _bind$13;
              _tmp$10 = _ok._0;
            } else {
              return _bind$13;
            }
            const val = _tmp$10 + 0;
            const _bind$14 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(val, row_sum.val + 0, false);
            let _tmp$11;
            if (_bind$14.$tag === 1) {
              const _ok = _bind$14;
              _tmp$11 = _ok._0;
            } else {
              return _bind$14;
            }
            const _bind$15 = _M0MP38username17moon__metric__lab4core6Matrix3setGdE(result, r, c, _tmp$11);
            if (_bind$15.$tag === 1) {
              const _ok = _bind$15;
              _ok._0;
            } else {
              return _bind$15;
            }
            _tmp$9 = c + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp$7 = r + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    if (mode === "pred") {
      const _bind$10 = 0;
      let _tmp$7 = _bind$10;
      while (true) {
        const c = _tmp$7;
        if (c < n) {
          const col_sum = new _M0TPB8MutLocalGiE(0);
          const _bind$11 = 0;
          let _tmp$8 = _bind$11;
          while (true) {
            const r = _tmp$8;
            if (r < n) {
              const _tmp$9 = col_sum.val;
              const _bind$12 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
              let _tmp$10;
              if (_bind$12.$tag === 1) {
                const _ok = _bind$12;
                _tmp$10 = _ok._0;
              } else {
                return _bind$12;
              }
              col_sum.val = _tmp$9 + _tmp$10 | 0;
              _tmp$8 = r + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$12 = 0;
          let _tmp$9 = _bind$12;
          while (true) {
            const r = _tmp$9;
            if (r < n) {
              const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
              let _tmp$10;
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                _tmp$10 = _ok._0;
              } else {
                return _bind$13;
              }
              const val = _tmp$10 + 0;
              const _bind$14 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(val, col_sum.val + 0, false);
              let _tmp$11;
              if (_bind$14.$tag === 1) {
                const _ok = _bind$14;
                _tmp$11 = _ok._0;
              } else {
                return _bind$14;
              }
              const _bind$15 = _M0MP38username17moon__metric__lab4core6Matrix3setGdE(result, r, c, _tmp$11);
              if (_bind$15.$tag === 1) {
                const _ok = _bind$15;
                _ok._0;
              } else {
                return _bind$15;
              }
              _tmp$9 = r + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$7 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      if (mode === "all") {
        const total = new _M0TPB8MutLocalGiE(0);
        const _bind$10 = 0;
        let _tmp$7 = _bind$10;
        while (true) {
          const r = _tmp$7;
          if (r < n) {
            const _bind$11 = 0;
            let _tmp$8 = _bind$11;
            while (true) {
              const c = _tmp$8;
              if (c < n) {
                const _tmp$9 = total.val;
                const _bind$12 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
                let _tmp$10;
                if (_bind$12.$tag === 1) {
                  const _ok = _bind$12;
                  _tmp$10 = _ok._0;
                } else {
                  return _bind$12;
                }
                total.val = _tmp$9 + _tmp$10 | 0;
                _tmp$8 = c + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$7 = r + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$11 = 0;
        let _tmp$8 = _bind$11;
        while (true) {
          const r = _tmp$8;
          if (r < n) {
            const _bind$12 = 0;
            let _tmp$9 = _bind$12;
            while (true) {
              const c = _tmp$9;
              if (c < n) {
                const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
                let _tmp$10;
                if (_bind$13.$tag === 1) {
                  const _ok = _bind$13;
                  _tmp$10 = _ok._0;
                } else {
                  return _bind$13;
                }
                const val = _tmp$10 + 0;
                const _bind$14 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(val, total.val + 0, false);
                let _tmp$11;
                if (_bind$14.$tag === 1) {
                  const _ok = _bind$14;
                  _tmp$11 = _ok._0;
                } else {
                  return _bind$14;
                }
                const _bind$15 = _M0MP38username17moon__metric__lab4core6Matrix3setGdE(result, r, c, _tmp$11);
                if (_bind$15.$tag === 1) {
                  const _ok = _bind$15;
                  _ok._0;
                } else {
                  return _bind$15;
                }
                _tmp$9 = c + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _tmp$8 = r + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      } else {
        return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE3Err(new _M0DTPC15error5Error64username_2fmoon__metric__lab_2fcore_2eMetricError_2eInvalidInput(`Unknown normalization mode: ${mode} (expected 'true', 'pred', or 'all')`));
      }
    }
  }
  return new _M0DTPC16result6ResultGRP38username17moon__metric__lab4core6MatrixGdERP38username17moon__metric__lab4core11MetricErrorE2Ok(result);
}
function _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17to__table__string(self) {
  const n = self.classes.length;
  const out = new _M0TPB8MutLocalGsE("Confusion Matrix (True \\ Pred)\n");
  out.val = `${out.val}       |`;
  const _bind$9 = 0;
  let _tmp$7 = _bind$9;
  while (true) {
    const c = _tmp$7;
    if (c < n) {
      out.val = `${out.val}  C${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(self.classes, c), 10)}  |`;
      _tmp$7 = c + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  out.val = `${out.val}\n-------+`;
  const _bind$10 = 0;
  let _tmp$8 = _bind$10;
  while (true) {
    const _ = _tmp$8;
    if (_ < n) {
      out.val = `${out.val}-------+`;
      _tmp$8 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  out.val = `${out.val}\n`;
  const _bind$11 = 0;
  let _tmp$9 = _bind$11;
  while (true) {
    const r = _tmp$9;
    if (r < n) {
      out.val = `${out.val}  C${_M0MPC13int3Int18to__string_2einner(_M0MPC15array5Array2atGiE(self.classes, r), 10)}  |`;
      const _bind$12 = 0;
      let _tmp$10 = _bind$12;
      while (true) {
        const c = _tmp$10;
        if (c < n) {
          let val;
          let _try_err;
          _L: {
            _L$2: {
              const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3getGiE(self.matrix, r, c);
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                val = _ok._0;
              } else {
                const _err = _bind$13;
                _try_err = _err._0;
                break _L$2;
              }
              break _L;
            }
            val = 0;
          }
          const s = _M0MPC13int3Int18to__string_2einner(val, 10);
          const pad = new _M0TPB8MutLocalGsE(" ");
          if (s.length < 4) {
            const _bind$13 = 0;
            const _bind$14 = 4 - s.length | 0;
            let _tmp$11 = _bind$13;
            while (true) {
              const _ = _tmp$11;
              if (_ < _bind$14) {
                pad.val = `${pad.val} `;
                _tmp$11 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          out.val = `${out.val}${pad.val}${s} |`;
          _tmp$10 = c + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      out.val = `${out.val}\n`;
      _tmp$9 = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP38username17moon__metric__lab14classification9log__loss(y_true, y_prob) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(y_true, y_prob);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab4core23validate__probabilities(y_prob);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const loss_sum = new _M0TPB8MutLocalGdE(0);
  const n = y_true.length;
  const _bind$12 = 0;
  let _tmp$7 = _bind$12;
  while (true) {
    const i = _tmp$7;
    if (i < n) {
      const y = _M0MPC15array5Array2atGiE(y_true, i) + 0;
      const p = _M0MPC15array5Array2atGdE(y_prob, i);
      loss_sum.val = loss_sum.val - (y * _M0FP38username17moon__metric__lab4core9safe__log(p) + (1 - y) * _M0FP38username17moon__metric__lab4core9safe__log(1 - p));
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(loss_sum.val / (n + 0));
}
function _M0FP38username17moon__metric__lab14classification11mcc_2einner(y_true, y_pred, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const tp = new _M0TPB8MutLocalGdE(0);
  const tn = new _M0TPB8MutLocalGdE(0);
  const fp = new _M0TPB8MutLocalGdE(0);
  const fn_count = new _M0TPB8MutLocalGdE(0);
  const _bind$11 = 0;
  const _bind$12 = y_true.length;
  let _tmp$7 = _bind$11;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$12) {
      const is_true_pos = _M0MPC15array5Array2atGiE(y_true, i) === pos_label;
      const is_pred_pos = _M0MPC15array5Array2atGiE(y_pred, i) === pos_label;
      if (is_true_pos && is_pred_pos) {
        tp.val = tp.val + 1;
      } else {
        if (!is_true_pos && !is_pred_pos) {
          tn.val = tn.val + 1;
        } else {
          if (!is_true_pos && is_pred_pos) {
            fp.val = fp.val + 1;
          } else {
            fn_count.val = fn_count.val + 1;
          }
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const num = tp.val * tn.val - fp.val * fn_count.val;
  const den_sq = (tp.val + fp.val) * (tp.val + fn_count.val) * (tn.val + fp.val) * (tn.val + fn_count.val);
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(Math.abs(den_sq) < 1e-015 ? 0 : num / Math.sqrt(den_sq));
}
function _M0FP38username17moon__metric__lab14classification26balanced__accuracy_2einner(y_true, y_pred, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, pos_label);
  let sens;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    sens = _ok._0;
  } else {
    return _bind$9;
  }
  const tn = new _M0TPB8MutLocalGiE(0);
  const fp = new _M0TPB8MutLocalGiE(0);
  const _bind$10 = 0;
  const _bind$11 = y_true.length;
  let _tmp$7 = _bind$10;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$11) {
      if (_M0MPC15array5Array2atGiE(y_true, i) !== pos_label) {
        if (_M0MPC15array5Array2atGiE(y_pred, i) !== pos_label) {
          tn.val = tn.val + 1 | 0;
        } else {
          fp.val = fp.val + 1 | 0;
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$12 = _M0FP38username17moon__metric__lab4core17safe__div_2einner(tn.val + 0, (tn.val + fp.val | 0) + 0, false);
  let spec;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    spec = _ok._0;
  } else {
    return _bind$12;
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok((sens + spec) / 2);
}
function _M0FP38username17moon__metric__lab14classification22jaccard__score_2einner(y_true, y_pred, pos_label) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGiiE(y_true, y_pred);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const tp = new _M0TPB8MutLocalGiE(0);
  const fp = new _M0TPB8MutLocalGiE(0);
  const fn_count = new _M0TPB8MutLocalGiE(0);
  const _bind$11 = 0;
  const _bind$12 = y_true.length;
  let _tmp$7 = _bind$11;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$12) {
      const is_true_pos = _M0MPC15array5Array2atGiE(y_true, i) === pos_label;
      const is_pred_pos = _M0MPC15array5Array2atGiE(y_pred, i) === pos_label;
      if (is_true_pos && is_pred_pos) {
        tp.val = tp.val + 1 | 0;
      } else {
        if (!is_true_pos && is_pred_pos) {
          fp.val = fp.val + 1 | 0;
        } else {
          if (is_true_pos && !is_pred_pos) {
            fn_count.val = fn_count.val + 1 | 0;
          }
        }
      }
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP38username17moon__metric__lab4core17safe__div_2einner(tp.val + 0, ((tp.val + fp.val | 0) + fn_count.val | 0) + 0, false);
}
function _M0FP38username17moon__metric__lab14classification18brier__score__loss(y_true, y_prob) {
  const _bind$9 = _M0FP38username17moon__metric__lab4core22validate__same__lengthGidE(y_true, y_prob);
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab4core28validate__non__empty_2einnerGiE(y_true, "Array must not be empty");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab4core23validate__probabilities(y_prob);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const sum_sq = new _M0TPB8MutLocalGdE(0);
  const _bind$12 = 0;
  const _bind$13 = y_true.length;
  let _tmp$7 = _bind$12;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$13) {
      const diff = _M0MPC15array5Array2atGdE(y_prob, i) - (_M0MPC15array5Array2atGiE(y_true, i) + 0);
      sum_sq.val = sum_sq.val + diff * diff;
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGdRP38username17moon__metric__lab4core11MetricErrorE2Ok(sum_sq.val / (y_true.length + 0));
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__0() {
  const y_true = [0, 0, 1, 1];
  const y_prob = [0.1, 0.4, 0.35, 0.8];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification18roc__curve_2einner(y_true, y_prob, 1);
  let roc;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    roc = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB15inspect_2einner({ self: roc.auc, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.75", "classification/threshold_test.mbt:6:3-6:35@username/moon_metric_lab", ["classification/threshold_test.mbt:6:11-6:18@username/moon_metric_lab", "classification/threshold_test.mbt:6:28-6:34@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug14debug__inspect({ self: roc.thresholds, method_table: _M0FP093moonbitlang_2fcore_2fbuiltin_2fArray_5bDouble_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug }, "[1.000000000000001, 0.8, 0.4, 0.35, 0.1, 0]", "classification/threshold_test.mbt:7:3-7:87@username/moon_metric_lab", ["classification/threshold_test.mbt:7:17-7:31@username/moon_metric_lab", "classification/threshold_test.mbt:7:41-7:86@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__1() {
  const y_true = [0, 1, 1, 0];
  const y_prob = [0.2, 0.6, 0.7, 0.3];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification32precision__recall__curve_2einner(y_true, y_prob, 1);
  let pr;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    pr = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug14debug__inspect({ self: pr.precision_curve, method_table: _M0FP093moonbitlang_2fcore_2fbuiltin_2fArray_5bDouble_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug }, "[1, 1, 0.6666666666666666, 0.5]", "classification/threshold_test.mbt:15:3-15:79@username/moon_metric_lab", ["classification/threshold_test.mbt:15:17-15:35@username/moon_metric_lab", "classification/threshold_test.mbt:15:45-15:78@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug14debug__inspect({ self: pr.recall_curve, method_table: _M0FP093moonbitlang_2fcore_2fbuiltin_2fArray_5bDouble_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug }, "[0.5, 1, 1, 1]", "classification/threshold_test.mbt:16:3-16:59@username/moon_metric_lab", ["classification/threshold_test.mbt:16:17-16:32@username/moon_metric_lab", "classification/threshold_test.mbt:16:42-16:58@username/moon_metric_lab", undefined, undefined]);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPB15inspect_2einner({ self: pr.auc, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.5", "classification/threshold_test.mbt:17:3-17:33@username/moon_metric_lab", ["classification/threshold_test.mbt:17:11-17:17@username/moon_metric_lab", "classification/threshold_test.mbt:17:27-17:32@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test49____test__7468726573686f6c645f746573742e6d6274__2() {
  const y_true = [0, 0, 1, 1, 1];
  const y_prob = [0.1, 0.2, 0.6, 0.8, 0.9];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification32find__optimal__threshold_2einner(y_true, y_prob, "f1", 1);
  let t_f1;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    t_f1 = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB15inspect_2einner({ self: t_f1 >= 0.2 && t_f1 <= 0.6, method_table: _M0FP050Bool_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "true", "classification/threshold_test.mbt:25:3-25:54@username/moon_metric_lab", ["classification/threshold_test.mbt:25:11-25:37@username/moon_metric_lab", "classification/threshold_test.mbt:25:47-25:53@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab14classification32find__optimal__threshold_2einner(y_true, y_prob, "youden", 1);
  let t_youden;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    t_youden = _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPB15inspect_2einner({ self: t_youden >= 0.2 && t_youden <= 0.6, method_table: _M0FP050Bool_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "true", "classification/threshold_test.mbt:32:3-32:62@username/moon_metric_lab", ["classification/threshold_test.mbt:32:11-32:45@username/moon_metric_lab", "classification/threshold_test.mbt:32:55-32:61@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__0() {
  const y_true = [0, 1, 2, 0, 1, 2];
  const y_pred = [0, 2, 1, 0, 0, 1];
  const _bind$9 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17from__predictions(y_true, y_pred);
  let cm;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    cm = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug14debug__inspect({ self: _M0MP38username17moon__metric__lab14classification15ConfusionMatrix7classes(cm), method_table: _M0FP090moonbitlang_2fcore_2fbuiltin_2fArray_5bInt_5d_24as_24_40moonbitlang_2fcore_2fdebug_2eDebug }, "[0, 1, 2]", "classification/confusion_matrix_test.mbt:6:3-6:51@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:6:17-6:29@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:6:39-6:50@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  let fn_count;
  let tp;
  let fp;
  let tn;
  _L: {
    const _bind$11 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix19get__tp__fp__fn__tn(cm, 0);
    let _bind$12;
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      _bind$12 = _ok._0;
    } else {
      return _bind$11;
    }
    const _tp = _bind$12._0;
    const _fp = _bind$12._1;
    const _fn_count = _bind$12._2;
    const _tn = _bind$12._3;
    fn_count = _fn_count;
    tp = _tp;
    fp = _fp;
    tn = _tn;
    break _L;
  }
  const _bind$11 = _M0FPB15inspect_2einner({ self: tp, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "2", "classification/confusion_matrix_test.mbt:8:3-8:27@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:8:11-8:13@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:8:23-8:26@username/moon_metric_lab", undefined, undefined]);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPB15inspect_2einner({ self: fp, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/confusion_matrix_test.mbt:9:3-9:27@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:9:11-9:13@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:9:23-9:26@username/moon_metric_lab", undefined, undefined]);
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPB15inspect_2einner({ self: fn_count, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0", "classification/confusion_matrix_test.mbt:10:3-10:33@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:10:11-10:19@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:10:29-10:32@username/moon_metric_lab", undefined, undefined]);
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  return _M0FPB15inspect_2einner({ self: tn, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "3", "classification/confusion_matrix_test.mbt:11:3-11:27@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:11:11-11:13@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:11:23-11:26@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__1() {
  const y_true = [0, 0, 1, 1];
  const y_pred = [0, 1, 0, 1];
  const _bind$9 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17from__predictions(y_true, y_pred);
  let cm;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    cm = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix18normalized_2einner(cm, "true");
  let norm_true;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    norm_true = _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0MP38username17moon__metric__lab4core6Matrix3getGdE(norm_true, 0, 0);
  let _tmp$7;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _tmp$7 = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPB15inspect_2einner({ self: _tmp$7, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.5", "classification/confusion_matrix_test.mbt:20:3-20:46@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:20:11-20:30@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:20:40-20:45@username/moon_metric_lab", undefined, undefined]);
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0MP38username17moon__metric__lab4core6Matrix3getGdE(norm_true, 0, 1);
  let _tmp$8;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$8 = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPB15inspect_2einner({ self: _tmp$8, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.5", "classification/confusion_matrix_test.mbt:21:3-21:46@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:21:11-21:30@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:21:40-21:45@username/moon_metric_lab", undefined, undefined]);
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix18normalized_2einner(cm, "all");
  let norm_all;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    norm_all = _ok._0;
  } else {
    return _bind$15;
  }
  const _bind$16 = _M0MP38username17moon__metric__lab4core6Matrix3getGdE(norm_all, 0, 0);
  let _tmp$9;
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _tmp$9 = _ok._0;
  } else {
    return _bind$16;
  }
  return _M0FPB15inspect_2einner({ self: _tmp$9, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.25", "classification/confusion_matrix_test.mbt:23:3-23:46@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:23:11-23:29@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:23:39-23:45@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test63____test__636f6e667573696f6e5f6d61747269785f746573742e6d6274__2() {
  const y_true = [0, 1];
  const y_pred = [0, 1];
  const _bind$9 = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17from__predictions(y_true, y_pred);
  let cm;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    cm = _ok._0;
  } else {
    return _bind$9;
  }
  const table = _M0MP38username17moon__metric__lab14classification15ConfusionMatrix17to__table__string(cm);
  const _bind$10 = "Confusion Matrix (True \\ Pred)";
  return _M0FPB15inspect_2einner({ self: _M0MPC16string6String8contains(table, new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length)), method_table: _M0FP050Bool_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "true", "classification/confusion_matrix_test.mbt:32:3-35:4@username/moon_metric_lab", ["classification/confusion_matrix_test.mbt:33:5-33:54@username/moon_metric_lab", "classification/confusion_matrix_test.mbt:34:13-34:19@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__0() {
  const y_true = [1, 0, 1, 1, 0, 1];
  const y_pred = [1, 0, 1, 0, 0, 1];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification8accuracy(y_true, y_pred);
  let _tmp$7;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _tmp$7 = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB15inspect_2einner({ self: _tmp$7, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.8333333333333334", "classification/classification_test.mbt:5:3-5:66@username/moon_metric_lab", ["classification/classification_test.mbt:5:11-5:35@username/moon_metric_lab", "classification/classification_test.mbt:5:45-5:65@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab14classification17precision_2einner(y_true, y_pred, 1);
  let _tmp$8;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _tmp$8 = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPB15inspect_2einner({ self: _tmp$8, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:6:3-6:63@username/moon_metric_lab", ["classification/classification_test.mbt:6:11-6:49@username/moon_metric_lab", "classification/classification_test.mbt:6:59-6:62@username/moon_metric_lab", undefined, undefined]);
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FP38username17moon__metric__lab14classification14recall_2einner(y_true, y_pred, 1);
  let _tmp$9;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$9 = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPB15inspect_2einner({ self: _tmp$9, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.75", "classification/classification_test.mbt:7:3-7:63@username/moon_metric_lab", ["classification/classification_test.mbt:7:11-7:46@username/moon_metric_lab", "classification/classification_test.mbt:7:56-7:62@username/moon_metric_lab", undefined, undefined]);
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FP38username17moon__metric__lab14classification17f1__score_2einner(y_true, y_pred, 1);
  let _tmp$10;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _tmp$10 = _ok._0;
  } else {
    return _bind$15;
  }
  return _M0FPB15inspect_2einner({ self: _tmp$10, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.8571428571428571", "classification/classification_test.mbt:8:3-8:79@username/moon_metric_lab", ["classification/classification_test.mbt:8:11-8:48@username/moon_metric_lab", "classification/classification_test.mbt:8:58-8:78@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__1() {
  const y_true = [1, 0, 1, 0];
  const y_prob = [0.9, 0.1, 0.8, 0.2];
  const y_pred = [1, 0, 1, 0];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification9log__loss(y_true, y_prob);
  let ll;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    ll = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB15inspect_2einner({ self: ll, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.164252033486018", "classification/classification_test.mbt:17:3-17:43@username/moon_metric_lab", ["classification/classification_test.mbt:17:11-17:13@username/moon_metric_lab", "classification/classification_test.mbt:17:23-17:42@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab14classification11mcc_2einner(y_true, y_pred, 1);
  let m;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    m = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPB15inspect_2einner({ self: m, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:19:3-19:26@username/moon_metric_lab", ["classification/classification_test.mbt:19:11-19:12@username/moon_metric_lab", "classification/classification_test.mbt:19:22-19:25@username/moon_metric_lab", undefined, undefined]);
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FP38username17moon__metric__lab14classification26balanced__accuracy_2einner(y_true, y_pred, 1);
  let _tmp$7;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$7 = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPB15inspect_2einner({ self: _tmp$7, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:20:3-20:71@username/moon_metric_lab", ["classification/classification_test.mbt:20:11-20:57@username/moon_metric_lab", "classification/classification_test.mbt:20:67-20:70@username/moon_metric_lab", undefined, undefined]);
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FP38username17moon__metric__lab14classification22jaccard__score_2einner(y_true, y_pred, 1);
  let _tmp$8;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _tmp$8 = _ok._0;
  } else {
    return _bind$15;
  }
  const _bind$16 = _M0FPB15inspect_2einner({ self: _tmp$8, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:21:3-21:67@username/moon_metric_lab", ["classification/classification_test.mbt:21:11-21:53@username/moon_metric_lab", "classification/classification_test.mbt:21:63-21:66@username/moon_metric_lab", undefined, undefined]);
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _bind$17 = _M0FP38username17moon__metric__lab14classification18brier__score__loss(y_true, y_prob);
  let _tmp$9;
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _tmp$9 = _ok._0;
  } else {
    return _bind$17;
  }
  return _M0FPB15inspect_2einner({ self: _tmp$9, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.024999999999999994", "classification/classification_test.mbt:22:3-24:5@username/moon_metric_lab", ["classification/classification_test.mbt:22:11-22:43@username/moon_metric_lab", "classification/classification_test.mbt:23:5-23:27@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__2() {
  const y_true = [0, 1, 2, 0, 1, 2];
  const y_pred = [0, 2, 1, 0, 0, 1];
  const _bind$9 = _M0FP38username17moon__metric__lab14classification29multiclass__precision_2einner(y_true, y_pred, 0);
  let p_macro;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    p_macro = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB15inspect_2einner({ self: p_macro, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.2222222222222222", "classification/classification_test.mbt:32:3-32:49@username/moon_metric_lab", ["classification/classification_test.mbt:32:11-32:18@username/moon_metric_lab", "classification/classification_test.mbt:32:28-32:48@username/moon_metric_lab", undefined, undefined]);
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FP38username17moon__metric__lab14classification26multiclass__recall_2einner(y_true, y_pred, 1);
  let r_micro;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    r_micro = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPB15inspect_2einner({ self: r_micro, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.3333333333333333", "classification/classification_test.mbt:34:3-34:49@username/moon_metric_lab", ["classification/classification_test.mbt:34:11-34:18@username/moon_metric_lab", "classification/classification_test.mbt:34:28-34:48@username/moon_metric_lab", undefined, undefined]);
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FP38username17moon__metric__lab14classification29multiclass__f1__score_2einner(y_true, y_pred, 0);
  let f_macro;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    f_macro = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPB15inspect_2einner({ self: f_macro, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.26666666666666666", "classification/classification_test.mbt:36:3-36:50@username/moon_metric_lab", ["classification/classification_test.mbt:36:11-36:18@username/moon_metric_lab", "classification/classification_test.mbt:36:28-36:49@username/moon_metric_lab", undefined, undefined]);
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0FP38username17moon__metric__lab14classification29multiclass__f1__score_2einner(y_true, y_pred, 2);
  let f_weighted;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    f_weighted = _ok._0;
  } else {
    return _bind$15;
  }
  return _M0FPB15inspect_2einner({ self: f_weighted, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.26666666666666666", "classification/classification_test.mbt:38:3-38:53@username/moon_metric_lab", ["classification/classification_test.mbt:38:11-38:21@username/moon_metric_lab", "classification/classification_test.mbt:38:31-38:52@username/moon_metric_lab", undefined, undefined]);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test59____test__636c617373696669636174696f6e5f746573742e6d6274__3() {
  const y_true = [0, 1];
  const _bind$9 = _M0MP38username17moon__metric__lab4core6Matrix15from__2d__arrayGdE([[0.8, 0.1, 0.1], [0.2, 0.7, 0.1]]);
  let y_prob;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    y_prob = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FP38username17moon__metric__lab14classification24top__k__accuracy_2einner(y_true, y_prob, 1);
  let _tmp$7;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _tmp$7 = _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPB15inspect_2einner({ self: _tmp$7, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:48:3-48:60@username/moon_metric_lab", ["classification/classification_test.mbt:48:11-48:46@username/moon_metric_lab", "classification/classification_test.mbt:48:56-48:59@username/moon_metric_lab", undefined, undefined]);
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FP38username17moon__metric__lab14classification24top__k__accuracy_2einner(y_true, y_prob, 2);
  let _tmp$8;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _tmp$8 = _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPB15inspect_2einner({ self: _tmp$8, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "1", "classification/classification_test.mbt:49:3-49:60@username/moon_metric_lab", ["classification/classification_test.mbt:49:11-49:46@username/moon_metric_lab", "classification/classification_test.mbt:49:56-49:59@username/moon_metric_lab", undefined, undefined]);
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FP38username17moon__metric__lab14classification21multiclass__log__loss(y_true, y_prob);
  let ll;
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    ll = _ok._0;
  } else {
    return _bind$14;
  }
  return _M0FPB15inspect_2einner({ self: ll, method_table: _M0FP052Double_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow }, "0.2899092476264711", "classification/classification_test.mbt:51:3-53:5@username/moon_metric_lab", ["classification/classification_test.mbt:51:11-51:13@username/moon_metric_lab", "classification/classification_test.mbt:52:5-52:25@username/moon_metric_lab", undefined, undefined]);
}
function _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP38username17moon__metric__lab30classification__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP38username17moon__metric__lab30classification__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
    let _try_err;
    _L: {
      const _bind$9 = f();
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _ok._0;
      } else {
        const _err = _bind$9;
        _try_err = _err._0;
        break _L;
      }
      on_ok();
      return;
    }
    const err = _try_err;
    on_err(err);
  }, (err_str) => {
    on_err(new _M0DTPC15error5Error131username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP38username17moon__metric__lab30classification__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$9 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP38username17moon__metric__lab30classification__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$9 === undefined) {
      return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$9;
      const _index_map = _Some;
      index_map = _index_map;
      break _L;
    }
  }
  let f;
  let attrs;
  _L$2: {
    const _bind$9 = _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(index_map, index);
    if (_bind$9 === undefined) {
      return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$9;
      const _x = _Some;
      const _f = _x._0;
      const _attrs = _x._1;
      f = _f;
      attrs = _attrs;
      break _L$2;
    }
  }
  let name;
  if (attrs.length >= 1) {
    const _name = attrs[0];
    name = _name;
  } else {
    name = "";
  }
  handle_start();
  _M0FP38username17moon__metric__lab30classification__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP38username17moon__metric__lab30classification__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP38username17moon__metric__lab30classification__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
  const handle_start = () => {
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"start\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const handle_result = (_testname, message, skipped) => {
    if (!skipped && false) {
    }
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    const message$2 = _M0MPC16string6String14escape_2einner(message, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(45);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"result\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"message\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, message$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const error_to_string = (err) => {
    let e;
    _L: {
      switch (err.$tag) {
        case 0: {
          const _Failure = err;
          const _e = _Failure._0;
          return _e;
        }
        case 1: {
          const _InspectError = err;
          const _e$2 = _InspectError._0;
          return _e$2;
        }
        case 10: {
          const _SnapshotError = err;
          const _e$3 = _SnapshotError._0;
          return _e$3;
        }
        case 9: {
          const _MoonBitTestDriverInternalJsError = err;
          const _e$4 = _MoonBitTestDriverInternalJsError._0;
          return _e$4;
        }
        default: {
          e = err;
          break _L;
        }
      }
    }
    return _M0FP15Error10to__string(e);
  };
  let _try_err;
  _L: {
    let _tmp$7;
    const _bind$9 = _M0IP38username17moon__metric__lab30classification__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
    let _tmp$8;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      _tmp$8 = _ok._0;
    } else {
      const _err = _bind$9;
      _try_err = _err._0;
      break _L;
    }
    if (_tmp$8) {
      _tmp$7 = true;
    } else {
      let _tmp$9;
      const _bind$10 = _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
      let _tmp$10;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _tmp$10 = _ok._0;
      } else {
        const _err = _bind$10;
        _try_err = _err._0;
        break _L;
      }
      if (_tmp$10) {
        _tmp$9 = true;
      } else {
        let _tmp$11;
        const _bind$11 = _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
        let _tmp$12;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _tmp$12 = _ok._0;
        } else {
          const _err = _bind$11;
          _try_err = _err._0;
          break _L;
        }
        if (_tmp$12) {
          _tmp$11 = true;
        } else {
          let _tmp$13;
          const _bind$12 = _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
          let _tmp$14;
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _tmp$14 = _ok._0;
          } else {
            const _err = _bind$12;
            _try_err = _err._0;
            break _L;
          }
          if (_tmp$14) {
            _tmp$13 = true;
          } else {
            const _bind$13 = _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test21MoonBit__Test__Driver9run__testGRP38username17moon__metric__lab30classification__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
            let _tmp$15;
            if (_bind$13.$tag === 1) {
              const _ok = _bind$13;
              _tmp$15 = _ok._0;
            } else {
              const _err = _bind$13;
              _try_err = _err._0;
              break _L;
            }
            _tmp$13 = _tmp$15;
          }
          _tmp$11 = _tmp$13;
        }
        _tmp$9 = _tmp$11;
      }
      _tmp$7 = _tmp$9;
    }
    if (!_tmp$7) {
      _try_err = new _M0DTPC15error5Error133username_2fmoon__metric__lab_2fclassification__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
      break _L;
    } else {
      return;
    }
  }
  const err = _try_err;
  let name;
  _L$2: {
    const _MoonBitTestDriverInternalSkipTest = err;
    const _name = _MoonBitTestDriverInternalSkipTest._0;
    name = _name;
    break _L$2;
  }
  handle_result(name, "skipped test", true);
}
function _M0FP38username17moon__metric__lab30classification__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$9 = 0;
  const _bind$10 = tests.length;
  let _tmp$7 = _bind$9;
  while (true) {
    const i = _tmp$7;
    if (i < _bind$10) {
      const entry = _M0MPC15array5Array2atGRP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntryE(tests, i);
      _M0FP38username17moon__metric__lab30classification__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP38username17moon__metric__lab30classification__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp$7 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP38username17moon__metric__lab30classification__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP38username17moon__metric__lab30classification__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP38username17moon__metric__lab30classification__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP38username17moon__metric__lab30classification__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP38username17moon__metric__lab30classification__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP38username17moon__metric__lab30classification__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP38username17moon__metric__lab30classification__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=classification.blackbox_test.js.map
