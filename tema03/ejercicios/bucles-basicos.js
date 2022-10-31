// 1. Imprimer números del 0 al 10
const numeros = []
// FOR
for(i = 0; i <= 10; i++) {
    console.log(i)
    numeros.push(i)
}

// FOREACH
numeros.forEach(numero => console.log(numero))

// WHILE
let count = 0
while(count <= 10) {
    console.log(count)
    count += 1
}

// 2. Imprime números pares
numeros.forEach(numero => {
    if(numero % 2 == 0) {
        console.log(numero);
    }
})

// 3. Imprime números impares
numeros.forEach(numero => {
    if(numero % 2 != 0) {
        console.log(numero);
    }
})