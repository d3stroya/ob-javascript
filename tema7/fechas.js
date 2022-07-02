// 1. Definir fecha

// Fecha del momento
const fecha1 = new Date()
console.log(fecha1);

// Fecha por año, mes, día, hora, minutos, segundos, milisegundos
const fecha2 = new Date(1987, 4, 20, 17, 32, 11, 192)    // Los meses incializan en 0
console.log(fecha2);

// Fecha por milisegundos a partir del 1 de enero de 1970 a las 01:00:00
const fecha3 = new Date(100000000000)
console.log(fecha3);    // Mide en milisegundos

// Fecha por string
const fecha4 = new Date("October 13, 1979, 18:23:02")
console.log(fecha4);

// 2. Comparar si una fecha es mayor que otra
console.log(fecha1 > fecha2);

// Ver si dos fechas son iguales
const fecha5 = new Date(1987, 4, 20, 17, 32, 11, 192)
console.log(fecha2 === fecha5); // ERROR

// Hay que pasar las fechas a milisegundos para poder compararlas
console.log(fecha2.getTime() === fecha5.getTime()); // true

// 3. Obtener el día, mes y el año de una fecha --> getDate(), .getMonth(), getFullYear()
console.log(fecha2.getDate());
console.log(fecha2.getMonth() + 1);
console.log(fecha2.getFullYear());

// 4. Mostrar fecha en un string --> .toLocalDateString()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleString('es', 'ES'));
console.log(fecha2.toLocaleString('en', 'US'));
