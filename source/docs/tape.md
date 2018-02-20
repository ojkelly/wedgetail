title: Wedgetail with Tape
---

``` javascript
import tape from "tape";
import { timeExecution } from "wedgetail";

test("Can time a function", async t => {
    t.plan(1);

    const allowedPerformance = {
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

    const timings = await timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        callback: () => {
            // Your function goes here
            Math.sqrt(Math.random());
        },
    });

    t.true(timings.results.passed, "timings failed");
});
```