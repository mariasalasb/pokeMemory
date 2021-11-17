import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Start from './screens/start';
import Main from './screens/main';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [loaded] = useFonts({
    LuckiestGuy: require('./assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  if(!loaded) return <AppLoading/>;




  return (
    <View style={styles.container}>
      <Header title="POKE MEMORY" />
      <Main /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});