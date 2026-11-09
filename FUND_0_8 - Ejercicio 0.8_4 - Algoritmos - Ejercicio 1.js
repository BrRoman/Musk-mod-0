// Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto.

const readLine = require("readline-sync");

/**
 * Esta función extrae las palabras repetidas de un texto.
 * @param {String} text - Un texto.
 * @returns {Set} Un Set con las palabras repetidas.
 * @throws Un error si el param está vacío o si no contiene palabra.
 * @example
 * abc, def, ghi, abc, def, jkl
 * // Se repiten las siguientes palabras: abc, def.
 */
const repeatedWords = (text) => {
  const textSplit = text.match(/[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+/g);

  if (!textSplit) {
    throw new Error("No hay palabra en este texto.");
  }

  const repeated = textSplit.filter((item, i) =>
    textSplit.slice(0, i).includes(item),
  );
  let output;
  if (repeated.length > 0) {
    output = new Set(repeated);
  } else {
    output = [];
  }
  return output;
};

const input = readLine.question("Introduce un texto: ");
try {
  const output = Array.from(repeatedWords(input));
  if (output.length > 0) {
    console.log(`Se repiten las siguientes palabras: ${output.join(", ")}.`);
  } else {
    console.log("No hay palabra repetida en este texto.");
  }
} catch (error) {
  console.error(error.message);
}
