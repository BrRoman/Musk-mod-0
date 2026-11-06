// Implementa una función que, dado un texto con paréntesis, indique si dichos paréntesis están
// balanceados (se cierran todos los que se abren).

const readLine = require("readline-sync");

/**
 * Esta función calcula si una serie de paréntesis está balanceada o no.
 * @param {String} string - La cadena de caracteres a probar.
 * @returns {Boolean} Si las paréntesis están balanceadas o no.
 * @throw Un error si la cadena no contiene paréntesis.
 * @example
 * (()())()
 * // Están balanceados.
 * )(())()(
 * // No están balanceados.
 */
const balanced = (string) => {
  if (!/[\(\)]/g.test(string)) {
    throw new Error("Error: Este texto no contiene paréntesis.");
  }

  let array = string.slice("");
  let stack = [];
  for (let item of array) {
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

try {
  const input = readLine.question("Introduce un texto: ");
  const balanceados = balanced(input);
  if (balanceados) {
    console.log("Están balanceados.");
  } else {
    console.log("No están balanceados.");
  }
} catch (error) {
  console.log(error.message);
}
