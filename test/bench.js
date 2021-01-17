import { shortscale } from '../shortscale.js';

const RUNS = 15
const ITERATIONS = 20000;

// nanosecond resolution timer
function hrtimer() {
  let start = process.hrtime.bigint();
  return () => Number((process.hrtime.bigint() - start));
}

function bench(count) {
  let bytes = 0, calls = 0;
  let time = hrtimer();
  while (count--) {
    bytes += shortscale(Number.MAX_SAFE_INTEGER).length;
    calls ++;
  }
  console.log(`${calls} calls, ${bytes} bytes, ` +
    `${Math.trunc(time() / calls)} ns/call`);
}

function run(count) {
  while (count--) {
    bench(ITERATIONS);
  }
}

run(RUNS);
