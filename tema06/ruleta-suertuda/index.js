
let gajos = [
    100,
    "pierde turno",
    300,
    25,
    200,
    "quiebra",
    400,
    "pierde turno",
    1000,
    "quiebra",
    "comodín",
    50,
    "ayuda final"
]

function mostrarResultado() {
    let v = document.getElementById("tirada").value
    let r = document.getElementById("resultado").innerHTML = tirar(v)
    
}

function tirar(v) {
    let vueltas = v / gajos.length
    let extra = v % gajos.length 

    gajos.sort(() => Math.random() - Math.random())
    
    while(vueltas.toFixed() > 1) {
        let count = 0
        gajos = gajos.concat(gajos)
        count ++
        console.log("Vuelta " + count)
        vueltas --
    }
    for(i = extra; i > 0; i--) {
        return gajos[i]
    }
}


