// Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o
// impar y si es positivo o negativo. Si la entrada no es un número, se deberá pintar “No es un
// número”.

/**
 * Notas:
 * He tratado el 0 como un caso especial.
 */

const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);

if (isNaN(num)) {
  console.log("No es un número");
} else {
  if (num === 0) {
    console.log("Cero es par");
  } else {
    let result = "Este número es";
    if (num % 2 === 0) {
      result += " par";
    } else {
      result += " impar";
    }

    if (num > 0) {
      result += " y positivo";
    } else {
      result += " y negativo";
    }

    console.log(result);
  }
}
