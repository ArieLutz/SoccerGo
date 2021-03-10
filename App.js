import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import login from "./src/screens/login";
import TabBarNavigation from "./src/screens/TabBarNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
        <TabBarNavigation/>
      </SafeAreaProvider>
  );
}