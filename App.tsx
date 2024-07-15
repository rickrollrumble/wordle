/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Home } from "./src/components/Home";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default App;
