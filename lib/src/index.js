"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const percentile = require("percentile");
function timeExecution({ expectedTimings, numberOfExecutions, callback, callbackArgs, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const executions = yield Array(numberOfExecutions)
            .fill("0")
            .map(() => {
            const startTimeMs = perf_hooks_1.performance.now();
            callback.apply(this, callbackArgs);
            const endTimeMs = perf_hooks_1.performance.now();
            const elapsed = endTimeMs - startTimeMs;
            return endTimeMs - startTimeMs;
        });
        const high = Math.max.apply(Math, executions);
        const low = Math.min.apply(Math, executions);
        const sum = executions.reduce((acc, current) => acc + current);
        const average = sum / numberOfExecutions;
        const timings = {
            high,
            low,
            average,
            percentiles: {
                ninetyNinth: percentile(99, executions),
                ninetyFifth: percentile(95, executions),
                ninetieth: percentile(90, executions),
                tenth: percentile(10, executions),
            },
        };
        const results = comparePerformance({
            expected: expectedTimings,
            results: timings,
        });
        return {
            timings,
            results,
        };
    });
}
exports.timeExecution = timeExecution;
function comparePerformance({ expected, results, }) {
    let outcome = {
        passed: false,
        high: expected.high > results.high,
        low: expected.low > results.low,
        average: expected.average > results.average,
        percentiles: {
            ninetyNinth: expected.percentiles.ninetyNinth >
                results.percentiles.ninetyNinth,
            ninetyFifth: expected.percentiles.ninetyFifth >
                results.percentiles.ninetyFifth,
            ninetieth: expected.percentiles.ninetieth > results.percentiles.ninetieth,
            tenth: expected.percentiles.tenth > results.percentiles.tenth,
        },
    };
    if (outcome.high &&
        outcome.low &&
        outcome.average &&
        outcome.percentiles.ninetyNinth &&
        outcome.percentiles.ninetyFifth &&
        outcome.percentiles.ninetieth &&
        outcome.percentiles.tenth) {
        outcome.passed = true;
    }
    return outcome;
}
exports.comparePerformance = comparePerformance;
//# sourceMappingURL=index.js.map