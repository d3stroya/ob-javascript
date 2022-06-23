// ORDENAR ARRAYS  --> .sort()

const numeros = [2, -6, 87, 4, -78, 25, 9]
console.log(numeros);

numeros.sort((a, b) => {
    if(a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {    // a === b
        return 0
    }
})
console.log(numeros);

// Ordenar arrays numericos
const arrayNumerico = [5,9,2,4,8]

// De menor a mayor
arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico);

// De mayor a menor
arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico);

// Ordenar array de objetos
const listaObjetos = [
    {nombre: "Franky", edad: 27},
    {nombre: "Bridget", edad: 38},
    {nombre: "Allie", edad: 23}
]

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos);

// COMPARAR LISTAS --> .every()
const res = numeros.every(valor => {
    if(typeof valor < 0) {
        return true
    } else {
        false
    }
})
console.log(res);

const res1 = numeros.every(valor => valor > 0)
console.log(res1);

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
const ar3 = [1, 2, 3, 6]

console.log(ar1 === ar2);   // Las listas no pueden compararse de esta forma

const compararArrays = (array1, array2) => {
    if(array1.length !== array2.length) return false
    const resultado = array1.every((valor, i) => valor === array2[i])
    return resultado
}   // Devuelve true si todos los valores son iguales y false si no lo son
console.log(compararArrays(ar1, ar2));
console.log(compararArrays(ar1, ar3));
