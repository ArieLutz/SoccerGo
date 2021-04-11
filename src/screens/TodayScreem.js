
import React ,{  useState, useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import { Button } from 'react-native-elements';

//librerias de conexion
import index from "../api/index";

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
      const [EquiposPorId, setEquiposPorId] = useState(null);

      const [errorConsulta, seterrorConsulta] = useState(false); //variable para el estado del try catch

      
      //CONSULTA A LA API
              // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
              const getEquiposPorId = async () => {
                try {
                    //Consultar a la API de Covid19
                    //nuestros valores para este backend Traer la información de el mundo
                    const response = await index.get(`?&met=Teams&teamId=2616&APIkey=6925361e79865bba9729032b0eab2563f96f361a41514c4b315672126f99ea5b`); 
                    // aqui la variable de estado ya recibio los valores de la peticion
                    setEquiposPorId(response.data);        
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
        if (!EquiposPorId) {
            return (
              <Content>
                <Spinner color="blue"/>
              </Content>
            )
          }

    
    console.log(getEquiposPorId);
    
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
