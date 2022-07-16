const nombre = "Anabel"
const apellido = "Moreno"

const objeto = {
    nombre,
    apellido
}

// Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("nombreCompleto", JSON.stringify(objeto))

// Almacena el objeto anterior en la LocalStorage
localStorage.setItem("nombreCompleto", JSON.stringify(objeto))

// Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
now = new Date();
document.cookie="cookie=nombreCompleto;expires" 
+ new Date(now.getTime() + 20 * 60 * 1000).toUTCString()


