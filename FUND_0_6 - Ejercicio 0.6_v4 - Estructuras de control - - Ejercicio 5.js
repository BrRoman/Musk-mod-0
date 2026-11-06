// Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a, e, i, o, u)
// en la cadena.

// TODO: "El ejercicio 5 cuenta las vocales minúsculas, pero no cuenta las vocales escritas en mayúscula."

const readLine = require("readline-sync");

let frase = readLine.question("Introduce una frase: ");
let countVowels = 0;
for (let i = 0; i < frase.length; i++) {
  if (["a", "e", "i", "o", "u"].includes(frase[i])) {
    countVowels++;
  }
}
console.log("El número de vocales es " + countVowels);
