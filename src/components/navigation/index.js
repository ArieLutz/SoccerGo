import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Context as AuthContext } from "../../providers/AuthContext";

import loginscreen from "../../screens/loginscreen";
import registerscreen from "../../screens/registerscreen";
//import pantalla_prueba from "../../screens/pantalla_prueba";
import TabBarNavigation from "../../screens/TabBarNavigation";

import CreateComment from "../../screens/CreateComment";
import ModifyComment from "../../screens/ModifyComment";

const Stack = createStackNavigator();

const Navigation = () => {
  const { state, persistLogin } = useContext(AuthContext);

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

  // Prevenir que se oculte la pantalla de splash
  SplashScreen.preventAutoHideAsync();

  // Ocultar la pantalla de splash al verificar que existe un token de inicio
  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="TabBarNavigation" component={TabBarNavigation} />
              <Stack.Screen name="CreateComment" component={CreateComment} />
              <Stack.Screen name="ModifyComment" component={ModifyComment} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="loginscreen"
                component={loginscreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="registerscreen"
                component={registerscreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
