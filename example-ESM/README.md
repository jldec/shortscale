# Example import shortscale (type = module)
This example uses [ESM import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
by setting `"type": "module"` in package.json.

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
import { shortscale } from 'shortscale';

// four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
console.log(shortscale(420000999015));
```