import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
