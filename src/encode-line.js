const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let obj = {};
  let newStr = '';
  let i = 0;
  while (i < str.length) {
      let char = str[i];
      let count = 1;
      i++;
      while (str[i] == char) {
          count++;
          i++;
      }
      newStr += count > 1 ? count+char : char
  }
  return newStr 
}

module.exports = {
  encodeLine
};
