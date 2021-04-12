import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, } from "react-native";
import { Input, SocialIcon }  from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../../firebase";
import { validate } from "email-validator";
import { Context as AuthContext } from "../../providers/AuthContext";

const RegisterForm = ( {navigation} ) => {
    const { state, signup, registerWithFacebook } = useContext(AuthContext);
    const [usuario, setUsuario] = useState ("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [password, setpassword]= useState ("");
    const [confirmarpassword, setConfirmarpassword] = useState (""); 
    const [usuarioError, setUsuarioError]= useState (false);
    const [correoElectronicoError, setCorreoElectronicoError] = useState (false);
    const [passwordError, setpasswordError]= useState (false);
    const [confirmarpasswordError, setConfirmarpasswordError]= useState (false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (state.errorMessage) clearErrorMessage();
    }, []);

    useEffect(() => {
        if (state.errorMessage) setError(state.errorMessage);
    }, [state.errorMessage]);

    useEffect(() => {
        if (state.registered) navigation.navigate("Home");
    }, [state]);


    //Verificar que los datos ingresados sean correctos
    const handleVerify = (input) => {
        if (input === "usuario"){
            //Verifica el nombre del usuario
            if (!usuario) setUsuarioError(true);
            else setUsuarioError(false);
        } else if (input === "correoElectronico"){
            //Verifica el correo electronico
            if (!correoElectronico) setCorreoElectronicoError(true);
            else if (!validate(correoElectronico)) setCorreoElectronicoError(true);
            else setCorreoElectronicoError(false);
        } else if (input === "password"){
            //Verica la password
            if (!password) setpasswordError(true);
            else if (password.length < 6) setpasswordError(true);
            else setpasswordError(false);
        } else if (input === "confirmarpassword"){
            //Verifica la confirmación de la password 
            if (!confirmarpassword) setConfirmarpasswordError(true);
            else if (confirmarpassword !== password) setConfirmarpasswordError(true);
            else setConfirmarpasswordError(false);
        }  else if (input === "signup") {
            if (
              !usuarioError &&
              !correoElectronicoError &&
              !passwordError &&
              !confirmarpasswordError &&
              usuario &&
              correoElectronico &&
              password &&
              confirmarpassword
            )
              signup(usuario, correoElectronico, password);
            else setError("All fields are required!");
          }
    };

    const handlerRegisterWithFacebook = () => {
        registerWithFacebook();
      }

   return(
       <View  >
           <View style={styles.input}>
            <Input
                    placeholder = "Usuario"
                        leftIcon={<Icon name="user" />} 
                        value ={usuario}
                        onChangeText={setUsuario}
                        onBlur = { () => {
                            handleVerify("usuario");
                        }}
                        errorMessage={
                            usuarioError ? "Por favor ingresa tu usuario" : ""
                        }
                /> 
           </View>
           
           <View style={styles.input}>
                <Input 
                    placeholder = "Correo electronico"
                    leftIcon={<Icon name="envelope" />} 
                    value ={correoElectronico} 
                    onChangeText={setCorreoElectronico}
                    autoCapitalize="none"
                    onBlur = { () => {
                        handleVerify("correoElectronico");
                    }}
                    errorMessage={
                        correoElectronicoError ? "Por favor ingresa una dirección de correo válida" : ""
                    }
                />
            </View>
            <View style={styles.input}>
                <Input 
                    placeholder = "Contraseña"
                    leftIcon={<Icon name="lock" />} 
                    value ={password} 
                    onChangeText={setpassword}
                    secureTextEntry
                    autoCapitalize="none"
                    onBlur = { () => {
                        handleVerify("password");
                    }}
                    errorMessage={
                        passwordError ? "Por favor ingresa una Contraseña de mínimo 6 caracteres" : ""
                    }
                />
            </View>

            <View style={styles.input}>
                <Input 
                    placeholder = "Repetir Contraseña"
                    leftIcon={<Icon name="lock" />}
                    value ={confirmarpassword} 
                    onChangeText={setConfirmarpassword}
                    secureTextEntry
                    autoCapitalize="none"
                    onBlur = { () => {
                        handleVerify("confirmarpassword");
                    }}
                    errorMessage={
                        confirmarpasswordError ? "Por favor reingresa la Contraseña y verifica que es correcta" : ""
                    }
                />
            </View>
            
            <SocialIcon 
                 title="Registrar"
                 button
                 style={styles.button}
                 onPress={() => handleVerify("signup")}
            />

            <SocialIcon
                title='Iniciar con Facebook'
                button
                type='facebook'
                onPress={handlerRegisterWithFacebook}
            />
       </View>
   );
};


const styles = StyleSheet.create({
    input:{
        backgroundColor: "white",
        borderRadius:35,
        padding: 0,
        margin: 7,
    },

    button:{
            backgroundColor: "#656873",
            textAlign: "center",
           
      },
});

   
export default RegisterForm;


