// Se importa Axios
// Aqui se tendra la informacion de nuestra API

import axios from "axios";
import getEnvVars from "../../enviroment";


//Variables de entorno
const {apiUrl} = getEnvVars();


//se crea la instancia de conexion

const instance = axios.create({

    baseURL: apiUrl
   
});


export default instance;