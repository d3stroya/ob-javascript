// Redondeo
// toFixed(x)
let a = 3.3;
let b = 18432;
console.log(a.toFixed(4));
console.log(b.toFixed(2));

// toPrecision(x)
console.log(b.toPrecision(7));

// Operador .valueOf(): obtiene valores numéricos a partir de literales
let c = new Number(3);
console.log(c.valueOf());

let str = "hola"
console.log(str.valueOf());

// NaN (Not a Number)
let n = Number("adios")
console.log(n);
console.log(isNaN(n));

// Infinity
let numerador = 19
let divisor = 0
let divisor2 = null;
console.log(numerador / divisor);
console.log(numerador / divisor2);

// Convertir string a valores numéricos con Number, parseInt y parseFloat
let num = "5.89"
let num2 = 19
console.log(num + num2);    // Error de concepto
console.log(typeof(num));
console.log(Number(num) + num2);

console.log(parseInt(num)); // al pasarlo a entero, obvia los decimales
console.log(parseFloat(num));

// Números hexadecimales
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16));

// Obtener valores máximo y mínimo
let min_precision = Number.EPSILON  // El número más pequeño con el que podemos trabajar en js
let min_valor_JS = Number.MIN_VALUE // El valor más pequeño que podemos obtener
let max_valor_JS = Number.MAX_VALUE // El valor máximo obtenible en js

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);