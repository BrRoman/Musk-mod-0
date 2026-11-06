// Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área.

const readLine = require("readline-sync");

/**
 * Esta función calcula y pinta el area de un círculo.
 * @param {Number} radio - El radio del círculo
 * @returns {String} El area del círculo
 * @throws {TypeError} Si el radio no es un número
 */
const area = (radio) => {
  try {
    if (isNaN(radio)) {
      throw new TypeError("Error: El radio tiene que ser un número.");
    }
    return `El area del círculo es ${Math.PI * radio ** 2}.`;
  } catch (error) {
    return error.message;
  }
};

let input = readLine.question("Introduce el radio: ");
const radio = parseInt(input);
console.log(area(radio));
