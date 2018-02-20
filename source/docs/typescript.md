title: Typescript
---

Wedgetail is written in Typescript, and exports a few types to make usage easier.

## With AVA


```typescript
import test from "ava";

import { timeExecution, Timings, TimedPerformance } from "wedgetail";

test("Can time a function", async t => {

    // This object contains a definition of the threshold
    // at which your function is too slow.
    // All timings are in milliseconds(ms)
    const allowedPerformance: Timings = {
        average: 0.001,
        high: 1,
        low: 0.001,
        percentiles: {
            ninetieth: 0.0004,
            ninetyFifth: 0.001,
            ninetyNinth: 0.001,
            tenth: 0.0005,
        },
    };

    const timings: TimedPerformance = await timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        // By using an anonymous arrow function you should
        // be able to maintain the correct scope
        // of `this`.
        callback: () => {
            // Your function goes here
            Math.sqrt(Math.random());
        },
    });

    // You can use any testing or assertion library.
    // if the timings are below your expected values then
    // `timings.results.passed` will be `true`
    t.true(timings.results.passed, "timings failed");
});
```