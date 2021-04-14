import React from "react";
import { Dimensions,StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RegisterForm from "../components/forms/registerForm";


const register = ({navigation}) => {
    
    return (
        <ScrollView style={styles.container}> 
            <RegisterForm navigation={navigation}/>
            <TouchableOpacity
                onPress={() => {
                navigation.goBack();
                }}
            >
                <Text style={styles.text}>¿Ya tienes una cuenta? Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#9a98a6",
        padding: 10,
    },

    text:{
        color:"white",
        textAlign: "center",
    },
});

export default register;



