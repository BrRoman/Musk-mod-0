// Implementa una función que invierta el orden de una palabra usando una pila (stack).

const readLine = require("readline-sync");

/**
 * Esta función invierte el orden de una palabra.
 * @param {String} string - La cadena a invertir.
 * @returns {String} La cadena invertida.
 * @example
 * Amor
 * // romA
 */
const invertString = (string) => {
  const stringSplit = string.split("");
  let stack = [];
  for (let i = stringSplit.length; i >= 0; i--) {
    stack.push(stringSplit[i]);
  }
  return stack.join("");
};

const input = readLine.question("Introduce una palabra: ");
console.log(`La palabra invertida es "${invertString(input)}".`);
