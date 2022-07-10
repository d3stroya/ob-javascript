// - Una clase llamada "Estudiante"
class Estudiante {
    // - Una variable llamada nombre
    nombre
    
    // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    asignaturas = [
        "Javascript",
        "HTML",
        "CSS"
    ]

    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        const datos = {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
        return datos
    }
    constructor(nombre) {
        this.nombre = nombre
    }
}

// - Crea una nueva instancia de "Estudiante"
const estudiante = new Estudiante("Ana")
console.log(estudiante);

// - Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos());