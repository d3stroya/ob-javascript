// LOCAL STORAGE

// 1. Crear item
localStorage.setItem("nombre", "Ana")
localStorage.setItem("nombre", "Franky")

// 2. Recuperar item
console.log(localStorage.getItem("nombre"))

// stringify: convierte objeto o array en string
localStorage.setItem("persona", JSON.stringify({nombre: "Franky", edad: 31}))
// parse: convierte string en objeto
console.log(JSON.parse(localStorage.getItem("persona")))

// 3. Eliminar item
localStorage.removeItem("nombre")

// SESION STORAGE
// 1. Crear item
sessionStorage.setItem("nombre2", "Bridget")

// 2. Recuperar item
console.log(sessionStorage.getItem("nombre2"))

// 3. Eliminar item
sessionStorage.removeItem("nombre2")

// COOKIES
// Acceder a cookies
console.log(document.cookie) 

// Configurar caducidad
document.cookie = "caducidad=Nombre;expires=" 
+ new Date(2023, 0, 1).toUTCString()

// Crear nueva cookie
document.cookie = "nombreCookie=AnaCookie"


