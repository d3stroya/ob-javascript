
const numeros = []

for(i = 0; i < 50; i++) {
    let n = Math.random() * 100000000000000000
    numeros.push(n)
}
console.log(numeros);

// 1. Ordenar la lista de mayor a menor
const ordenMayor = numeros.sort((a, b) => b - a)
console.log(ordenMayor)

// 2. Ordenar de menor a mayor
const ordenMenor = numeros.sort((a, b) => a - b)
console.log(ordenMenor)

// 3. Crear array con los divisibles entre 3
console.log("Divisibles por 3");
const divisibles3 = [3]
numeros.forEach(numero => {
    if(numero % 3 === 0) {
        divisibles3.push(numero)
    }
})
console.log(divisibles3);

// 4. Comprobar si el número 7420093 está en divisibles3 o en numeros
const divExiste = divisibles3.some(valor => valor === 3)
if(divExiste) {
    console.log("Match!");
} else {
    console.log("No match :(");
}

const numExiste = numeros.some(valor => valor === 3)
if(numExiste) {
    console.log("Match!");
} else {
    console.log("No match :(");
}

// 5. Comprobar que un número está en divisibles3 o en numeros
if(divExiste || numExiste) {
    console.log("Match!")
} else {
    console.log("nope");
}

// 6. Comprobar que un número está en divisibles3 y en numeros
const res = divExiste && numExiste ? true : false
console.log(res);
