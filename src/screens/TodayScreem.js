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
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#373A40",

    },
});

export default TodayScreem;
