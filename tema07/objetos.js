// Objetos
const obj = {
    id: 6124,
    nombre: "Franky",
    apellido: "Doyle",
    isDev: false,
    librosFav: ["El eterno retorno", "The kite"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.apellido);
console.log(obj["4-juegos"]);

// Acceder a propiedades a través de variables
const prop = "isDev"
console.log(obj[prop]);

// Replicar un objeto
const obj2 = obj
console.log(obj2);

// Al modificar el objeto 2, modifica también el 1, porque los dos objetos apuntan al mismo lugar en memoria.
obj2.nombre = "Bridget"
console.log(obj2.nombre);   // Bridget
console.log(obj.nombre);    // Bridget

// Duplicar un objeto bien
const obj3 = { ...obj }

console.log(obj3.nombre);   // Bridget
console.log(obj.nombre);    // Bridget

obj.nombre = "Franky"

console.log(obj.nombre);    // Franky
console.log(obj3.nombre);   // Bridget

// Ordenar listas de objetos en función de una propiedad --> .sort()
const listaPeliculas = [
    {titulo: "Toy Story", fecha: 1995},
    {titulo: "Amelie", fecha: 2001},
    {titulo: "Vivir", fecha: 1952},
    {titulo: "Las niñas", fecha: 2020},
    {titulo: "La soga", fecha: 1984}
]
// Ordena por fecha, de menor a mayor
console.log(listaPeliculas.sort((a, b) => a.fecha - b.fecha));