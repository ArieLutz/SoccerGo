// Se importa Axios
// Aqui se tendra la informacion de nuestra API

import axios from "axios";
import getEnvVars from "../../enviroment";


//Variables de entorno
const {apiURL} = getEnvVars();


//se crea la instancia de conexion

const instance = axios.create({

    baseURL: "https://allsportsapi.com/api/football",
    headers: { }

});


export default instance;