import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarNavigation from "./src/screens/TabBarNavigation";
import loginscreen from "./src/screens/loginscreen";
import registerscreen from "./src/screens/registerscreen";
import pantalla_prueba from "./src/screens/pantalla_prueba";

const Stack = createStackNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ "loginscreen" } >
            <Stack.Screen 
              name="loginscreen" component={loginscreen} 
              options={{title:"Inico de Sesión", 
              headerStyle:{backgroundColor: "#182126"},
              headerTitleAlign: "center", 
              headerTintColor: "#fff",}}/>

            <Stack.Screen 
              name= "registerscreen" component={registerscreen}
              options={{title: "Registrar",
              headerStyle:{backgroundColor: "#182126",},
              headerTitleAlign: "center",
              headerTintColor: "#fff",}}/>

            <Stack.Screen name="pantalla_prueba" component={pantalla_prueba}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
