const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  let count = []//0;
  let newMatrix = []
  for (let i = 0; i < matrix[0].length; i++) {
      let row = []
      for (let j = 0; j < matrix.length; j++) {
          console.log(matrix[j][i])
          row.push(matrix[j][i]);
      }
      newMatrix.push(row)
  }
  return newMatrix // matrix[0].length;
}

module.exports = {
  getMatrixElementsSum
};
