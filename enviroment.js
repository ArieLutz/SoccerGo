import Constants from "expo-constants";

const ENV = {
    dev: {
    
        apiUrl :    "https://allsportsapi.com/api/football/",
        apiKey :    "6925361e79865bba9729032b0eab2563f96f361a41514c4b315672126f99ea5b",//KEY de la API 
        apiImageURL : "https://allsportsapi.com/logo/"
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    //  esta variable va establecer verdadero cuando react-native este corriendo
    // en modo desarrollador y falso cuando sea publicado
    
    if(__DEV__){
        return ENV.dev;
    }
          

};


export default getEnvVars;