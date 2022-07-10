// 1. CONCATENACIÓN Y FACTOR DE PROPAGACIÓN
// Unir dos listas --> .concat()
const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);

// Unir dos listas con el factor de propagación: devuelve los valores por separado, no como array
console.log(...lista3);
const lista4 = [... lista1, ...lista2]
console.log(lista4);

// No es lo mismo que:
const lista5 = [lista1, lista2]
console.log(lista5);

// 2. OBTENER UNA LISTA A PARTIR DE OTRA
// .slice() --> No modifica el valor del array original
const array = ["hola", 1, 2, 3, true, null, "adios"]
console.log(array.slice(3));    // Desde el índice 3 hasta el final
console.log(array.slice(2, 5));
console.log(array.slice(2, -1));    // El valor negativo empieza a contar desde el final

// 3. ITERAR VALORES DE UNA LISTA
const array1 = [1, 2, 3, 4, 5]
// Manera antigua (for)
for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
// Manera moderna ES6 (más eficiente)
array.forEach(valor => {
    console.log(valor);
})

// Buscar un valor dentro de una lista --> .find()
array1.find(valor => {
    if(valor === 1) {
        return true
    }
})

const listaObjetos = [
    {nombre: "Franky", edad: 27},
    {nombre: "Bridget", edad: 38},
    {nombre: "Allie", edad: 23}
]

// const objeto = listaObjetos.find(o => {
//     if(o.nombre === "Franky") {
//         return true
//     }
// })

// Otra forma:
// const objeto = listaObjetos.find(o => {
//     return o.nombre === "Franky"    // true
// })

// Otra forma
//const objeto = listaObjetos.find(o => o.nombre === "Franky")
// console.log(objeto.nombre);
// console.log(objeto.edad);

// Otra forma: creo una constante que acceda a un atributo (edad) y busco un objeto cuyo nombre sea igual a "Franky". Es decir, obtengo la edad de Franky
const { edad } = listaObjetos.find(o => o.nombre === "Franky")
console.log(edad);

// 4. MÉTODOS MÁS AVANZADOS
// .map() .filter() .reduce()
const ciudades = ["Madrid", "Bilbao", "Málaga", "Soria"]
const val = ciudades.forEach(ciudad => {
    console.log(ciudad);
    return 4
})

console.log(val);

// Para añadir un índice a cada elemento --> .map():
const ciudades2 = ciudades.map((valor, indice) => `${indice + 1} - ${valor}`)       // Función callback con dos valores
console.log(ciudades2);

// Obtener una serie de objetos que cumplan unas condiciones --> .filter()
// const mayores = listaObjetos.filter(obj => {
//     if(obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

// Otra forma:
const mayores = listaObjetos.filter(obj => obj.edad > 30)   // Devuelve true cuando se cumple y false cuando no
console.log(mayores);

// Obtener todos los objetos menos uno
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Allie")
console.log(nuevaLista);

// 
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);

