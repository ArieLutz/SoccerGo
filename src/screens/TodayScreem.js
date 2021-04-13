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
<<<<<<< HEAD
    
    useEffect(() => {
        getComments(state.user.id);
    }, []);

    useEffect(() => {
        if (commentState.errorMessage) {
        Toast.show({
            text2: commentState.errorMessage,
        });
        clearMessage(); 
        }
    }, [commentState.errorMessage]);

=======
>>>>>>> saudyDev
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
<<<<<<< HEAD
                <Button
                    onPress={() => {navigation.navigate("CommentScreem");}}
                    style={styles.buttonStyle}
                    title="Comentarios">
                </Button>
                <CommentList comments={commentState.comments} navigation={navigation}/>
=======
                
>>>>>>> saudyDev
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
