import React, {useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import CommentList from "../shared/CommentsList";

import {Context as CommentContext} from "../providers/CommentsContext";
import Toast from "react-native-toast-message";


//Comentarios de todo los usuarios regustrados.
const TodayScreem = ({ navigation }) => {

    const { state: commentS, getComments, clearMessage } = useContext(CommentContext);

    const LogOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("loginscreen");
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    
    useEffect(() => {
        getComments();
    }, []);

    useEffect(() => {
        if (commentS.errorMessage) {
        Toast.show({
            text2: commentS.errorMessage,
        });
        clearMessage(); 
        }
    }, [commentS.errorMessage]);

    if(!commentS){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#656873"}}>
            </View>
        );
      };

    return (
            
            <View style={styles.container}>
            <Toast ref={(ref) => Toast.setRef(ref)}/>
                <Text style={styles.TextToday}>
                    Comentarios
                </Text>
                <CommentList comments={commentS.comments}/>
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
