# Example calling shortscale v2.x from CommonJS
This example uses [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_import).

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
// import ESM module using dynamic import
import('shortscale')
  .then(module => {
    let shortscale = module.shortscale;

    // four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
    console.log(shortscale(420000999015));
  })
  .catch(console.error);
```