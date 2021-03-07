import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import getEnVars from "../../../enviroment";

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId, 
} = getEnVars();

//valores de la configuracion de firebase
const firebaseConfig ={
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId, 
};

//Inicializar firebase  si no existe una instancia  ejecutandose 
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };

