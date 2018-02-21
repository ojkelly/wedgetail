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
const ava_1 = require("ava");
const index_1 = require("../src/index");
ava_1.default("Can time a function", (t) => __awaiter(this, void 0, void 0, function* () {
    const allowedPerformance = {
        average: 0.5,
        high: 1,
        low: 0.01,
        percentiles: {
            ninetieth: 0.5,
            ninetyFifth: 0.5,
            ninetyNinth: 0.5,
            tenth: 0.5,
        },
    };
    const timings = yield index_1.timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        callback: () => {
            Math.sqrt(Math.random());
        },
    });
    t.true(timings.results.passed, "timings failed");
}));
//# sourceMappingURL=index.spec.js.map