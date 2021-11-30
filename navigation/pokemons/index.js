import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemons from '../../screens/pokemons';

const Stack = createNativeStackNavigator();

const PokeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokemons"
        component={Pokemons}
        options={{ title: 'Pokemons' }}
      />
    </Stack.Navigator>
  )
}

export default PokeNavigator;