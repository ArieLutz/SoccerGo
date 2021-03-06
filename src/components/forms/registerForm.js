import React from "react";
import { StyleSheet, View, } from "react-native";
import { Input, Button, withTheme, }  from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";


const RegisterForm = () => {
   return(
       <View  >
           <View style={styles.input}>
            <Input
                    placeholder = "Usuario"
                        leftIcon={<Icon name="user" />}
                /> 
           </View>
           
           <View style={styles.input}>
                <Input 
                    placeholder = "Correo electronico"
                    leftIcon={<Icon name="envelope" />}
                />
            </View>
            <View style={styles.input}>
                <Input 
                    placeholder = "Contraseña"
                    leftIcon={<Icon name="lock" />}
                />
            </View>

            <View style={styles.input}>
                <Input 
                    placeholder = "Repetir contraseña"
                    leftIcon={<Icon name="lock" />}  
                />
            </View>
            
            <View style={styles.button}>
                <Button title="Registrar" />
            </View>
            
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

    button: {
        borderRadius:150,
        padding: 5,
        margin: 7,
      },
});

   
export default RegisterForm;