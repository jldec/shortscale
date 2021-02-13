import test from 'tape';

import { shortscale } from '../shortscale.js';

const tests = [
  [0, 'zero'],
  [1, 'one'],
  [10, 'ten'],
  [11, 'eleven'],
  [18, 'eighteen'],
  [20, 'twenty'],
  [22, 'twenty two'],
  [30, 'thirty'],
  [33, 'thirty three'],
  [40, 'forty'],
  [111, 'one hundred and eleven'],
  [120, 'one hundred and twenty'],
  [121, 'one hundred and twenty one'],
  [300, 'three hundred'],
  [999, 'nine hundred and ninety nine'],
  [1000, 'one thousand'],
  [2000, 'two thousand'],
  [2004, 'two thousand and four'],
  [2011, 'two thousand and eleven'],
  [2020, 'two thousand and twenty'],
  [2050, 'two thousand and fifty'],
  [2300, 'two thousand three hundred'],
  [2301, 'two thousand three hundred and one'],
  [30020, 'thirty thousand and twenty'],
  [430020, 'four hundred and thirty thousand and twenty'],
  [430920, 'four hundred and thirty thousand nine hundred and twenty'],
  [999001, 'nine hundred and ninety nine thousand and one'],
  [999120, 'nine hundred and ninety nine thousand one hundred and twenty'],
  [1000000, 'one million'],
  [1001000, 'one million one thousand'],
  [1002000, 'one million two thousand'],
  [1002004, 'one million two thousand and four'],
  [1002011, 'one million two thousand and eleven'],
  [1002020, 'one million two thousand and twenty'],
  [1002050, 'one million two thousand and fifty'],
  [1002300, 'one million two thousand three hundred'],
  [1002301, 'one million two thousand three hundred and one'],
  [1030020, 'one million thirty thousand and twenty'],
  [1430020, 'one million four hundred and thirty thousand and twenty'],
  [1430920, 'one million four hundred and thirty thousand nine hundred and twenty'],
  [1999001, 'one million nine hundred and ninety nine thousand and one'],
  [100999120, 'one hundred million nine hundred and ninety nine thousand one hundred and twenty'],
  [999999120, 'nine hundred and ninety nine million nine hundred and ninety nine thousand one hundred and twenty'],
  [420000999015, 'four hundred and twenty billion nine hundred and ninety nine thousand and fifteen'],
  [Number.MAX_SAFE_INTEGER, 'nine quadrillion seven trillion one hundred and ninety nine billion' +
    ' two hundred and fifty four million seven hundred and forty thousand nine hundred and ninety one'],
  [Number.MAX_SAFE_INTEGER + 1, undefined],
  [-1, undefined],
  [3.14159265, undefined],
  [true, undefined],
  [false, undefined],
  ['', undefined],
  ['47', undefined],
  [NaN, undefined]
];

tests.forEach(function ([num, expected]) {
  test(num + ' is ' + expected, function (t) {
    t.equal(shortscale(num), expected);
    t.end();
  });
});
