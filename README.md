# shortscale
[![CI](https://github.com/jldec/shortscale/workflows/CI/badge.svg)](https://github.com/jldec/shortscale/actions)

Converts numbers into English words.

The [short scale](https://en.wikipedia.org/wiki/Long_and_short_scales#Comparison),
has different words for each power of 1000.

Supports positive integers from 0 to Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).  
All other values return undefined.

### Example
```js
import { shortscale } from 'shortscale';

console.log(shortscale(420000999015));
// four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
```

### ESM
As of v2.0 , this library is packaged as an [ESM module](https://jldec.me/migrating-from-cjs-to-esm).

To call from CommonJS use dynamic import(), or use require() with version `^1.1.0` in package.json.

See [example-CJS-v1](https://github.com/jldec/shortscale/tree/main/example-CJS-v1), [example-CJS-v2](https://github.com/jldec/shortscale/tree/main/example-CJS-v2), [example-ESM](https://github.com/jldec/shortscale/tree/main/example-ESM).

### Rust
For Rust version see [jldec/shortscale-rs](https://github.com/jldec/shortscale-rs).
