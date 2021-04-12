import React, {useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import { Button } from 'react-native-elements';
import CommentList from "../shared/CommentList";

import { Context as AuthContext } from "../providers/AuthContext";
import {Context as CommentContext} from "../providers/CommentContext";
import Toast from "react-native-toast-message";



const TodayScreem = ({ navigation }) => {
    const { state, signout } = useContext(AuthContext);
    const { state: noteState, getComments, clearMessage } = useContext(CommentContext);

    const LogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("loginscreen");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    
    useEffect(() => {
        getComments(state.user.id);
    }, []);

    useEffect(() => {
        if (noteState.errorMessage) {
        Toast.show({
            text2: noteState.errorMessage,
        });
        clearMessage(); 
        }
    }, [noteState.errorMessage]);

    return (
            
            <View style={styles.container}>
            <Toast ref={(ref) => Toast.setRef(ref)}/>
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
                <CommentList comments={noteState.comments} navigation={navigation}/>
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
