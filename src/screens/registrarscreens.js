import React from "react";
import { Dimensions,StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const {width, height} = Dimensions.get("screen");

const registrar = () => {
    return (
        <View style={styles.container}>
            <Text h1 style={{color: 'white'}}> Registro </Text>
            <Input placeholder = "Usuario" /> 
            <Input placeholder = "Correo electronico"  />
            <Input placeholder = "Contraseña" />
            <Input placeholder = "Repetir contraseña" />
            <Button title = "Registrar"/>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor:"#373a40",
    },
});

export default registrar;

