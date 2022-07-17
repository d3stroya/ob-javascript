let marker, marker1, marker2, marker3, map;

function initMap() {
    const position = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    })

    marker = new google.maps.Marker({
        position: position,
        map,
        title: "Uluru"
    })

    marker1 = new google.maps.Marker({
        position: {
            lat: 37.959003,
            lng: -8.886557
        },
        map,
        title: "Sines"
    })

    marker2 = new google.maps.Marker({
        position: {
            lat: 40.047833,
            lng: -5.865682
        }, 
        map,
        title: "Arroyo"
    })

    marker3 = new google.maps.Marker({
        position: {
            lat: 43.221621,
            lng: -5.941899
        },
        map,
        title: "Angliru"
    })

    // Obtener geolocalización
    geoposiciona()
}

function geoposiciona() {
    if(navigator.geolocation) {
        const geoloc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoloc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización.")
    }
}

function centraMapa(position) {
    const newPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(newPos)
    map.setCenter(newPos)
}

function onError(error) {
    console.log(error)
}
