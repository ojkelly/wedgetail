import { performance } from "perf_hooks";

import * as percentile from "percentile";

type TimeExecutionCallback = (...callbackArgs) => any;
type TimeExecutionOptions = {
    expectedTimings: Timings;
    numberOfExecutions: number;
    callback: TimeExecutionCallback;
    callbackArgs?: any[];
};
type Timings = {
    high: number;
    low: number;
    average: number;
    percentiles: {
        ninetyNinth: number;
        ninetyFifth: number;
        ninetieth: number;
        tenth: number;
    };
};
type TimedPerformance = {
    timings: Timings;
    results: {
        passed: boolean;
        high: boolean;
        low: boolean;
        average: boolean;
        percentiles: {
            ninetyNinth: boolean;
            ninetyFifth: boolean;
            ninetieth: boolean;
            tenth: boolean;
        };
    };
};

type ComparePerformanceOutcome = {
    passed: boolean;
    high: boolean;
    low: boolean;
    average: boolean;
    percentiles: {
        ninetyNinth: boolean;
        ninetyFifth: boolean;
        ninetieth: boolean;
        tenth: boolean;
    };
};

async function timeExecution(
    this: any,
    {
        expectedTimings,
        numberOfExecutions,
        callback,
        callbackArgs,
    }: TimeExecutionOptions,
): Promise<TimedPerformance> {
    // Execute the function
    const executions: any[] = await Array(numberOfExecutions)
        .fill("0")
        .map(() => {
            const startTimeMs: number = performance.now();

            callback.apply(this, callbackArgs);

            const endTimeMs: number = performance.now();
            const elapsed: number = endTimeMs - startTimeMs;
            return endTimeMs - startTimeMs;
        });

    const high: number = Math.max.apply(Math, executions);
    const low: number = Math.min.apply(Math, executions);

    // Calc average
    const sum: number = executions.reduce(
        (acc: number, current: number) => acc + current,
    );
    const average: number = sum / numberOfExecutions;
    const timings: any = {
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
    const results: any = comparePerformance({
        expected: expectedTimings,
        results: timings,
    });

    return {
        timings,
        results,
    };
}

function comparePerformance({
    expected,
    results,
}: {
    expected: Timings;
    results: Timings;
}): ComparePerformanceOutcome {
    let outcome: ComparePerformanceOutcome = {
        passed: false,
        high: expected.high > results.high,
        low: expected.low > results.low,
        average: expected.average > results.average,
        percentiles: {
            ninetyNinth:
                expected.percentiles.ninetyNinth >
                results.percentiles.ninetyNinth,
            ninetyFifth:
                expected.percentiles.ninetyFifth >
                results.percentiles.ninetyFifth,
            ninetieth:
                expected.percentiles.ninetieth > results.percentiles.ninetieth,
            tenth: expected.percentiles.tenth > results.percentiles.tenth,
        },
    };
    if (
        outcome.high &&
        outcome.low &&
        outcome.average &&
        outcome.percentiles.ninetyNinth &&
        outcome.percentiles.ninetyFifth &&
        outcome.percentiles.ninetieth &&
        outcome.percentiles.tenth
    ) {
        outcome.passed = true;
    }
    return outcome;
}

export {
    timeExecution,
    TimeExecutionOptions,
    Timings,
    TimeExecutionCallback,
    TimedPerformance,
    comparePerformance,
    ComparePerformanceOutcome,
};
