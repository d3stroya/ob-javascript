const logger = require("./logger")

// Crea una función que devuelva un error con un mensaje personalizado
// Registra el error en un archivo a través de un try...catch
function miFuncion(num) {
    try {
        if(typeof num === "number"){
        const res = num + 10
        logger.info("Suma hecha correctamente")
        return resultado
        }
    } catch (e) {
        logger.error("Error: " + e)
    } 
}

console.log(miFuncion(4))