// Creo una variable que contiene la lista de la compra
const listaCompra = [
    "Tomates",
    "Lechuga",
    "Yogures",
    "Zumo",
    "Pan"
]
// Añado un elemento
listaCompra.push("Aceite de Girasol")
// Elimino el mismo elemento
listaCompra.pop()

// Creo una constante con una lista de objetos de películas
const peliculasFav = [
    {titulo: "Ameliè", director: "Jean-Pierre Jeunet", fecha: 2001},
    {titulo: "Vivir", director: "Akira Kurosawa", fecha: 1952},
    {titulo: "Toy Story", director: "John Lasseter", fecha: 1995}
]

// Filtro las películas posteriores a 2010
const posteriores = peliculasFav.filter(fecha => fecha > 2010)
// Creo una lista con los directores
const directores = peliculasFav.map(peli => peli.director)
// Creo una lista con los títulos
const titulos = peliculasFav.map(peli => peli.titulo)
// Creo una nueva lista concatenando directores y películas
const dirTit = directores.concat(titulos)
// Lo mismo pero con el factor de propagación
const dirTitProp = [...directores, ...titulos]
