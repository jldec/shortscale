const shortscale = require('../shortscale.js');

const COUNT = 100000;

function hrnow() {
  let sns = process.hrtime();
  return (sns[0] * 1e3) + (sns[1] / 1e6);
}

function hrtimer() {
  let start = hrnow();
  return function() {
    let time = hrnow() - start;
    return time;
  };
}

function bench(count) {
  let bytes = 0;
  let time = hrtimer();
  while (count--) {
    bytes += shortscale(Number.MAX_SAFE_INTEGER).length;
  }
  console.log(`${COUNT} calls, ${bytes} bytes, ${time()} ms`);
}

bench(COUNT);
