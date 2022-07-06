// Importa el módulo controller.js
import * as controller from "./modulos/controller.js"

// Instala e importa la librería chalk
import chalk from 'chalk';
console.log(chalk.bgCyan("Operaciones aritméticas más librería Chalk"));

// Utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const suma = controller.suma(3, 5)
console.log(chalk.yellow(`Suma: ${suma}`));

const multiplica = controller.multiplica(3, 5)

// odifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green.bold(`Multiplicación: ${multiplica}`));
