const hTexto = document.getElementById("h-Texto")

console.log(hTexto)

// Evento personalizado
hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    // Disparar el evento
    hTexto.dispatchEvent(evento)
}