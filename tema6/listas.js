let var1 = 1
let array = [0, var1, "dos", true, {id: 4}, null, undefined]

// Acceder a los valores de un array
console.log(array[0]);

// Métodos para introducir nuevos valores: .push() y .unshift() => Mutan el valor del array
array.push("final", 10, false)     // push() añade valores al final del array
array.unshift(-1, "principio", null)    // unshift() añade valores al inicio

// Métodos para eliminar valores de un array: .pop() y .shift() => Mutan el valor del array
array.pop() // Elimina valores al final del array, el último elemento
array.shift()   // Elimina valores al principio, es decir, el primer elemento.

// Método para eliminar, modificar o añadir valores a un array: .splice(x, y, z)
array.splice(2, 1)  // Eliminar: splice(índice, número de valores a eliminar)
array.splice(2, 0, "hola", 3)  // Añadir valores: splice(índice, número valores a eliminar, elemento a añadir)
array.splice(2, 1, 3)  // Modificar valores: splice(índice, numValElim, valoresAñadir)