
import React ,{  useState, useEffect, Component} from "react";
import { View,Title, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Card,ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { firebase } from "../../src/firebase";


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
            
             
            <Card style={{marginTop: -20 }} containerStyle={{backgroundColor: '#CCCED9', borderColor: "#CCCED9" }}>
            <Card.Title >Liga</Card.Title>
            <Card.Divider style={{backgroundColor: '#2089DC', marginBottom:-10}}/>
                <Card containerStyle={{backgroundColor: '#CCCED9', borderColor: "#CCCED9" }} style={{shadowColor: "#000"}}>
                    <View
                     style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20,
                        backgroundColor: '#CCCED9'
                      }}
                    >

                    <Text style={{marginBottom: 10, paddingRight:10, marginLeft:-10, fontWeight:"bold", fontSize:20}}>
                    Bayer Munich
                    </Text>

                    <Image
                    source={require("../img/Equipodefault1.png")}
                    style={{ width:70, height: 70, marginTop: -3}}
                    />
                    
                    <Text style={{ padding:10, fontWeight:"bold", fontSize:25}}>
                    VS
                    </Text>

                    <Image
                    source={require("../img/Equipodefault2.png")}
                    style={{ width:70, height: 70,  marginTop: -3}}
                    />

                    <Text style={{ marginBottom: 10, paddingLeft:10, fontWeight:"bold", fontSize:20}}>
                    Chelsea
                    </Text>
                    
                    </View>
                    
                </Card>
                <Card.Divider style={{marginTop: 5, backgroundColor: '#2089DC'}}/>
                <Button
                    icon={<Icon name='more' color='#ffffff' style={{paddingRight:5}} />}
                    buttonStyle={{borderRadius: 0, marginLeft: 15, marginRight: 15, marginBottom: 0}}
                    title='Comentar' 
                />
            </Card>

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
        alignItems: "center",
        backgroundColor: "#373A40",

    },
    TextToday: {
        fontSize: 20,
        color: "#ffff",
        fontWeight: "800",
        textAlign: "center",
        color: "white",
        marginTop: 3,
    },
    buttonStyle: {
        marginTop: 2
    },
});

export default TodayScreem;
