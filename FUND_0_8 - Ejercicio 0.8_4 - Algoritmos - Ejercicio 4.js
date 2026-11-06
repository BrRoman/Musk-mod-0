// Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map.

const readLine = require("readline-sync");

/**
 * Esta función calcula si dos cadenas de caracteres son anagramas.
 * @param {String} string1 - La primera cadena.
 * @param {String} string2 - La segunda cadena.
 * @returns {Boolean} Si las dos cadenas son anagramas.
 * @throw An error si falta al menos uno de los dos parámetros.
 * @example
 * Amor
 * Roma
 * // Las palabras son anagramas.
 * Hola
 * Adios
 * // Las palabras no son anagramas.
 */
const isAnagrama = (string1, string2) => {
  try {
    const frequencies1 = textStats(string1.toLowerCase());
    const frequencies2 = textStats(string2.toLowerCase());
    if (frequencies1.size !== frequencies2.size) {
      return false;
    }
    let anagrama = true;
    for (let [character, frequency] of frequencies1) {
      if (
        !frequencies2.has(character) ||
        frequencies2.get(character) !== frequency
      ) {
        return false;
      }
    }
    return anagrama;
  } catch (error) {
    throw new Error("Falta al menos una palabra.");
  }
};

/**
 * Esta función calcula cuantas veces ocurre cada carácter de una cadena.
 * (Cf. ejercicio precedente)
 * @param {String} text - El texto.
 * @returns {Map<String, Number>} Un Map conteniendo cada carácter como key, y su frequency como value.
 * @throws Un error si 'text' está vacío.
 */
const textStats = (text) => {
  if (!text) {
    throw new Error("No hay texto que analizar.");
  }

  const textSplit = text.split("");
  const frequencies = new Map();
  for (let char of textSplit) {
    frequencies.set(char, (frequencies.get(char) || 0) + 1);
  }
  return frequencies;
};

const string1 = readLine.question("Introduce una palabra: ");
const string2 = readLine.question("Introduce otra palabra: ");
try {
  const anagrama = isAnagrama(string1, string2);
  console.log(
    anagrama ? "Las palabras son anagramas." : "Las palabras no son anagramas.",
  );
} catch (error) {
  console.log(error.message);
}
