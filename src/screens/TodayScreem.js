import React from "react";
import { View, Text, StyleSheet } from 'react-native';




const TodayScreem = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.TextToday}>
               Mostrar juegos del Dia
            </Text>
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

export default TodayScreem;
