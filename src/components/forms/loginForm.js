import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text,} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { SocialIcon } from 'react-native-elements'
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../../shared/Alert";


const loginForm = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const provider = new firebase.auth.FacebookAuthProvider();

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

    const loginWithFacebook = () => {
      firebase
      .auth().signInWithPopup(provider).then((result) => {
       console.log("Inicio de sesión correcta")
       navigation.navigate("pantalla_prueba")
      })
      .catch(err => {
        console.log(err);
      })
    }

    const handleLogin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
        console.log(response)
        navigation.navigate("pantalla_prueba")
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const passwordResetEmail = () => {
      if(validate(email))
      {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(function() {
          console.log("Correo enviado")
        }).catch(function(error) {
          console.log(error)
        });
      }
      else{
        setEmailError(true);
      }
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
        onPress={loginWithFacebook}

      />

      <SocialIcon
        title='Regístrate'
        button
        style={styles.buttonStyle}
        onPress={navigation.navigate("registerscreen")}
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
