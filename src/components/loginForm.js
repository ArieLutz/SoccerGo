import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "./button";

const loginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <View>
        <View style={styles.input}>
            <Input
                placeholder="Email"
                leftIcon={<Icon name="envelope" />}
                value={email}
                onChange={setEmail}
            />
        </View>
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChange={setPassword}
      />

      <Button title="Iniciar Sesión"/>
      <Button title="Regístrate"/>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        borderRadius: 50,
    },
});

export default loginForm;
