// Funciones
// 1. Qué son: bloques de código que se ejecutan con un fin específico
const nom = "Ana"
saludar(nom)
function saludar (nombre) {
    console.log("Hola, " + nombre)
}

// nombre se define dentro de la función y no cambia a la variable externa nombre.
const nombre = "Lara"
despedir(nom)
function despedir(nombre) {
    nombre = "Ana"
    console.log("Adiós, " + nombre)
}

// objeto.apellido se define dentro de la función y modifica el objeto.
let persona = {nombre: "Lara", apellido: "Gómez"}
saludarPersona(persona)
function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola, ${objeto.nombre} ${objeto.apellido}`)
}
console.log(persona)

// Parámetros con valor por defecto (parámetros opcionles)
function imprimeNum(num = 7) {
    console.log(num)
}
imprimeNum()

// Parámetros indeterminados. Usar el factor de propagación como parámetro
function imprimir(...parametros) {
    console.log(parametros)
}
imprimir(1,5,7,823,32)

// Funciones que devuelven un valor
function suma(...numeros) {
    return numeros.reduce((a, b) => a + b)
}
const s = suma(1,2,3,4)
console.log(s)

// Alcance o scope: podemos acceder a variables definidas fuera de la función desde dentro de la función, pero no alrevés
c = 10
function multiplicar(a = 0, b = 0) {
    return a * b * c
}
console.log(multiplicar(4, 9))
console.log(c * a)

// 2. Funciones tipo flecha y funciones anónimas: nuevas formas de declarar funciones
const array = [1, 2, 3, 4 ,5, 6, 7]

// Forma antigua
// const array2 = array.map(function(valor, indice, arrayOriginal) {
//     return valor * 2
// })
//console.log(array2)

// Funcion flecha y anónima (no tiene nombre)
const array2 = array.map((valor) => valor * 2)
console.log(array2)

// Hoisting. Variables var y funciones function son accesibles desde cualquier parte del código.
// Arrow functions solo son accesibles cuando ya se han inicializado. 
// Es recomendable definir todas las funciones al principio del código.

// Las funciones flecha se guardan dentro de constantes
// Esta función ya tiene nombre y la podemos usar luego
const dobleValor = valor => valor * 2

const array3 = console.log(array.map(dobleValor))

// 3. Carga y sobrecarga de funciones
// CARGA O STACK
// Cómo interpreta el código el IDE:
// 1) Carga la función global()
// 2) Añade saludar() por encima de la global() --> saludar() global()
// 3) Carga hola() por encima de las anteriores --> hola() saludar() global()
// 4) Cuando ya ha ejecutado hola(), la quita de la cola --> saludar() global()
// 5) CUando ya ha ejecutado saludar(), sale de ella --> global()
// Esto optimiza el uso de memoria

// SOBRECARGA O STACK OVERFLOW: funciones que se llaman a sí mismas
// function recursiva() {
//     recursiva()
// }
//recursiva()

function saludar() {
    hola()
}

function hola() {
    console.log("Hola, soy la función hola()")
}

saludar()

// 4. Funciones asíncronas y promesas
function miAsync() {
    // Llaman a bases de datos externas y tardan un tiempo en recibir los datos. 
    // Pueden dar error.
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if(i !== 0) {
        resolve()
    } else {    // Si falla
        reject()
    }
})

miPromesa
    // Todo correcto
    .then(() => console.log("Se ha ejecutado de forma correcta."))
    // Errores
    .catch(() => console.log("Se ha producido un error."))
    // Finally: se ejecuta siempre
    .finally(() => console.log("Soy el finally."))

// 5. Funciones generadoras. Se usa el asterisco para indicar que es una función generadora. Se añade yield a la variable para que se evíe cada vez que se genere un nuevo id.
function* generarId() {
    let id = 0
    while(true) {
        id++
        if(id === 10) {
            return id
        }
        yield id // Espera hasta que se vuelva a llamar
    }
}

// Guardar la función en una variable
const gen = generarId()

// Llamar a la función, generar valor para el id y obtenerlo.
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
