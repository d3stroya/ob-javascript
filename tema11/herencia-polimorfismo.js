class Persona {
    _nombre;
    _edad;
    _isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this._nombre = nombre;
        this._edad = edad;
        this._isDeveloper = isDeveloper;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años.`);
    }
}

// 1. Herencia: clase hija de otra clase. Hereda sus atributos y métodos, pero puede añadir otras cosas.
    // Se indica con extends NombreClasePadre
class Desarrollador extends Persona {
    constructor(nombre, edad, isDeveloper, lenguaje) {
        // Llamar al constructor de la clase padre
        super(nombre, edad, isDeveloper)
        this.lenguaje = lenguaje
    }

    // 2. Polimorfismo: las clases pueden tomar diferentes formas
    saludo() {
        // Accede al método de la clase padre
        super.saludo()
        // Modifica el método de la clase padre
        console.log(`Mi lenguaje favorito es ${this.lenguaje}`);
    }
}
const desarrollador1 = new Desarrollador("Ana", 28, true, "JavaScript")
console.log(desarrollador1);
desarrollador1.saludo();


