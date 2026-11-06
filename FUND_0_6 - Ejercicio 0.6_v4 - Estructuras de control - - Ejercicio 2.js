// Escribe un programa que pida al usuario tres números y que pinte por pantalla si al menos uno de
// ellos es par.

const readLine = require("readline-sync");

let i = 0;
let nums = [];
while (i < 3) {
  const input = readLine.question("Introduce un número: ");
  const num = parseInt(input);
  if (isNaN(num)) {
    console.log("No es un número");
    continue;
  } else {
    nums.push(num);
    i++;
  }
}

let pares = [];
nums.filter((num) => num % 2 == 0 && pares.push(num));
console.log(
  pares.length > 0 ? "Hay al menos un número par" : "No hay números pares",
);
