// Implementa una función que reciba una matriz como parámetro y devuelva la matriz traspuesta.

const readLine = require("readline-sync");

/**
 * Esta función traspuesta una matriz.
 * @param {String[][]} n - Una matriz
 * @returns {String[][]} La matriz traspuesta
 * @throws {Error} Si la matrix no es valida
 */
const transposeMatrix = (matrixString) => {
  try {
    const matrix = JSON.parse(matrixString);
    const matrixHeight = matrix.length;
    const matrixWidth = matrix[0].length;
    let matrixTranspose = [];
    for (let i = 0; i < matrixWidth; i++) {
      matrixTranspose.push([]);
      for (let j = 0; j < matrixHeight; j++) {
        matrixTranspose[i][j] = matrix[j][i];
      }
    }
    return JSON.stringify(matrixTranspose);
  } catch (e) {
    return e.message;
  }
};

const input = readLine.question(
  "Introduce su matriz en el formato [[a,b,c…],[d,e,f…],…]: ",
);
console.log(transposeMatrix(input));
