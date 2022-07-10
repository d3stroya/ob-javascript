// Sets o conjuntos (ES6)

// Un array es un conjunto ordenado de elementos
const array = [1, 2, 3, 4, 5, 2, 5, 3]
console.log(array);

// Un set es un conjunto no ordenado de elementos únicos. No permite almacenar elementos que ya existen
const miSet = new Set(array)
console.log(miSet); // Set {1, 2, 3, 4, 5}

// Añadir valores --> .add
miSet.add(9)
console.log(miSet);

// Eliminar valores --> .delete()
miSet.delete(5)
console.log(miSet);

// Eliminar todos los valores del set --> .clear()
// miSet.clear()
// console.log(miSet);

// Saber si el set continene un elemento --> .has()
console.log(miSet.has(4));

// Saber cuál es el tamaño del set --> .size
console.log(miSet.size);

// Iterar
miSet.forEach(valor => console.log(valor))

// Obtener los valores del set: 
// Opción 1
const it_miSet = miSet.values()
console.log(it_miSet);  // { [Iterator]}

// Opción 2
const ar_miSet2 = [...miSet]
console.log(ar_miSet2[0]);