import React from "react";
import {
  Dimensions,
  View,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const pantallaPrueba = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text>Hola mundo</Text>
      </View>
    );
  };
  
export default pantallaPrueba;