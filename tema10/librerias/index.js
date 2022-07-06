// Instalar axios para hacer llamadas a servicios internos: npm i axios
// Crea una carpeta con archivos de la librería y un package-lock.json

// Importar axios
import axios from "axios";

// Hacer una llamada http
axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(function(response) {
        // handle success
        console.log(response.data);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })