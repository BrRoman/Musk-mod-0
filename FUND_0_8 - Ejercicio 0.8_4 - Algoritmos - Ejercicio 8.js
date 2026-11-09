// Implementa una función que reciba un número y devuelva si dicho número es primo o no.

const readLine = require("readline-sync");

/**
 * Esta función calcula si un número es primo o no.
 * Un número es primo si sólo se puede dividir por 1 o por si mismo.
 * La función trata primero el caso de 2 (=> primo)
 * y de los números que NO se terminan por 1, 3, 7 o 9 (=> no primos).
 * @param {Number} number - El número a probar.
 * @returns {Boolean} Si el número es primo o no.
 * @throws Un error si number no es un número.
 * @example
 * 2
 * // 2 es primo.
 * 10
 * // 10 no es primo.
 * -3
 * // -3 no es primo.
 */
const isPrime = (number) => {
  if (isNaN(number)) {
    throw new TypeError("Error: No es un número.");
  } else if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else if (number > 10 && ![1, 3, 7, 9].includes(number % 10)) {
    return false;
  } else {
    let test = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        test = false;
        break;
      }
    }
    return test;
  }
};

try {
  const input = readLine.question("Introduce un número: ");
  const num = parseInt(input);
  if (isPrime(num)) {
    console.log(`${num} es primo.`);
  } else {
    console.log(`${num} no es primo.`);
  }
} catch (error) {
  console.error(error.message);
}
