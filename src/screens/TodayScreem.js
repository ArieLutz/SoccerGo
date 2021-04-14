import React from "react";
import { View, StyleSheet } from 'react-native';
import Matches from "../shared/Matches";


const TodayScreem = ({navigation}) => {

    return (
        <View style={styles.container}>
           
            <Matches navigation={navigation}/> 
            <Matches navigation={navigation}/> 
            <Matches navigation={navigation}/>      
             
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
