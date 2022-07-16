// $(selector).accion()
// $("li").hide()

// Ejecutar cuando el documento ya esté listo
// $(document).ready(() => {

// })

// Otra forma:
$(() => {
    // Selector por id: #id
    // Selector por clas: .class
    // $("#el-1").hide()
    // $(".hide-btn").hide()

    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(() => {
        console.log("Ocultando...")
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        // Añadir elemento al final
        // $("ul").append("<li>Nuevo elemento</li>")
        // Añadir al principio
        $("ul").prepend("<li>Nuevo elemento</li>")
    })

    $("li").mouseenter((elemento) => {
        elemento.target.style.color = "blue"
    })

    $("li").mouseleave(elemento => {
        elemento.target.style.color = "black"
    })
})