const miFuncion = val => 2 * val
console.log(miFuncion("hola"))  // Nan

// Lanzar un error cuando algo falle
const miFuncion2 = val => {
    if(typeof val === "number") {
        return val * 2
    } 
    // return false
    throw new Error("El valor debe ser de tipo número.")
}
const elDoble = console.log(miFuncion2(2))

// Try y catch
try {
    // Intenta ejecutar este código
    const doble = miFuncion(numa)
    console.log("Correcto")
} catch(e) {
    // Si algo falla, haz esto
    console.log("Error")
    console.error("El valor de e es: " + e)
} finally {
    console.log("Se ejecuta siempre.")
}

// Errores más comunes
// Internal error: se lanza cuando hay un problema interno, p.ej. recursividad
// Sintax error: fallos de sintaxis, p.ej. cons en vez de const
// Typeof error: errores en el tipo de dato, p.ej. espera un número y pasamos un string
// Range error: estamos tratando de acceder a un elemento superior al rango, p.ej. en un array de 10 elementos intentamos acceder al elemento 12.
// Reference error: trata de acceder a una referencia que no existe.
