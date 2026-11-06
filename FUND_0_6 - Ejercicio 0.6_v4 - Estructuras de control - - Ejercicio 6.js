// Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o
// no.

const readLine = require("readline-sync");

let input = readLine.question("Introduce un número: ");
const year = parseInt(input);
const leap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
console.log(leap ? "El ańo es bisiesto" : "El año no es bisiesto");
