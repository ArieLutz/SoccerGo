import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";
import LoginForm from "../components/forms/loginForm";
import Logo from "../shared/Logo";
import { useFonts } from "expo-font";


//Pantalla de Login
const Login = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    'Nunito': require("../../assets/fonts/Nunito-Bold.ttf")
  });

  if(!fontsLoaded){
    return(
        <View style={{flex: 1, justifyContent: "center", backgroundColor:"#025959"}}>
        </View>
    );
  };
  return (
      <ScrollView style={styles.container}>
        <Logo/>
        <Text style={styles.logoText}>SoccerGO</Text>
        <LoginForm navigation={navigation}/>
      </ScrollView>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#9a98a6",
  },
  logoText: {
    fontFamily: "Nunito",
    fontSize: 32,
    color: "white",
    textAlign: "center",
  },
});
  
export default Login;
  
