title: Wedgetail with Jasmine
---

``` javascript
import { describe, it } from "jasmine";
import { timeExecution } from "wedgetail";

describe("A function", function() {
  it("meets perfomance expectations", async () => {

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
});

```