
import React ,{  useState, useEffect, Component} from "react";
import { View,Title, Text, StyleSheet, Image,ScrollView, TouchableOpacity } from 'react-native';
import {Card,ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { firebase } from "../../src/firebase";

import Matches from "../shared/Matches";


const TodayScreem = ({ navigation }) => {




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
