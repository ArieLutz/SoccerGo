import React, {useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text,} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { SocialIcon } from 'react-native-elements';
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";

//Componente del formulario de login 

const loginForm = ({navigation}) => {

  const simpleAlertHandler = () => {
    //Se crea con el fin de mandar una alerta al usuario cuando entre a
    //las opcion de recuperar cuenta
    alert('Se ha enviado un correo de verificación a su correo :)');
}


  const { state, signin, clearErrorMessage, loginWithFacebook } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  

  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

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

    const handlerloginWithFacebook = () => {
      loginWithFacebook();
    }

    const handleLogin = () => {
      // Iniciar sesión implementado el Contexto de autenticación
      signin(email, password);
    };

    const passwordResetEmail = () => {
      if(validate(email))
      {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(function() {

          simpleAlertHandler()

          console.log("Correo enviado")
        }).catch(function(error) {
          console.log(error)
        });
      }
      else{
        setEmailError(true);
      }
    };

    const buttonRegister = () => {
      navigation.navigate("registerscreen");
    };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <View style={styles.input}>
        <Input
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
          secureTextEntry
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

      <SocialIcon
        title='Iniciar Sesión'
        button
        style={styles.buttonStyle}
        onPress={handleLogin}
      />

      <SocialIcon
        title='Iniciar con Facebook'
        button
        type='facebook'
        onPress={handlerloginWithFacebook}
      />

      <SocialIcon
        title='Regístrate'
        button
        style={styles.buttonStyle}
        onPress={buttonRegister}
      />
      <TouchableOpacity onPress={passwordResetEmail}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

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
    buttonStyle:{
      backgroundColor: "#656873",
      textAlign: "center",
    },
    forgotPassword: {
      textAlign: "center",
      color: "white",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 15,
    },
});

export default loginForm;
