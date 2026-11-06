// Implementa una función que reciba un número y devuelva una matriz cuadrada en la cual cada
// elemento es el producto de sus índices.

const readLine = require("readline-sync");

/**
 * Esta función crea una matriz
 * en la cual cada elemento es el productos de sus indices.
 * @param {Number} n - El tamaño de la matriz.
 * @returns {Number[][]} La matriz
 */
const matrixIndexes = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [...Array(n).keys()].map((item) => item * i);
  }
  return matrix;
};

const input = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
const width = parseInt(input);
console.log(matrixIndexes(width));
