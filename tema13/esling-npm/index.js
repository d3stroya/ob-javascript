const nombre = "Ana"

// Deshabilitar eslint
/* eslint-disable */
const apellido = "Moreno";
/* eslint-enable */


// Eliminar una regla:
const frase = 'Dijo "que no"'   // eslint-disable-line quotes

// Eliminar todas las reglas de una línea
const frase2 = 'Dijo que "pa qué"'; //  eslint-disable-line

// Eliminar una regla para la siguiente lína
/* eslint-disable-next-line indent */
    let contador = 0


// Errores para corregir con un script
// en package.json, crear scripts > lint: "eslint ." y lint-fix: "esling --fix"

console.log("Hola")
let a = 4
const numero = "tres"