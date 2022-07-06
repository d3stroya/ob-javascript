// Módulo: una parte del código que se puede reutilizar en otras partes del programa.

// Exportar e importar módulos
// 1. CommonJS --> require
// 2. Import ES6 --> import

// 1. Importar CommonJS
//const moduloMatematicas = require("./modulos/matematicas.js")
//const factorial = moduloMatematicas.factorial

// Más moderno
//const { factorial } = moduloMatematicas;
const { factorial, suma } = require("./modulos/matematicas.js")


// Las funciones van al módulo matematicas.js
// function suma(a, b) {
//     return a + b
// }

// function multiplica(a, b) {
//     return a * b
// }

// function eleva(a, b) {
//     return a ** b
// }

// function factorial(a) {
//     let factorial = 1
//     for(let i = 2; i <= a; i++) {
//         factorial *= i;
//     }
//     return factorial
// }

const fact = factorial(5)
console.log(fact);

const sum = suma(12, 90)
console.log(sum);

// Module es un objeto
//console.log(module);