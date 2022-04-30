const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split('');
  s2 = s2.split('');
  let i = 0;
  while (i < s1.length) {
    let j = 0;
    while (j < s2.length) {
      if (s1[i] == s2[j]) {
        count++;
        delete s2[j];
        break;
      }
      j++
    }
    i++
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
