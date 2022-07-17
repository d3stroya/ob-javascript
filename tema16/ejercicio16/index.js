const secciones = document.querySelectorAll(".seccion")
const parrafos = document.querySelectorAll(".parrafo")
const papelera = document.querySelector("#papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragged")
        event.dataTransfer.setData("id", parrafo.id)

        const img_fantasma = document.querySelector(".fav")
        event.dataTransfer.setDragImage(img_fantasma, -10, -20)
    })

    parrafo.addEventListener("dragend", event => {
        parrafo.classList.remove("dragged")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    confirm("¿Seguro que quieres eliminar '" + parrafo.innerText + "'?") 
    ? parrafo.remove()
    : console.log("Operación cancelada");
})
 