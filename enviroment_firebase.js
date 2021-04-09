import Constant from "expo-constants";

const ENV = {
    dev: {
        apiKey: "AIzaSyCag-hEEwe_zA2WQbs2MkNG2g68oKZhN_Y",
        authDomain: "soccer-go-app.firebaseapp.com",
        databaseURL: "https://soccer-go-app-default-rtdb.firebaseio.com/",
        projectId: "soccer-go-app",
        storageBucket: "soccer-go-app.appspot.com",
        messagingSenderId: "511030700413",
        appId: "1:511030700413:web:bfe1a9a7e6a43bbd50c414",
    },
    production: {
        apiKey: "AIzaSyCag-hEEwe_zA2WQbs2MkNG2g68oKZhN_Y",
        authDomain: "soccer-go-app.firebaseapp.com",
        databaseURL: "https://soccer-go-app-default-rtdb.firebaseio.com/",
        projectId: "soccer-go-app",
        storageBucket: "soccer-go-app.appspot.com",
        messagingSenderId: "511030700413",
        appId: "1:511030700413:web:bfe1a9a7e6a43bbd50c414",
    }
};

const getEnvVars = ( env = Constant.manifest.releaseChannel) =>{
    if (__DEV__) return ENV.dev;
    else if (env == "production" || env == "default") returnENV.production;
};

export default getEnvVars;