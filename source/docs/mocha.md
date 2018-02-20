title: Wedgetail with Mocha
---

``` javascript
import { it } from "mocha";
import { timeExecution } from "wedgetail";

it("Test function performance", async () => {
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

    const timingPromise = timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        callback: () => {
            // Your function goes here
            Math.sqrt(Math.random());
        },
    });


    return timingPromise.then(function(timing){
        expect(timings.results.passed).to.be(true);
    });
});
```