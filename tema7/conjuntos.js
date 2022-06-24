const nombres = ["Ana", "Pedro", "Luisa"]

// Creo un nuevo set
const setNombres = new Set(nombres)

// Añado nombre duplicado
nombres.push("Ana")
setNombres.add("Ana")

// Agrego nuevo nombre
setNombres.add("JavaScript")
console.log(setNombres);
