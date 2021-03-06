import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import LoginForm from "../components/loginForm";
import Logo from "../shared/Logo";
import pantallaPrueba from "../screens/pantalla_prueba";

const { width, height } = Dimensions.get("screen");

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
      flex: 1,
      justifyContent: "center",
      padding: 10,
      backgroundColor: "#373a40",
    },
    forgotPassword: {
      textAlign: "center",
      color: "white",
      marginTop: 10,
    },
  });
  
  export default Login;
  