// Escribe un programa que reciba dos números por consola que serán la base y la altura de un
// rectángulo de asteriscos que se deberá pintar por pantalla.

const readLine = require("readline-sync");

let input = readLine.question("Introduce la altura del rectángulo: ");
const height = parseInt(input);
input = readLine.question("Introduce la anchura del rectángulo: ");
const width = parseInt(input);
for (let i = 0; i < height; i++) {
  let line = "";
  for (let j = 0; j < width; j++) {
    if (i == 0 || i == height - 1 || j == 0 || j == width - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
