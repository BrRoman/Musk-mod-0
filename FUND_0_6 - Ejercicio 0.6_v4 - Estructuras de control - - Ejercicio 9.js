// Escribe un programa que solicite un número al usuario (del 0 al 10) y devuelva el número escrito en
// letras. Si el valor introducido no está dentro del rango 0-10 o no es un número se deberá volver a
// solicitar un número.

const readLine = require("readline-sync");

let num = null;
do {
  let input = readLine.question("Introduce un número del 0 al 10: ");
  num = parseInt(input);
} while (isNaN(num) || num < 0 || num > 10);
console.log(
  [
    "Cero",
    "Uno",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seis",
    "Siete",
    "Ocho",
    "Nueve",
    "Diez",
  ][num],
);
