import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const Button = ({ title }) => {
  return (
      <Text style={styles.buttonText}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "center",
    backgroundColor: "#656873",
    padding: 8,
    borderRadius: 50,
    marginBottom: 2,
    marginTop: 15,
    width: width * 0.7,
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;