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


  const [screen, setScreen]=useState('main');

  const page = screen==='main' ? 
  <Main changeScreen={setScreen}/>: <Start/>
  

  return (
    <View style={styles.container}>
      <Header title="POKE MEMORY" />
      {page}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});