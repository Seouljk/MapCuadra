import * as React from 'react';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalstyles from "./src/config/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeColors } from "./src/config/ThemeColors"; //

import LoginScreen from "./src/Components/Screens/LoginScreen";
import RegisterScreen from "./src/Components/Screens/RegisterScreen";
import StartScreen from "./src/Components/Screens/StartScreen";
import HomePage from "./src/Components/Forms/HomePage";
import AccrecoveryScreen from "./src/Components/Screens/AccrecoveryScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: ThemeColors.colors,
    mode: "exact",
  };

const [registeredCredentials, setRegisteredCredentials] = useState([]);
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Start"
              component={StartScreen}
            />
            <Stack.Screen name="Login">
              {(props) => (
              <LoginScreen {...props} registeredCredentials={registeredCredentials} />
              )}
              </Stack.Screen>
            <Stack.Screen name="Register">
               {(props) => (
               <RegisterScreen
               {...props}
               registeredCredentials={registeredCredentials}
               setRegisteredCredentials={setRegisteredCredentials}
            />
                )}
            </Stack.Screen>
            <Stack.Screen
                          options={{ headerShown: false }}
                          name="Recovery"
                          component={AccrecoveryScreen}
                          />
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomePage"
              component={HomePage}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);