import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Create from '../../screens/createpokemon';

const Stack = createNativeStackNavigator();

const CreatePokemon = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Create"
        component={Create}
        options={{ title: 'Create' }}
      />
    </Stack.Navigator>
  )
}

export default CreatePokemon;