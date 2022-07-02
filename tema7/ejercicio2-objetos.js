// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = {
    nombre: "Anabel",
    apellido: "Moreno",
    edad: 28,
    altura: 167,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = console.log(persona.edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con 
// los datos personales de tus dos mejores amig@s
const personas = [
    persona,
    amigos = {
        nombre: "Lara",
        apellido: "Santamaría",
        edad: 33,
        altura: 163,
        eresDesarrollador: false
    },
    {
        nombre: "Moisés",
        apellido: "Ramírez",
        edad: 31,
        altura: 165,
        eresDesarrollador: false
    }
]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaPersonas = [personas.sort((a, b) => a.edad - b.edad)]
console.log(listaPersonas)