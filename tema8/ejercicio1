// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
function verdadero() {
    return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
//const saludo = texto => console.log("Hola, soy una promesa")

function miAsync() {
    setTimeout(() => console.log("Hola, soy una promesa"), 5000)
} 
//miAsync()

// - Una función generadora de índices pares automáticos
function* indicesPares() {
    let index = 0
    while(true) {
        index += 2
        if(index === 20) {
            return index
        }
        yield index
    }
}
const indices = indicesPares()
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)

