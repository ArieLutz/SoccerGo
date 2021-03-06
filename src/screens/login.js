import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar
} from "react-native";
import LoginForm from "../components/loginForm";
import Logo from "../shared/Logo";
import pantallaPrueba from "../screens/pantalla_prueba";
import HeaderP from "../shared/HeaderP";

const { width, height } = Dimensions.get("screen");

//Lineas dentro del return para el header
//<StatusBar barStyle="dark-content"/>
//<HeaderP/>
const Login = ({ navigation }) => {
    return (
      
        <View style={styles.container}>
            
            <Text>Logo</Text>
            <LoginForm/>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      
      backgroundColor: "#373a40",
    },
    forgotPassword: {
      textAlign: "center",
      color: "white",
      marginTop: 10,
    },
  });
  
  export default Login;
  