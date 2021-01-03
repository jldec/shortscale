const shortscale = require('../shortscale.js');

const RUNS = 15
const ITERATIONS = 20000;

// microsecond resolution timer
// console.log(`hrtimer resolution is ~${hrtimer()()} microseconds`);
function hrtimer() {
  let start = process.hrtime.bigint();
  return () => Number((process.hrtime.bigint() - start) / 1000n);
}

function bench(count) {
  let bytes = 0, calls = 0;
  let time = hrtimer();
  while (count--) {
    bytes += shortscale(Number.MAX_SAFE_INTEGER).length;
    calls ++;
  }
  console.log(`${calls} calls, ${bytes} bytes, ` +
    `${(time() / calls).toString().slice(0, 5)} us`);
}

function run(count) {
  while (count--) {
    bench(ITERATIONS);
  }
}

run(RUNS);
