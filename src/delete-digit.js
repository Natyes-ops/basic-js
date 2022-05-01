const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let thisNum = [],
    max = 0,
    min = 0;
  for (let i = 0; i < n.toString().length; i++) {
    thisNum.push(n.toString().split(''));
    thisNum[i].splice(i, 1);
  }
  thisNum.map((item) => {
    min = +(item.join(''));
    if (min > max) {max = min}
  })
  return max
}
module.exports = {
  deleteDigit
};
