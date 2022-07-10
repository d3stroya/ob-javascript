// Si queremos crear varias personas, tendríamos que repetir bastante código
const persona = {
    nombre: "Anabel",
    edad: 28,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola");
    }
}

// console.log(persona);
// persona.saludo();

const persona2 = {
    nombre: "Franky",
    edad: 32,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola");
    }
}

// En su lugar, podemos crear una función que genere personas
// Factory function
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola");
        }
    }
}

const nueva_persona = creaPersona("Bridget", 38, false)
console.log(nueva_persona);

// Lo más óptimo es trabajar con clases --> clase-perosna.js