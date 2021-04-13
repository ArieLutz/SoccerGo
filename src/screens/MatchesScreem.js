import React from "react";
import { View,Title, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import {Card,ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { firebase } from "../../src/firebase";

const { width, height } = Dimensions.get("window");

const MatchesScreem = ({ navigation }) => {

    const LogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("loginscreen");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <View style={styles.container}>
           <Card style={styles.CardPrincipal} containerStyle={styles.CardPrincipalContainer}>
                <Card.Title >Resultados</Card.Title>
                <Card.Divider style={styles.FirstDivider}/>
                    <Card containerStyle={styles.ContainerInf}>
                        <View  style={styles.InfoTeams} >

                            <Text style={styles.TitleTeam1}>
                            Bayer Munich
                            </Text>

                            <Text style={styles.TitleTeam2}>
                            Chelsea
                            </Text>
                        
                        </View>

                        
                        <ImageBackground source={require("../img/marcador.png")} style={styles.image}>
                            <View style={{flexDirection: "row"}}>
                                <Image
                                source={require("../img/Equipodefault1.png")}
                                style={styles.LogoTeam1}/>
                                <Text style={styles.Result1}>02</Text>
                                <Text style={styles.Separator}>|</Text>
                                <Text style={styles.Result2}>04</Text>
                                <Image
                                source={require("../img/Equipodefault2.png")}
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
        backgroundColor: '#CCCED9',
        marginBottom: -50,
    },

    TitleTeam1 : {
       
        paddingRight:30, 
        marginLeft:-10, 
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
        
        paddingLeft:70, 
        fontWeight:"bold", 
        fontSize:20,
        paddingLeft:100
    },

    SecondDivider: {
        marginTop: 8, 
        backgroundColor: '#2089DC'
    },

    image: {
        flex: 1,
        resizeMode: "contain",
        height:100,
        paddingRight:-10
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
