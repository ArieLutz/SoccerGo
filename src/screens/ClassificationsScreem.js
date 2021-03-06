import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { firebase } from "../../src/firebase";


//Clasificatoria 
const ClassificationsScreem = ({ navigation }) => {

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
                Tablas de Posiciones.
            </Text>
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

export default ClassificationsScreem;
