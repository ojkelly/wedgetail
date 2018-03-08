<img src="https://wedgetail.netlify.com/logo.png" height=100 width=100 />

# Wedgetail

_Performance test your functions_

[![View on npm](https://img.shields.io/npm/v/wedgetail.svg)](https://npmjs.org/packages/wedgetail)
[![npm downloads](https://img.shields.io/npm/dm/wedgetail.svg)](https://npmjs.org/packages/wedgetail)
[![Dependencies](https://img.shields.io/david/ojkelly/wedgetail.svg)](https://david-dm.org/ojkelly/wedgetail)
[![Build Status](https://travis-ci.org/ojkelly/wedgetail.svg?branch=master)](https://travis-ci.org/ojkelly/wedgetail)
[![codecov](https://codecov.io/gh/ojkelly/wedgetail/branch/master/graph/badge.svg)](https://codecov.io/gh/ojkelly/wedgetail)
[![NSP Status](https://nodesecurity.io/orgs/ojkelly/projects/7f441bdb-76ab-4155-aec9-00777b5adc9a/badge)](https://nodesecurity.io/orgs/ojkelly/projects/7f441bdb-76ab-4155-aec9-00777b5adc9a)[![Known Vulnerabilities](https://snyk.io/test/npm/wedgetail/badge.svg)](https://snyk.io/test/npm/wedgetail)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fojkelly%2Fwedgetail.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fojkelly%2Fwedgetail?ref=badge_shield)

Wedgetail is a small performance tesing library that runs on NodeJS `9.5.0` and above. It's designed
to be used inside your tests, to ensure your desired function is always as fast as you want it to be.

## Getting Started

Add `wedgetail` to your `devDependencies`.

`yarn add -D wedgetail`

`npm install --save-dev wedgetail`

`Wedgetail` can be easily inserted into your tests. It's reccomended you create a seperate test
just for performance, as you cannot use the result of the function you are testing.

The function you are testing can also be your whole test.

### Usage

To use `wedgetail` you need to call in inside the callback.

```javascript
// javascript
import test from "ava";

import { timeExecution } from "wedgetail";

test("Can time a function", async t => {
    // This object contains a definition of the threshold
    // at which your function is too slow.
    // All timings are in milliseconds(ms)
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

```typescript
// typescript
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

You will need to play around with `numberOfExecutions` to find the right number. If your function is
slow (2ms+) you may want to use a number less than 5000.

## Running the tests

Use `yarn tests` or `npm run tests`.

Tests are written with `ava`, and we would strongly like tests with any new functionality.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ojkelly/wedgetail/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ojkelly/wedgetail/tags).

## Authors

* **Owen Kelly** - [ojkelly](https://github.com/ojkelly)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ojkelly/wedgetail/LICENSE.md) file for details


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fojkelly%2Fwedgetail.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fojkelly%2Fwedgetail?ref=badge_large)