
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
            
             
            <Card style={styles.CardPrincipal} containerStyle={styles.CardPrincipalContainer}>
            <Card.Title >Liga</Card.Title>
            <Card.Divider style={styles.FirstDivider}/>
                <Card containerStyle={styles.ContainerInf}>
                    <View  style={styles.InfoTeams} >

                    <Text style={styles.TitleTeam1}>
                    Bayer Munich
                    </Text>

                    <Image
                    source={require("../img/Equipodefault1.png")}
                    style={styles.LogoTeam1}/>
                    
                    <Text style={styles.VS}>
                    VS
                    </Text>

                    <Image
                    source={require("../img/Equipodefault2.png")}
                    style={styles.LogoTeam2}
                    />

                    <Text style={styles.TitleTeam2}>
                    Chelsea
                    </Text>
                    
                    </View>
                    
                </Card>
                <Card.Divider style={styles.SecondDivider}/>
                <Button
                    onPress={() => {navigation.navigate("CreateComment");}}
                    icon={<Icon name='more' color='#ffffff' style={{paddingRight:5}} />}
                    buttonStyle={styles.ButtonComent}
                    title='Comentar' 
                />
            </Card>

            <Button
                onPress={LogOut}
                style={styles.buttonStyle}
                title="Salir">
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
    CardPrincipal:{
        marginTop: -20 
    },

    CardPrincipalContainer:{
        backgroundColor: '#CCCED9', 
        borderColor: "#CCCED9"
    },
    
    FirstDivider: {
        backgroundColor: '#2089DC',
        marginBottom:-10
    },

    ContainerInf : {
        backgroundColor: '#CCCED9',
        borderColor: "#CCCED9", 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    InfoTeams: {
        flexDirection: "row",
        height: 100,
        padding: 20,
        backgroundColor: '#CCCED9'
    },

    TitleTeam1 : {
        marginBottom: 10, 
        paddingRight:10, 
        marginLeft:-10, 
        fontWeight:"bold", 
        fontSize:20
    },

    LogoTeam1 : {
        width:70, 
        height: 70, 
        marginTop: -3
    },

    VS : {
        padding:10, 
        fontWeight:"bold", 
        fontSize:25
    },

    LogoTeam2 : {
        width:70, 
        height: 70,  
        marginTop: -3
    },

    TitleTeam2 : {
        marginBottom: 10, 
        paddingLeft:10, 
        fontWeight:"bold", 
        fontSize:20
    },

    SecondDivider: {
        marginTop: 8, 
        backgroundColor: '#2089DC'
    },

    ButtonComent : {
        borderRadius: 0, 
        marginLeft: 15, 
        marginRight: 15, 
        marginBottom: 0
    },

    TextToday: {
        fontSize: 20,
        color: "#ffff",
        fontWeight: "800",
        textAlign: "center",
        color: "white",
        marginTop: 3,
    },

});

export default TodayScreem;
