// Crea un programa que declare una constante de tipo array que contenga los diez primeros
// números de la secuencia de Fibonacci y que modifique los valores de dicho array
// multiplicándolos por dos y mostrando el resultado por pantalla.

const fibonacci = [];
for (let i = 0; i < 10; i++) {
  if (i < 2) {
    fibonacci[i] = 1;
  } else {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
}
const fibonacci_double = fibonacci.map((item) => item * 2);
console.log(fibonacci_double);
