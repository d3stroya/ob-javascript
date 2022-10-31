/**
 * Función que reciba por parámetro una Date y nos diga cuántos días faltan para Navidad (Dec 25, 2022)
 */

 export default function daysToXmas(date) {
     // Defino la fecha de navidad
     const xmas = new Date('Dec 25, 2021')
     // Paso los milisegundos a días
     const divisor = 1000 * 60 * 60 * 24
     // Configuro date para que su hora sea 00:00:00
     date.setHours(0)
     date.setMinutes(0)
     date.setSeconds(0)
     date.setMilliseconds(0)
     // Resto a la fecha de navidad la fecha pasada por parámetro 
     // y divido por los milisegundos correspondientes a las 24 horas / día
     return (xmas - date) / divisor
}

console.log(daysToXmas(new Date('Dec 1, 2021')))
