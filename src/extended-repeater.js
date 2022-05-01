const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [String(str)],
    arrLength,
    add = typeof(options.addition) !== 'string' ? options.addition  :  options.addition == null ? '' : String(options.addition),
    addSeparator = typeof(options.additionSeparator) !== 'undefined' ? options.additionSeparator : '|',
    addRepeat = typeof(options.additionRepeatTimes) !== 'undefined' ? options.additionRepeatTimes : 0,
    separator = typeof(options.separator) !== 'undefined' ? options.separator : '+',
    repeat = typeof (options.repeatTimes) !== 'undefined' ? options.repeatTimes : 0;
  if (addRepeat == 0) {
    arr.push(add)
  } else {
    for (let i = 0; i < addRepeat; i++) {
      if (addRepeat - 1 == i) {
        arr.push(add)
      } else {
        arr.push(add,addSeparator)
      }
    }
  }
  
  arrLength = arr.length;
  if (repeat !== 0) {
    for (let i = 0; i < repeat - 1; i++) {
      arr.push(separator,arr.slice(0, arrLength).join(''))
    }
  }
  return arr.join('')
}
module.exports = {
  repeater
};
