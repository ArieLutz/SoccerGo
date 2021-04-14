
import React ,{  useState, useEffect} from "react";
import { View, Text, StyleSheet, Image,  ImageBackground, Dimensions } from 'react-native';
import {Card} from 'react-native-elements';
import { firebase } from "../firebase";

const { width} = Dimensions.get("window");

//librerias de conexion
import index from "../api/index";
import getEnvVars from "../../enviroment";

const {apiKey} = getEnvVars();

const MatchesScreem = ({ navigation }) => {

          //maneja el estado de la informacion de covid en las peticiones
          const [Equipo1, setEquipo1] = useState(null);
          const [Equipo2, setEquipo2] = useState(null);
     
          const [seterrorConsulta] = useState(false); //variable para el estado del try catch
    
          //Funcion que genera numeros randos para el id del equipo
          function getRandomNumbers() {
            const numero = Math.random() * (2649 - 2621) + 2621;
    
            return Math.round(numero);
          }

          //Funcion que genera numeros randos para los resultados
          function getRandomNumbersGoals() {
            const numero = Math.random() * (7 - 1) + 1;
    
            return Math.round(numero);
          }


              //CONSULTA A LA API
              // Las peticiones se hacen mediante funciones asincronas(cualquier momento)
              const getEquiposPorId = async () => {
                try {

                    var  response = [];
                    //Consultar a la API de Covid19
                    console.log(apiKey);
                    //nuestros valores para este backend Traer la información de el mundo
                    var response = await index.get(`?&met=Teams&teamId=${getRandomNumbers()}&APIkey=${apiKey}`); 
                    // aqui la variable de estado ya recibio los valores de la peticion
                    setEquipo1(response.data);  
                    
                    var response = await index.get(`?&met=Teams&teamId=${getRandomNumbers()}&APIkey=${apiKey}`); 
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
                <Text>...</Text>
              </View>
            )
          }


    const LogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("loginscreen");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    //Pruebas de acceder a los datos de la API
    
    //console.log(Equipo1, Equipo2);
    //console.log(Equipo1.result[0].team_name);
    //console.log(getRandomNumbers());
    //console.log(getRandomNumbersGoals());


    //Informaciosn de los resultados del partido
    return (
        <View style={styles.container}>
           <Card style={styles.CardPrincipal} containerStyle={styles.CardPrincipalContainer}>
                <Card.Title >Resultados</Card.Title>
                <Card.Divider style={styles.FirstDivider}/>
                    <Card containerStyle={styles.ContainerInf}>
                        <View  style={styles.InfoTeams} >

                            <Text style={styles.TitleTeam1}>
                            {Equipo1.result[0].team_name}
                            </Text>

                            <Text style={styles.TitleTeam2}>
                            {Equipo2.result[0].team_name}
                            </Text>
                        
                        </View>

                        
                        <ImageBackground source={require("../img/marcador.png")} style={styles.image}>
                            <View style={{flexDirection: "row"}}>
                                <Image
                                 source={{ uri: Equipo1.result[0].team_logo }}
                                style={styles.LogoTeam1}/>
                                <Text style={styles.Result1}>0{getRandomNumbersGoals()}</Text>
                                <Text style={styles.Separator}>|</Text>
                                <Text style={styles.Result2}>0{getRandomNumbersGoals()}</Text>
                                <Image
                                source={{ uri: Equipo2.result[0].team_logo }}
                                style={styles.LogoTeam2}
                                />
                                
                            </View> 
                            <Text style={styles.Final}>
                                Final
                            </Text>
                        </ImageBackground>
                        
                        
                    </Card>


                    <Card.Divider style={styles.SecondDivider}/>
                    
            </Card>

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
        backgroundColor: '#CCCED9',
        marginBottom: -50,
   
    },

    TitleTeam1 : {
       
        marginLeft:10, 
        fontWeight:"bold", 
        fontSize:20
    },


    LogoTeam1 : {
        width:55, 
        height: 55, 
        marginLeft:20,
        marginRight:10
        
    },

    Final : {
        padding:10, 
        fontWeight:"bold", 
        fontSize:25,
        color: "white",
        marginLeft:width*.27

    },

    LogoTeam2 : {
        width:55, 
        height:55,  
        marginTop: -2,
        paddingRight: width*-.8
    },

    TitleTeam2 : {
        
        fontWeight:"bold", 
        fontSize:20,
        paddingLeft: width*.3
        
    },

    SecondDivider: {
        marginTop: 8, 
        backgroundColor: '#2089DC'
    },

    image: {
        flex: 1,
        resizeMode: "contain",
        height:100,
        paddingRight:-10,
        marginTop:10
      },

    Result1: {
    color: "white",
    fontSize:35,
    fontWeight: "bold",
    paddingLeft: 30,
    marginRight:5
    
    },

    Separator: {
        color: "white",
        fontSize:35,
        fontWeight: "bold",
        marginRight:10
        
        },

    Result2: {
        color: "white",
        fontSize:35,
        fontWeight: "bold",
        
        paddingRight: 45,
        
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

export default MatchesScreem;
