// Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla la
// circunferencia y el área del círculo.

const readLine = require("readline-sync");

const circunferencia = (radio) => Math.PI * radio * 2;

const area = (radio) => Math.PI * radio ** 2;

/**
 * Esta función pinta la circunferencia y el area de un círculo.
 * @param {Number} radio - El radio del círculo
 * @returns {String} La circunferencia y el area del círculo
 * @throws {TypeError} Si el radio no es un número
 */
const displayCirculo = (radio) => {
  try {
    let message = "";
    if (isNaN(radio)) {
      throw new TypeError("Error: El radio tiene que ser un número.");
    }
    message += `La circunferencia es ${circunferencia(radio)}.\n`;
    message += `El area del círculo es ${area(radio)}.`;
    return message;
  } catch (error) {
    return error.message;
  }
};

let input = readLine.question("Introduce el radio: ");
const radio = parseInt(input);
console.log(displayCirculo(radio));
