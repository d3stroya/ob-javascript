// 2. Importar ES6

// Importar funciones
//import { suma, eleva, nombre } from './modulos/matematicas.js'

// Importar todo un módulo
import * as moduloMatematicas from './modulos/matematicas.js'

// Importar por defecto (sin llaves) y por nombre (con llaves)
import getAutor, { libro } from './modulos/literatura.js'


// const sum = suma(4, 12)
// console.log(sum);
// console.log(eleva(4,4));
// console.log(nombre);

console.log(moduloMatematicas.suma(4,4));
console.log(getAutor());
console.log(libro);
