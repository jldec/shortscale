/*
 * shortscale
 * English conversion from number to string
 * Copyright 2021, Jürgen Leschner - github.com/jldec - MIT license
*/

export default shortscale;

/**
 * Returns a string of English words for a number.
 * Supports positive integers from 0 to Number.MAX_SAFE_INTEGER
 * i.e. 0 to 9,007,199,254,740,991
 * All other values return undefined.
 *
 * @param {number} num
 * @returns {string}
 */
export function shortscale(num) {
  let n = Math.trunc(num);
  if (n !== num || n > Number.MAX_SAFE_INTEGER) return undefined;
  if (n === 0) return 'zero';
  if (n <= 20) return numwords[n]; // optimization

  return concat([
    concat([
      scale(n, 10 ** 15), // quadrillions
      scale(n, 10 ** 12), // trillions
      scale(n, 10 ** 9),  // billions
      scale(n, 10 ** 6),  // millions
      scale(n, 10 ** 3),  // thousands
      hundreds(n)], ' '),
    tensAndUnits(n)], ' and ');
};

// one to nintey nine
function tensAndUnits(n) {
  n = n % 100;
  if (n < 20) return numwords[n];

  let tens = Math.trunc(n / 10) * 10;
  let units = n % 10;

  return concat([numwords[tens], numwords[units]], ' ');
}

// one hundred to nine hundred
function hundreds(n) {
  return suffix(numwords[Math.trunc(n / 100) % 10], numwords[100]);
}

// one to nine hundred and ninety nine
function oneTo999(n) {
  return concat([hundreds(n), tensAndUnits(n)], ' and ');
}

// one (?)illion to 999 (?)illion where thousands = 1000, 1000000 ...
function scale(n, thousands) {
  return suffix(oneTo999(Math.trunc(n / thousands) % 1000),
    numwords[thousands]);
}

// concatenate array of strings, separated by sep, ignoring '' values
function concat(strings, sep) {
  return strings.reduce((s1, s2) => s1 + (s1 && s2 ? sep : '') + s2, '');
}

// append suffixWord to str, only if str
function suffix(str, suffixWord) {
  return str ? str + ' ' + suffixWord : '';
}

const numwords = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion'
};
