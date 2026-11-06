// Implementa una función que reciba un número n por parámetro y devuelva una matriz cuadrada n x n
// con números enteros consecutivos de izquierda a derecha y de arriba a abajo.

const readLine = require("readline-sync");

/**
 * Esta función pinta una matriz de dimensiones n x n
 * que contiene números enteros consecutivos
 * de izquierda a derecha y de arriba a abajo.
 * @param {Number} n - El tamaño de la matriz
 * @returns {Number[][]} Un array de n arrays que contienen cada uno n números
 */
const matrixNumbers = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [...Array(n).keys()].map((item) => item + n * i + 1);
  }
  return matrix;
};

const input = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
const width = parseInt(input);
const matrix = matrixNumbers(width);
console.log(matrix);
