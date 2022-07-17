// 1. Obtener arrastrables
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// 2. Añadir evento para cada elemento
parrafos.forEach(parrafo => {
    // Evento para el inicio del arrastre
    parrafo.addEventListener("dragstart", evento => {
        // 3. Definir acciones al arrastrar
        console.log("Estoy arrastrando el párrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        evento.dataTransfer.setData("id", parrafo.id)

        // Imagen fantasma
        const img_fantasma = document.querySelector(".img-fantasma")
        evento.dataTransfer.setDragImage(img_fantasma, 0, 0)
    })
    // 4. Definir acciones al soltar
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento => {
        evento.preventDefault()
        evento.dataTransfer.dropEffect = "move"
        // console.log("Drag over")
    })
    seccion.addEventListener("drop", evento => {
        console.log("Drop")
        // Transferir información a través de draggables
        const id_parrafo = evento.dataTransfer.getData("id")
        // console.log(id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer