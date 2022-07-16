const boton = document.querySelector("#btn")
// console.log(boton)

boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    // Si aceptar --> ok, si no, nada
    // confirm("¿Confirmar?") && console.log("Ok");

    confirm("¿Confirmar?") 
    // Aceptar
    ? console.log("Ok") 
    // Cancelar
    : console.log("No");
   
    // Otra forma:
    // const respuesta = confirm("¿Seguro?")
    // if(respuesta) {
    //     console.log("Ok")
    // } else {
    //     console.log("No");
    // }


})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    // console.log("Tu nombre es " + nombre)
    nombre 
    ? console.log("Hola, " + nombre) 
    : console.log("No has introducido tu nombre");
})

const lista = [
    {
        nombre: "Franky",
        edad: 32
    },
    {
        nombre: "Bridget",
        edad: 38
    },
    {
        nombre: "Tess",
        edad: 6
    }
]

// console.log(lista);
console.table(lista)