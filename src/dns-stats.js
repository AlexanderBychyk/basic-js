const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}
  let arr = []
  domains = domains.map(el => el.split('.').reverse())
  domains.forEach(el => {
      for (let i = 0; i < el.length; i++) {
          let j = 0;
          let str = '';
          while (j < i+1) {
              str += '.' + el[j]
              j++;
          }
          arr.push(str)
      }
  })
  arr.forEach(el => {
      if (obj[el] == undefined) {
          obj[el] = 1;
      } else obj[el]++
  })
  return obj;
}

module.exports = {
  getDNSStats
};
