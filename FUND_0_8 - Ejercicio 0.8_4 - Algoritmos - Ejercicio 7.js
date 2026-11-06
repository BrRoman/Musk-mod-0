// Implementa el algoritmo de ordenación quicksort y comprueba cuánto tarda en
// ejecutarse sobre un array de números aleatorios de tamaño 100.000.

const crypto = require("crypto");

/**
 * Esta función ordena un array.
 * Funciona de manera recursiva, partiendo el array en 2 partes y ordenando cada sub-array.
 * @param {String|Number[]} array - El array a ordenar.
 * @param {Number} start - El primer índice del array.
 * @param {Number} end - El último índice del array.
 * @returns {String|Number[]} El array ordenado.
 */
const quickSort = (array, start, end) => {
  if (start >= end || start < 0) return;

  const pivot = partition(array, start, end);

  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
};

/**
 * Esta función ordena un sub-array.
 * Elige un pivote y sitúa los elementos inferiores al pivote a la izquierda de la tabla.
 * Luego desplaza el pivote a la derecha de esos valores.
 * @param {String|Number[]} array - El array a ordenar.
 * @param {Number} start - El primer índice del array.
 * @param {Number} end - El último índice del array.
 * @returns {Number} El nuevo índice del pivote.
 */
const partition = (array, start, end) => {
  const pivot = array[end];
  let cursor = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      [array[i], array[cursor]] = [array[cursor], array[i]];
      cursor++;
    }
  }
  [array[end], array[cursor]] = [array[cursor], array[end]];
  return cursor;
};

let array = [];
for (let i = 0; i < 100_000; i++) {
  array.push(crypto.randomInt(1000));
}
const start = new Date();
quickSort(array, 0, array.length - 1);
const end = new Date();
const timeElapsed = end - start;
console.log(
  `El algoritmo quicksort ha tardado ${timeElapsed / 1000} seconds en ordenar 100000 elementos.`,
);
