# Example with shortscale v1.x - CommonJS
Shortscale v1.x was implemented using CommonJS `module.exports`.

To run this example:

```
$ npm install
```

```
$ node example
four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
```

## example.js

```js
const shortscale = require('shortscale');

// four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
console.log(shortscale(420000999015));
```