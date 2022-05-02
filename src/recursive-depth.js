const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // calculateDepth(arr) {
  //   let count = 1;
  //   while (arr.filter(el => typeof el == 'object').length != 0) {
  //     count++;
  //     arr = arr.flat();
  //   }  
  //   return count
  // }
  calculateDepth(arr) {
    let count = 0;
    if (arr.filter(el => typeof el == 'object').length != 0) {
      count++;
      arr = arr.flat();
    } else {
      return 1
    }
    return count + this.calculateDepth(arr);
  }
}

module.exports = {
  DepthCalculator
};
