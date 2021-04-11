
import React ,{  useState, useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import { Button} from 'react-native-elements';

//librerias de conexion
import index from "../api/index";
import getEnvVars from "../../enviroment";

const {apiKey} = getEnvVars();

const TodayScreem = ({ navigation }) => {

    const LogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("loginscreen");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

      //maneja el estado de la informacion de covid en las peticiones
      const [Equipo1, setEquipo1] = useState(null);
      const [Equipo2, setEquipo2] = useState(null);

      const [errorConsulta, seterrorConsulta] = useState(false); //variable para el estado del try catch

      
      //CONSULTA A LA API
              // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
              const getEquiposPorId = async () => {
                try {

                    var  response = [];
                    //Consultar a la API de Covid19
                    console.log(apiKey);
                    //nuestros valores para este backend Traer la información de el mundo
                    var response = await index.get(`?&met=Teams&teamId=2616&APIkey=${apiKey}`); 
                    // aqui la variable de estado ya recibio los valores de la peticion
                    setEquipo1(response.data);  
                    
                    var response = await index.get(`?&met=Teams&teamId=2617&APIkey=${apiKey}`); 
                    // aqui la variable de estado ya recibio los valores de la peticion
                    setEquipo2(response.data);

                } catch (errorConsulta) {
                    //errorConsulta al momento de ejecutar la peticion
                    seterrorConsulta(true);
                }
            };
    
      // Efecto secundario que ejecuta la consulta a la API

      useEffect(() => {
        getEquiposPorId();

    }, []);

    //los componentes se renderizan antes de ser mostrados y nunca
        //deben retornar null
        if (!Equipo1 || !Equipo2) {
            return (
              <View>
                <Text>Cargando...</Text>
              </View>
            )
          }

    
    console.log(Equipo1, Equipo2);
    
    return (
        <View style={styles.container}>
            <Text style={styles.TextToday}>
                Mostrar juegos del Dia
            </Text>
            <Button
                onPress={LogOut}
                style={styles.buttonStyle}
                title="Salir">
            </Button>
            <Button
                onPress={() => {navigation.navigate("CreateComment");}}
                style={styles.buttonStyle}
                title="Crear comentario">
            </Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#373A40",
    },
    TextToday: {
        fontSize: 20,
        color: "#ffff",
        fontWeight: "800",
        textAlign: "center",
        color: "white",
        marginTop: 10,
    },
    buttonStyle: {
        marginTop: 2
    },
});

export default TodayScreem;
