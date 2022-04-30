const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let arr = n.split('-')
  if (arr.length == 6) {
    arr = arr.join('').split('').filter(el => +el != el).map(el => {
        let code = el.charCodeAt(0);
        if (code > 64 && code < 71) {
            return true;
        } else return false;
    })
    return arr.reduce((pV, cV) => pV == cV)
  }
  return false;
}
module.exports = {
  isMAC48Address
};
