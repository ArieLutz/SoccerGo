import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "./button";
import { validate } from "email-validator";
import { firebase } from "../firebase";
import Alert from "../shared/Alert";

const loginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

    // Verifica que se ingresan los datos del email y el password
    const handleVerify = (input) => {
      if (input === "email") {
        if (!email) setEmailError(true);
        else if (!validate(email)) setEmailError(true);
        else setEmailError(false);
      } else if (input === "password") {
        if (!password) setPasswordError(true);
        else setPasswordError(false);
      }
    };
  
    const handleLogin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => console.log(response))
        .catch((error) => {
          setError(error.message);
        });
    };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <View style={styles.input}>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="envelope" />}
          value={email}
          onChangeText={setEmail}
          onBlur={() => {
            handleVerify(email);
          }}
          errorMessage={
            emailError
              ? "Por favor ingrese su cuenta de correo electrónico"
              : null
          }
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" />}
          value={password}
          onChangeText={setPassword}
          onBlur={() => {
            handleVerify(password);
          }}
          errorMessage={
            passwordError
              ? "Por favor ingrese su cuenta de correo electrónico"
              : null
          }
        />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <Button title="Iniciar Sesión"/>
      </TouchableOpacity>
      <Button title="Regístrate"/>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        borderRadius: 35,
        backgroundColor: "white",
        padding: 0,
        margin: 7
    },
});

export default loginForm;
