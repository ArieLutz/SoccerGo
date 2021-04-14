<<<<<<< HEAD
import React, {useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import { Button } from 'react-native-elements';
//import CommentList from "../shared/CommentList";


import { Context as AuthContext } from "../providers/AuthContext";
import {Context as CommentContext} from "../providers/CommentContext";




const TodayScreem = ({ navigation }) => {
    const { state, signout } = useContext(AuthContext);
    const { state: commentState, getComments, clearMessage } = useContext(CommentContext);

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
=======
import React from "react";
import { View, StyleSheet } from 'react-native';
import Matches from "../shared/Matches";


const TodayScreem = () => {

    return (
        <View style={styles.container}>
           
            <Matches/> 
            <Matches/> 
            <Matches/>      
             
        </View>
    );
>>>>>>> devAriel
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#373A40",

    },
});

export default TodayScreem;
