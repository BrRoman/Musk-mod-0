// Implementa una función que reciba una cadena y devuelva un Map con la frecuencia de cada carácter
// en la cadena (las veces que se repite).

const readLine = require("readline-sync");

/**
 * Esta función calcula cuantas veces ocurre cada carácter de una cadena.
 * @param {String} text - El texto.
 * @returns {Map<String, Number>} Un Map conteniendo cada carácter como key, y su frecuencia como value.
 * @throws Un error si 'text' está vacío.
 * @example
 * abc adc
 * // Map(5) { "a" => 2, "b" => 1, "c" => 2, ' ' => 1, "d" => 1 }
 */
const textStats = (text) => {
  if (!text) {
    throw new Error("No hay texto que analizar.");
  }

  const textSplit = text.split("");
  const frecuencias = new Map();
  for (let char of textSplit) {
    frecuencias.set(char, (frecuencias.get(char) || 0) + 1);
  }
  return frecuencias;
};

const input = readLine.question("Introduce un texto: ");
try {
  const frecuencias = textStats(input);
  console.log("Mapa de frecuencias:");
  console.log(frecuencias);
} catch (error) {
  console.log(error.message);
}
