title: Configuration
---

Wedgetail exports one function `timeExecution`, and that function takes one argument -- an object defined below.

`timeExecution` retuns a `Promise` and can be awaited.

### options

Setting | Description
--- | ---
`expectedTimings` | A `timings` object defined below. The results are compared to these timings.
`numberOfExecutions` | An integer of the nuber of times to execute the callback.
`callback` | The function being time.
`callbackArgs` | (Optional) An array of arguments to provide to the callback.

### timings

Setting | Description
--- | ---
`average` | `Number`
`high` | `Number`
`percentiles` | A `percentiles` object defined below.

### percentiles

Setting | Description
--- | ---
`ninetieth` | `Number`
`ninetyFifth` | `Number`
`ninetyNinth` | `Number`
`tenth` | `Number`
