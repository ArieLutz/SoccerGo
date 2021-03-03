import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#107eeb",
    padding: 8,
    borderRadius: 50,
    marginBottom: 10,
    width: width * 0.8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
