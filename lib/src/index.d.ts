declare type TimeExecutionCallback = (...callbackArgs) => any;
declare type TimeExecutionOptions = {
    expectedTimings: Timings;
    numberOfExecutions: number;
    callback: TimeExecutionCallback;
    callbackArgs?: any[];
};
declare type Timings = {
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
declare type TimedPerformance = {
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
declare type ComparePerformanceOutcome = {
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
declare function timeExecution(this: any, {expectedTimings, numberOfExecutions, callback, callbackArgs}: TimeExecutionOptions): Promise<TimedPerformance>;
declare function comparePerformance({expected, results}: {
    expected: Timings;
    results: Timings;
}): ComparePerformanceOutcome;
export { timeExecution, TimeExecutionOptions, Timings, TimeExecutionCallback, TimedPerformance, comparePerformance, ComparePerformanceOutcome };
