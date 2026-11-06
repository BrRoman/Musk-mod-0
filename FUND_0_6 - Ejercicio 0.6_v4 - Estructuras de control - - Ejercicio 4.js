// Escribe un programa que tome un número como entrada e imprima la tabla de multiplicar de ese
// número del 1 al 10.

/**
 * Ahora supongo que el usuario introduce un número valido.
 */

const readLine = require("readline-sync");

let input = readLine.question("Introduce un número: ");
const num = parseInt(input);
const arrayDiez = [...Array(10).keys()].map((item) => item + 1);
let tabla = "";
arrayDiez.map((item) => {
  tabla += `${num} x ${item} = ${num * item}\n`;
});
console.log(tabla);
