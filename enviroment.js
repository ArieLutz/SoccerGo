import Constant from "expo-constants";

const ENV = {
    dev: {
        webAPIkey : "16026afe5861dc609f4bd454f72241d2", //KEY de la API 
        apiURL :    "https://es.besoccer.com/api"
    },
    production: {
        webAPIkey : "16026afe5861dc609f4bd454f72241d2", //KEY de la API 
        apiURL :    "https://es.besoccer.com/api"

    }
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    //  esta variable va establecer verdadero cuando react-native este corriendo
    // en modo desarrollador y falso cuando sea publicado
    if (__DEV__)  return ENV.dev;
       
    else if (env === "production" || env === "default")  return ENV.production;
       
       

};


export default getEnvVars;