// Implementa el algoritmo de ordenación bubble sort y comprueba cuánto tarda en ejecutarse sobre un
// array de números aleatorios de tamaño 100.000.

const crypto = require("crypto");
let array = [];
for (let i = 0; i < 100_000; i++) {
  array.push(crypto.randomInt(1000));
}

const start = new Date();
let size = array.length;
while (size > 0) {
  for (let i = 1; i < size; i++) {
    if (array[i] < array[i - 1]) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
    }
  }
  size--;
}
const end = new Date();
const timeElapsed = end - start;
console.log(
  `El algoritmo bubble sort ha tardado ${timeElapsed / 1000} seconds en ordenar 100000 elementos.`,
);
