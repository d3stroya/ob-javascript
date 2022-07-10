// - Una función que admita un parámetro "num", 
// y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
function fibonacci(num) {
    array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    for(let i = 0; i <= num; i++) {
        console.log(array[i]);
    }
}
console.log(fibonacci(10));
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función