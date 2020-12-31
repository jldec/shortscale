# shortscale
[![CI](https://github.com/jldec/shortscale/workflows/CI/badge.svg)](https://github.com/jldec/shortscale/actions)

Converts numbers into English words using the [short scale](https://en.wikipedia.org/wiki/Long_and_short_scales#Comparison).

Supports positive integers from 0 to Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).

E.g. `shortscale(420000999015)` returns  
`"four hundred and twenty billion nine hundred and ninety nine thousand and fifteen"`

For Rust version see [jldec/shortscale-rs](https://github.com/jldec/shortscale-rs).