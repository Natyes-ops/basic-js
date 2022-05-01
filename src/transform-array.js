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
  let result = arr.slice(0);
  if (result.length == 0) {
    return arr;
  } 
  result.map((item, i) => {
    if (item === '--discard-next') {
      if (i == result.length - 1) {
        result.splice(i,1)
      } else {
        result.splice(i,2)
      }
    } else if (item === '--discard-prev') {
      if (i == 0) {
        result.splice(i,1)
      } else {
        result.splice(--i,2)
      }
    } else if (item === '--double-next') {
      if (i == result.length - 1) {
        result.splice(i, 1)
      } else {
        result.splice(i, 1,result[++i])
      }
    } else if (item === '--double-prev') {
      if (i == 0) {
        result.splice(i, 1)
      } else {
        result.splice(i, 1,result[--i])
      }
    } 
  })
  return result
}
module.exports = {
  transform
};
