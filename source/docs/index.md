title: Documentation
---
Welcome to the Wedgetail documentation. If you encounter any problems when using Wedgetail, have a look at the  [troubleshooting guide](troubleshooting.html), raise an issue on [GitHub](https://github.com/ojkelly/wedgetail/issues).

## What is Wedgetail?

Wedgetail is a small and simple profiler. It's focus is to provide timing information for a large
number of invocations of the same function. This allows you to derive meaningful statistics of the
performance of that function.

Wedgetail is added to your tests, and can help you ensure you're not adding code that is dramatically
slowing down your app or module.

## Installation

It only takes a few minutes to set up Wedgtail. If you encounter a problem and can't find the solution here, please [submit a GitHub issue](https://github.com/ojkelly/wedgetail/issues) and I'll try to solve it.

### Requirements

NodeJS 9.5.0 and up.

Wedgetail relies on the `performance.now()` implementation from `perf_hooks`. It's designed to test
NodeJS modules. If you want to help add support for browser functions [submit a GitHub issue](https://github.com/ojkelly/wedgetail/issues) or pull request.


### Install Wedgetail

Install `wedgetail` to your `devDependencies`.

``` bash
$ npm install --save-dev wedgetail
```

``` bash
$ yarn add -D wedgetail
```
