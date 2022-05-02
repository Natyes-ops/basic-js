const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 
  let result = arr.slice(0),
      i = 0;
  if (result.length == 0) {
    return arr;
  } 
  while (i < result.length) {
    console.log(result);
    if (result[i] === '--discard-next') {
      if (i == result.length - 1) {
        result.pop();
        i = 0;
      } else {
        result.splice(i,2);
      }
    } else if (result[i] === '--discard-prev') {
      if (i == 0) {
        result.unshift(result[i]);
      } else {
        result.splice(--i,2);
      }
    } else if (result[i] === '--double-next') {
      if (i == result.length - 1) {
        result.push(result[i]);
      } else {
        result.splice(i, 1, result[++i]);
      }
    } else if (result[i] === '--double-prev') {
      if (i == 0) {
        result.unshift(result[i]);
      } else {
        result.splice(i, 1,result[--i]);
      }
    } else {
      i++;
    }
  }
  return result
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
module.exports = {
  transform
};
