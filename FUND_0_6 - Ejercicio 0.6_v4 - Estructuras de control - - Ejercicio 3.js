// Escribe un programa que tome un número como entrada y calcule su factorial.

// TODO: "El ejercicio 3 calcula correctamente el factorial para números no negativos, pero para un número negativo muestra 1. No es que esté mal, pero ten en cuenta que el factorial no está definido para números negativos."

const readLine = require("readline-sync");

let num = null;
do {
  let input = readLine.question("Introduce un número: ");
  num = parseInt(input);
} while (isNaN(num));

let factorial = 1;
if (![0, 1].includes(num)) {
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
}
console.log(factorial);
