// Escribe un programa que genere un número aleatorio del 1 al 10.
// Haz que el programa pregunte al usuario números hasta que acierte el número aleatorio generado.
// El programa debe mantener una cuenta de cuántos intentos han hecho falta hasta acertar el número.
// Cuando el usuario acierte el número aleatorio, el programa mostrará por pantalla el número de
// intentos.

// TODO: "El ejercicio 10 permite adivinar el número y cuenta los intentos, pero acepta números fuera del rango del 1 al 10 como intentos válidos."

const readLine = require("readline-sync");
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

let num = null;
let trials = 0;
do {
  let input = readLine.question("Adivina: ");
  num = parseInt(input);
  trials++;
} while (num !== randomNumber);
console.log(
  `¡Correcto! Has necesitado ${trials} intento${trials !== 1 ? "s" : ""}.`,
);
