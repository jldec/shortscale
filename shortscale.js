/*
 * shortscale
 * English conversion from number to string
 *
 * E.g. shortscale(420,000,999,015) =
 *   four hundred and twenty billion
 *   nine hundred and ninety nine thousand and fifteen
 *
 * Supports positive integers from 0 to Number.MAX_SAFE_INTEGER
 * i.e. 0 to 9,007,199,254,740,991
 *
 * Larger values return "(big number)".
 *
 * see https://en.wikipedia.org/wiki/Long_and_short_scales
*/

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

export default shortscale;

/**
 * Return a string of English words for a number.
 *
 * Supports positive integers from 0 to Number.MAX_SAFE_INTEGER
 * i.e. 0 to 9,007,199,254,740,991

 * @param {number} num
 * @returns {string}
 */
export function shortscale(num) {
  if (num === 0) return 'zero';
  if (num > Number.MAX_SAFE_INTEGER) return '(big number)';

  return concat([
    concat([
      scale(num, 10 ** 15), // quadrillions
      scale(num, 10 ** 12), // trillions
      scale(num, 10 ** 9),  // billions
      scale(num, 10 ** 6),  // millions
      scale(num, 10 ** 3),  // thousands
      hundreds(num)], ' '),
    tensAndUnits(num)], ' and ');
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
