// Implementa una función que reciba un texto (string) y que devuelva una matriz bidimensional de
// ancho 5 y de alto indeterminado que incorpore las palabras (elementos separados por espacios) del
// texto una por una de izquierda a derecha y de arriba a abajo.

const readLine = require("readline-sync");

/**
 * Esta función convierte una lista en una matriz de ancho 5.
 * @param {String[]} list - Un array de elementos
 * @returns {String[][]} Una matriz de ancho 5
 */
const arrayToMatrix = (list) => {
  let matrix = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 5 === 0) {
      matrix.push([]);
    }
    matrix[matrix.length - 1].push(list[i]);
  }
  return matrix;
};

const input = readLine.question("Introduce un texto: ");
console.log(arrayToMatrix(input.split(" ")));
