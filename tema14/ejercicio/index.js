const btn = document.querySelector("#boton")
btn.addEventListener("click", () => {
    alert("Click en el botón")
})

$(() => {
    $("#btn-jq").click(() => {
        console.log("Hola, estoy usando jQuery")
    })
})