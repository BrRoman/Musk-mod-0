// Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o
// no.

const readLine = require("readline-sync");

let input = readLine.question("Introduce la altura del triángulo: ");
const altura = parseInt(input);
const width = 2 * altura - 1;
const middle = Math.ceil(width / 2);
for (let i = 0; i < altura; i++) {
  let line = "";
  for (let j = 1; j <= width; j++) {
    if (j >= middle - i && j <= middle + i) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
