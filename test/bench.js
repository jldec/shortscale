const shortscale = require('../shortscale.js');

const COUNT = 1000;

// microsecond resolution timer
function hrtimer() {
  let start = process.hrtime.bigint();
  return () => Number((process.hrtime.bigint() - start) / 1000n);
}

console.log(`hrtimer resolution is ~${hrtimer()()} microseconds`);

function bench(count) {
  let bytes = 0;
  let time = hrtimer();
  while (count--) {
    bytes += shortscale(Number.MAX_SAFE_INTEGER).length;
  }
  console.log(`${COUNT} calls, ${bytes} bytes, ${time()} microseconds`);
}

bench(COUNT);
