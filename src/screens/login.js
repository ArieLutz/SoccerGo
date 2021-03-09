import React from "react";
import {
  Dimensions,
  View,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
    return (
      <View>
          <Text>Hola mundo</Text>
      </View>
    );
  };
  
export default Login;