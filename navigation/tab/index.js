import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import GameNavigator from '../game';
import MenuNavigator from '../menu/menu';
import PokeNavigator from '../pokemons';
import CreatePokemon from '../createPokemon'
import colors from '../../constants/colors';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
    <BottomTabs.Screen
        name="MenuTab"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="search" size={24} color={focused ? colors.primary : 'black'} />
              <Text>Buscador</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="GameTab"
        component={GameNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
                <MaterialCommunityIcons name="cards-outline" size={24} color={focused ? colors.primary : 'black'}  />
                <Text>Jugar</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="PokeTab"
        component={PokeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
                <MaterialCommunityIcons name="pokemon-go" size={24} color={focused ? colors.primary : 'black'}  />
              <Text>Pokemones</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="CreatePoke"
        component={CreatePokemon}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
                <Ionicons name="camera" size={24} color={focused ? colors.primary : 'black'} />
              <Text>Crear</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TabNavigator;