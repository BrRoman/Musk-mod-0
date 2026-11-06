// Implementa  una  función  que  reciba  dos  arrays  de  números  y  devuelva  un  array  con  los  elementos que están en el primer array pero que no están en el segundo. Pruébala con valores aleatorios.

// TODO: Ejercicio 2: en la revisión anterior se indicó que era correcto. Al comprobarlo de nuevo he visto que la función imprime la diferencia, pero no devuelve el array solicitado y modifica los arrays recibidos al ordenarlos. Hay que tener cuidado con modificar los arrays y tratar de evitar efectos colaterales.

const crypto = require("crypto");

/**
 * Esta función calcula la diferencia entre 2 arrays.
 * @param {Number[]} array1 - Un array de números.
 * @param {Number[]} array2 - Un array de números.
 * @returns {Number[]} Los números de array1 que no estén en array2.
 * @example
 * [1, 2, 3, 4, 5, 6, 7]
 * [5, 6, 7, 8, 9, 10]
 * // La diferencia de ambos conjuntos es [1, 2, 3, 4].
 */
const diffArrays = (array1, array2) => {
  console.log(`Array 1: ${array1.sort().join(", ")}`);
  console.log(`Array 2: ${array2.sort().join(", ")}`);

  const unique = array1.filter((item) => !array2.includes(item));
  const uniqueReduced = Array.from(new Set(unique));
  if (uniqueReduced.length > 0) {
    console.log(
      `La diferencia de ambos conjuntos es [${uniqueReduced.join(", ")}].`,
    );
  } else {
    console.log("No hay elemento en el Array 1 que no esté en el Array 2.");
  }
};

// Tamaño aleatorio:
const sizeArray1 = crypto.randomInt(1, 10);
const sizeArray2 = crypto.randomInt(1, 10);
let array1 = [];
let array2 = [];
// Contenido aleatorio:
for (let i = 0; i < sizeArray1; i++) {
  array1.push(crypto.randomInt(10));
}
for (let i = 0; i < sizeArray2; i++) {
  array2.push(crypto.randomInt(10));
}

diffArrays(array1, array2);
