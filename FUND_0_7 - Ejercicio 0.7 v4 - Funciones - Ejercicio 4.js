// Implementa una función que reciba por parámetro un array de números y que imprima por pantalla
// la suma y la media aritmética de sus elementos.

const readLine = require("readline-sync");

/**
 * Esta función calcula la suma y la media aritmética de una lista de números.
 * @param {String} inputList - La lista de números en formato a,b,c…
 * @returns {Object} Un objecto que contiene la suma y la media.
 */
const sumAndAverage = (inputList) => {
  const numList = inputList.map((item) => parseInt(item));
  const sum = numList.reduce((a, b) => a + b);
  const average = sum / numList.length;
  return {
    sum: sum,
    average: average,
  };
};

const input = readLine.question("Introduce una lista de números: ");
const inputList = input.split(",");
const { sum, average } = sumAndAverage(inputList);
console.log(`La suma es ${sum}`);
console.log(`La media aritmética es ${average}`);
