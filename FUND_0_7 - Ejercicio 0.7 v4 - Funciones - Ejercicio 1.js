// Implementa una función que reciba por parámetro el radio de un círculo y que devuelva la longitud de
// la circunferencia.

const readLine = require("readline-sync");

/**
 * Esta función calcula y pinta la circunferencia de un círculo.
 * @param {Number} radio - El radio del círculo
 * @returns {String} La circunferencia del círculo
 * @throws {TypeError} Si el radio no es un número
 */
const circunferencia = (radio) => {
  try {
    if (isNaN(radio)) {
      throw new TypeError("Error: El radio tiene que ser un número.");
    }
    return `La circunferencia es ${Math.PI * radio * 2}.`;
  } catch (error) {
    return error.message;
  }
};

let input = readLine.question("Introduce el radio: ");
const radio = parseInt(input);
console.log(circunferencia(radio));
