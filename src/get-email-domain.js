const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('').reverse().join('');
  let index = email.indexOf('@')
  return email.slice(0, index).split('').reverse().join('')
}

module.exports = {
  getEmailDomain
};
