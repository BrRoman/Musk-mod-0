// Implementa una función que verifique si una secuencia de paréntesis, corchetes, y llaves es válida.
// Es decir, se abren tantos como se cierran y cada secuencia está siempre contenida.

const readLine = require("readline-sync");

/**
 * Esta función calcula si una serie de paréntesis, corchetes y llaves está balanceada o no.
 * @param {String} sequence - La secuencia de caracteres a probar.
 * @returns {Boolean} Si las paréntesis, corchetes y llaves están balanceados o no.
 * @throw Un error si la secuencia no contiene paréntesis, corchetes ni llaves.
 * @example
 * (()[()]){()[]}
 * // Están balanceados.
 * ([)]{}
 * // No están balanceados.
 */
const balanced = (sequence) => {
  if (!/[\(\)\[\]\{\}]/g.test(sequence)) {
    throw new Error(
      "Error: Este texto no contiene paréntesis, corchetes ni llaves.",
    );
  }

  let array = sequence.slice("");
  let stack = [];
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];
  for (let item of array) {
    if (open.includes(item)) {
      stack.push(item);
    } else if (close.includes(item)) {
      if (stack.length === 0) {
        return false;
      } else {
        if (close.indexOf(item) === open.indexOf(stack[stack.length - 1])) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};

try {
  const input = readLine.question("Introduce una secuencia: ");
  const output = balanced(input);
  if (output) {
    console.log("Secuencia correcta.");
  } else {
    console.log("Secuencia incorrecta.");
  }
} catch (error) {
  console.log(error.message);
}
