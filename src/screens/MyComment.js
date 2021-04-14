import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "../../src/firebase";
import CommentList from "../shared/CommentList";

import { Context as AuthContext } from "../providers/AuthContext";
import {Context as CommentContext} from "../providers/CommentContext";
import Toast from "react-native-toast-message";


//Pantalla que muestra los comentario del usuario
const ModifyComment = ({ navigation }) => {
    const { state } = useContext(AuthContext);
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

    if(!noteState){
        return(
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#656873"}}>
            </View>
        );
      };
    

    return (
        <View style={styles.container}>
            <Text style={styles.TextToday}>Mis comentarios</Text>
            <CommentList comments={noteState.comments} navigation={navigation} />
            <Toast ref={(ref) => Toast.setRef(ref)}/>
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
});

export default ModifyComment;
