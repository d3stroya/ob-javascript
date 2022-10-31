/**
 * Una COLA (FIFO) es una estructura de datos en la que el primer elemento que entra es el primero en salir (first in, first out).
 * Puede implementarse con arrays o con listas y simular filas del mundo real, como las del súper o un concierto.
 * Sus métodos son:
 *  1. enqueue() - añadir al final de la cola
 *  2. dequeue() - quitar de la cola el primer elemento
 *  3. isEmpty() - verificar si la cola está vacía (true) o hay algún elemento (false)
 *  4. empty() - vaciar la cola, eliminar todos los elementos
 *  5. size() - devuele el número de elementos que hay en la cola
 */

class Cola {
    elementos = []

    enqueue = (elemento) => {
        return this.elementos.push(elemento)
    }

    dequeue = () => {
        return this.elementos.shift()
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

const miCola = new Cola()

miCola.enqueue(1)
miCola.enqueue(6)
miCola.enqueue(3)
miCola.enqueue(9)
console.log(miCola.elementos)   // [1, 6, 3, 9]

console.log(miCola.size())      // 4

miCola.dequeue()
miCola.dequeue()
console.log(miCola.elementos)   // [3, 9]

console.log(miCola.size())      // 2
console.log(miCola.isEmpty())   // false

miCola.empty()
console.log(miCola.isEmpty())   // true


console.log(miCola.elementos)   // []