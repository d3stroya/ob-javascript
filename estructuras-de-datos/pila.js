/**
 * Una PILA (LIFO) es una estructura de datos que podemos implementar con arrays o con listas.
 * Nos permite apilar y desapilar elementos, similar a una pila de libros o platos en la vida real.
 * En la pila, el último elemento que entra es el primero que sale (last in, first out).
 * Sus métodos son:
 *  1. push() - apilar
 *  2. pop() - desapilar
 *  3. peek() - coger el último elemento, ver cuál es
 *  4. isEmpty() - verificar si la pila está vacía (true) o tiene algún elemento (false)
 *  5. empty() - vaciar la pila, eliminar todos sus elementos
 *  6. size() - determinar la longitud de la pila, es decir, cuántos elementos contiene
 */


// 1. Implementamos la clase pila creando un array para sus elementos y añadiendo sus métodos
class Pila {
    elementos = []

    push = (elemento) => {
        return this.elementos.push(elemento)
    }

    pop = () => {
        return this.elementos.pop()
    }

    peek = () => {
        return this.elementos[this.elementos.length - 1]
    }

    isEmpty = () => {
        return this.elementos.length === 0
    }

    empty = () => {
        this.elementos.length = 0
    }

    size = () => {
        return this.elementos.length
    }
}

// 2. Implementamos una pila de libros creando un objeto de la clase Pila y jugando con sus métodos
let pilaLibros = new Pila();

console.log(pilaLibros.elementos)

pilaLibros.push("El quijote")
pilaLibros.push("La Celestina")
pilaLibros.push("El código DaVinci")
pilaLibros.push("El lazarillo de Tormes")

console.log(pilaLibros.size())

pilaLibros.pop()
pilaLibros.pop()

const ultimoElemento = pilaLibros.peek()
console.log(ultimoElemento)

console.log(pilaLibros.isEmpty())
console.log(pilaLibros.size())


pilaLibros.empty()

console.log(pilaLibros.size())

console.log(pilaLibros.isEmpty())

// 3. Dado un string con () [] {} debemos verificar si todos se cierran
/**
 * ([]{()}) Será válido
 * ([]{()} Será inválido, porque el primer paréntesis no se cierra
 * {)()]{}[ también será inválido
 */

const str1 = "([]{()})"
const str2 = "([]{()}"
const str3 = "{)()]{}["

const pilaCorchetes = new Pila();

const verificarCorchetes = (str) => {
    const aPila = pilaCorchetes.elementos

    for (corchete in str) {
        if (
            str[corchete] === "(" ||
            str[corchete] === "[" ||
            str[corchete] === "{"
        ) {
            aPila.push(str[corchete])
        }
        else if (
            !pilaCorchetes.isEmpty() &&
            aPila[aPila.length - 1] === "(" && str[corchete] === ")" ||
            aPila[aPila.length - 1] === "[" && str[corchete] === "]" ||
            aPila[aPila.length - 1] === "{" && str[corchete] === "}"
        ) {
            aPila.pop()
        }
    }
    if (pilaCorchetes.isEmpty()) {
        return "Válido"
    } else {
        return "Inválido"
    }
}

console.log(verificarCorchetes(str3))



