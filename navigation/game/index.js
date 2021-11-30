import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from '../../screens/game';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ title: 'Game' }}
      />
    </Stack.Navigator>
  )
}

export default GameNavigator;