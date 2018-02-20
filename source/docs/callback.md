title: Callback Scope
---

Getting the scope right for your callback function may be tricky depending on what
your function does. Below are a few exmaples of how to wrap your function.

## Pure function

In this example our function `pureFunction` does not call `this` and doesn't interact with any external functions. We can pass the function without calling it
as the `callback` value, and pass an array of arguments to `callbackArgs`.

``` javascript

import test from "ava";

import { timeExecution } from "wedgetail";

function pureFunction(x, y){
  return x * y * x * y;
}

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

    const config = new ConfigClass({
      config: {
        key: 'value',
      }
    });

    const timings = await timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,
        callback: pureFunction,
        callbackArgs: [
          1,
          2,
          3,
          4
        ]
    });

    t.true(timings.results.passed, "timings failed");
});
```

## Function that needs `this` scope

In this example, the method `ConfigClass#getConfig` calls `this.config`. We can use a closure on the callback to ensure the scope of `this` stays with the `config`.

``` javascript

import test from "ava";

import { timeExecution } from "wedgetail";

class ConfigClass {
  constructor(options) {
    this.config = options.config;
  }

  getConfig(){
    return this.config;
  }
}

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

    const config = new ConfigClass({
      config: {
        key: 'value',
      }
    });

    const timings = await timeExecution({
        expectedTimings: allowedPerformance,
        numberOfExecutions: 5000,

        callback: () => {
            // Your function goes here
            config.getConfig();
        },
    });

    t.true(timings.results.passed, "timings failed");
});
```