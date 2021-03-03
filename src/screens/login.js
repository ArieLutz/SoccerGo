import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import LoginForm from "../components/loginForm"

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text>logo</Text>
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
    },
  });
  
  export default Login;
  