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
  let arr = [];
  let additionArr = [];
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
    let addition = typeof options.addition == 'boolean' || options.addition === null || options.addition ? String(options.addition) : '';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition)
  }
  for (let i = 0; i < repeatTimes; i++) {
      arr.push(String(str) + additionArr.join(additionSeparator))
  }
  return arr.join(separator)
}

module.exports = {
  repeater
};
