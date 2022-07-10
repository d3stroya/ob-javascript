// Proteger ciertas partes de un objeto o clase
// porque no me interesa que desde fuera se puedan modificar los valores de atributos o métodos.
class Persona {
    // Private --> #
        // Solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected --> _
        // Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.isDeveloper = isDeveloper;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
    // Getter
    obtenerNombre() {
        return this.#nombre
    }
    #obtenerEdad() {
        return this.#edad
    }
    // Getter
    getEdad() {
        return this.#edad
    }
    // Setter
    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Franky", 32)
console.log(persona);

// Acceder a los atributos y métodos del objeto
console.log(persona.nombre);
console.log(persona.edad);
persona.saludo();

// No puedo acceder directamente a nombre, pero sí a través del método obtenerNombre()
console.log(persona.obtenerNombre());
// No puedo acceder desde fuera a #obtenerEdad() porque es un método privado.
console.log(persona.#obtenerEdad());
// No puedo acceder desde fuera a _isDeveloper porque es un atributo protegido
console.log(persona._isDeveloper);

// GETTER: métodos que permiten obtener atributos o métodos privados o protegidos
// SETTER: métodos que permiten cambiar el valor de atributos o métodos privados o protegidos
console.log(persona.getEdad());
persona.setEdad(34)
console.log(persona.getEdad());
