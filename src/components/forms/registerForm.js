import React, { useState } from "react";
import { StyleSheet, View, } from "react-native";
import { Input, Button, SocialIcon }  from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../firabase/index";
import { validate } from "email-validator";



const RegisterForm = ( {navigation} ) => {
    const [usuario, setUsuario] = useState ("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [contraseña, setContraseña]= useState ("");
    const [confirmarContraseña, setConfirmarContraseña] = useState (""); 
    const [usuarioError, setUsuarioError]= useState (false);
    const [correoElectronicoError, setCorreoElectronicoError] = useState (false);
    const [contraseñaError, setContraseñaError]= useState (false);
    const [confirmarContraseñaError, setConfirmarContraseñaError]= useState (false);


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
        } else if (input === "contraseña"){
            //Verica la contraseña
            if (!contraseña) setContraseñaError(true);
            else if (contraseña.length < 6) setContraseñaError(true);
            else setContraseñaError(false);
        } else if (input === "confirmarContraseña"){
            //Verifica la confirmación de la contraseña 
            if (!confirmarContraseña) setConfirmarContraseñaError(true);
            else if (confirmarContraseña !== contraseña) setConfirmarContraseñaError(true);
            else setConfirmarContraseñaError(false);
        }
    };

    const loginWithFacebook = () => {
        firebase
        .auth().signInWithPopup(provider).then((result) => {
         console.log("Inicio de sesión correcta")
         navigation.navigate("login")
        })
        .catch(err => {
          console.log(err);
        })
      }

    const handleRegister = () =>{ 

     firebase
     .auth()
     .createUserWithEmailAndPassword(correoElectronico, contraseña)
     .then((response)=> {
         console.log(response)
         navigation.navigate("login")
        })
     .catch((error) => console.log(error));
    };


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
                    value ={contraseña} 
                    onChangeText={setContraseña}
                    secureTextEntry
                    autoCapitalize="none"
                    onBlur = { () => {
                        handleVerify("contraseña");
                    }}
                    errorMessage={
                        contraseñaError ? "Por favor ingresa una contraseña de mínimo 6 caracteres" : ""
                    }
                />
            </View>

            <View style={styles.input}>
                <Input 
                    placeholder = "Repetir contraseña"
                    leftIcon={<Icon name="lock" />}
                    value ={confirmarContraseña} 
                    onChangeText={setConfirmarContraseña}
                    secureTextEntry
                    autoCapitalize="none"
                    onBlur = { () => {
                        handleVerify("confirmarContraseña");
                    }}
                    errorMessage={
                        confirmarContraseñaError ? "Por favor reingresa la contraseña y verifica que es correcta" : ""
                    }
                />
            </View>
            
            <SocialIcon 
                 title="Registrar"
                 button
                 style={styles.button}
                 onPress={handleRegister}
            />

            <SocialIcon
                title='Iniciar con Facebook'
                button
                type='facebook'
                onPress={loginWithFacebook}
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


