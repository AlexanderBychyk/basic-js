const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    let row = []
    for (let j = 0; j < matrix[0].length; j++) {
      let arr = nearCells(i, j);
      if (matrix[i][j] == true) {
        row.push(arr.length-1);
      } else {
        row.push(arr.length);
      }
    }
    newMatrix.push(row);
  }

  return newMatrix;

  function nearCells(currentY, currentX) {
    let cells = []
    
    for (let y = -1; y < 2; y++) {
      for (let x = -1; x < 2; x++) {
        let cellX = x + currentX
        let cellY = y + currentY;
        if (cellY >= 0 && cellY < matrix.length) {
          if (cellX >= 0 && cellX < matrix[0].length) {
            let cell = matrix[cellY][cellX];
            if (cell) cells.push(cell); 
          }
        }
      }
    }
    return cells;
   }
}

module.exports = {
  minesweeper
};
