title: Wedgetail with Jest
---

``` javascript
import { timeExecution } from "wedgetail";

test("Can time a function", async t => {

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

    expect(timings.results.passed).toBe(true);
});
```