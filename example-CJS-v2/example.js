// import ESM module using dynamic import
import('shortscale')
  .then(module => {
    let shortscale = module.shortscale;

    // four hundred and twenty billion nine hundred and ninety nine thousand and fifteen
    console.log(shortscale(420000999015));
  })
  .catch(console.error);
