import test from "ava";

import {
    timeExecution,
    TimeExecutionOptions,
    Timings,
    TimedPerformance,
} from "../src/index";

test("Can time a function", async t => {
    const allowedPerformance: Timings = {
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
    const timings: TimedPerformance = await timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        callback: () => {
            Math.sqrt(Math.random());
        },
    });
    t.true(timings.results.passed, "timings failed");
});
