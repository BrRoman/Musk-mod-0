// Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si
// todos los elementos son únicos en la lista u otra lista con los elementos repetidos en caso contrario.

const readLine = require("readline-sync");

/**
 * Esta función extrae los elementos duplicados de una lista.
 * @param {String[]} inputList - Un array que contiene los elementos a filtrar.
 * @returns {String{}} Un set que contiene los elementos duplicados.
 */
const findDuplicate = (inputList) => {
  const inputSet = new Set(inputList);
  const duplicate = new Set();
  if (inputSet.size !== inputList.length) {
    inputList.map(
      (item, index) =>
        inputList.slice(0, index).includes(item) && duplicate.add(item),
    );
  }
  return duplicate;
};

const input = readLine.question("Introduce una lista de elementos: ");
const inputList = input.split(",");
const duplicate = findDuplicate(inputList);
if (duplicate.size === 0) {
  console.log("Todos los elementos son únicos.");
} else {
  console.log(
    `Los elementos duplicados son ${Array.from(duplicate).join(", ")}.`,
  );
}
