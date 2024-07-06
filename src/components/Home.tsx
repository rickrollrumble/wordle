import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Game} from './Game';
import {Splash} from './Splash';

const Stack = createNativeStackNavigator();

export const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={'Home'} component={Splash} />
      <Stack.Screen name={'Game'} component={Game} />
    </Stack.Navigator>
  );
};
