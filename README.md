# shortscale
[![CI](https://github.com/jldec/shortscale/workflows/CI/badge.svg)](https://github.com/jldec/shortscale/actions)

Converts numbers into English words.

The [short scale](https://en.wikipedia.org/wiki/Long_and_short_scales#Comparison),
has different words for each power of 1000.

Supports positive integers from 0 to Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).  
Larger values return "(big number)".

## Example node.js
```js
import { shortscale } from 'shortscale';

// four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
console.log(shortscale(420000999015));
```

## ESM
This library is packaged as an ESM module.  
For CommonJS packaging please point to version `^1.1.0` in your package.json.

## Rust
For Rust version see [jldec/shortscale-rs](https://github.com/jldec/shortscale-rs).