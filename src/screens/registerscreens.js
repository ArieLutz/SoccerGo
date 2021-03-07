import React from "react";
import { Dimensions,StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RegisterForm from "../components/forms/registerForm";




const {width, height} = Dimensions.get("screen");

const register = ({navigation}) => {
    
    return (
        <View style={styles.container}> 
            <RegisterForm/>
            <TouchableOpacity
                onPress={() => {
                navigation.goBack();
                }}
            >
                <Text>¿Ya tienes una cuenta? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor:"#373a40",
        padding: 10,
    },
});

export default register;



