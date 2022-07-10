// Declarar la clase Persona
class Persona {
    // Variables de Persona (atributos)
    // Al ser públicos, estos atributos no serían necesarios, pueden declararse directamente en el constructor.
    nombre;
    edad;
    isDeveloper;
    // Constructor: método por defecto para crear una clase
        // this hace referencia al atributo de la clase.
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    // Funciones de Persona (métodos)
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear objeto de la clase Persona (instanciar)
const nueva_persona = new Persona("Anabel", 28, true);
console.log(nueva_persona);
nueva_persona.saludo();
console.log(nueva_persona.edad); 

// Saber si un objeto es instancia de una clase
console.log(nueva_persona instanceof Persona);