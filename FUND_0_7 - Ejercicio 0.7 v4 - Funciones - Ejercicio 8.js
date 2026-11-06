// Implementa una función que reciba un string y devuelva si es o no un palíndromo
// (independientemente de los espacios).

const readLine = require("readline-sync");

/**
 * Esta función busca si una frase es un palíndromo.
 * @param {String} text - El texto a analizar
 * @returns {Boolean} Si el texto es un palíndromo o no
 */
const isPalindrome = (text) => {
  text = text.replaceAll(" ", "");
  const middle = Math.floor(text.length / 2);
  let result = true;
  for (let i = 0; i < middle; i++) {
    if (text[i].toLowerCase() !== text[text.length - (i + 1)].toLowerCase()) {
      result = false;
      break;
    }
  }
  return result;
};

const input = readLine.question("Introduce un texto: ");
console.log(isPalindrome(input) ? "Sí es palíndromo" : "No es palíndromo");
