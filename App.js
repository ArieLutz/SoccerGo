import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as NoteProvider } from "./src/providers/CommentContext";
import LongTimers from "./src/components/utils/LongTimers";

export default function App() {
<<<<<<< HEAD
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ "loginscreen" } >
            <Stack.Screen 
              name="loginscreen" component={loginscreen} 
              options={{title:"Inicio de Sesión", 
              headerStyle:{backgroundColor: "#182126"},
              headerTitleAlign: "center", 
              headerTintColor: "#fff",}}/>
    
            <Stack.Screen 
              name= "registerscreen" component={registerscreen}
              options={{title: "Registrar",
              headerStyle:{backgroundColor: "#182126",},
              headerTitleAlign: "center",
              headerTintColor: "#fff",}}/>
=======
  LongTimers();
>>>>>>> origin/devChristian

  return (
    <AuthProvider>
      <NoteProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </NoteProvider>
    </AuthProvider>
  );
}
