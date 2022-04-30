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
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = Array.from(arr);
  let sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for (let i = 0; i < newArr.length; i++) {
    if (sequences.includes(newArr[i])) {
      newArr = updateArray(newArr, i, newArr[i]);
    }
  }
  return newArr.filter(el => el);

  function updateArray(arr, i, option) {
    delete arr[i]
    if (i >= 0 && i < arr.length) {
      if (option == sequences[0]) {
        delete arr[i + 1];
      }
      if (option == sequences[1]) {
        delete arr[i - 1];
      }
      if (option == sequences[2]) {
        arr[i] = arr[i + 1];
      }
      if (option == sequences[3]) {
        arr[i] = arr[i - 1];
      }
    }
    return arr
  }
}

module.exports = {
  transform
};
