import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "business/login";
import SignUPScreen from "business/signup";

import DashboardScreen from "business/dashboard";

const Stack = createNativeStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUP" component={SignUPScreen} />
    </Stack.Navigator>
  );
}

function PrivateStack() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="PublicStack" component={PublicStack} />
        <Stack.Screen name="PrivateStack" component={PrivateStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
