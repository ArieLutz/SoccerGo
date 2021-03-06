import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import registerscreens from "./src/screens/registerscreens";
import theme from "./src/theme";

const Stack = createStackNavigator();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen 
              name= "Registrar" 
              component={registerscreens}
              options={{
                title: "Registrar",
                headerStyle: {
                  backgroundColor: "#182126",
                
                },
                headerTitleAlign: "center",
                headerTintColor: "#fff",
              }}
              />
           </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
