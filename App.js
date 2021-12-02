import React, {useState,useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {ScreenContext,ScreenProvider} from './context/ScreenContext';
import Page from './screens/page';
import ScreenNavigator from './navigation/ScreenNavigator';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import Cover from './screens/cover';


export default function App() {

  const [loaded] = useFonts({
    LuckiestGuy: require('./assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  //const [screen, setScreen]=useState('main');

  //const page = screen==='main' ? 
  //<Main changeScreen={setScreen}/>: <randomPick/>

  //const Page = screen==='main' ? 
  //<Main/>: <randomPick/>

  
  if(!loaded){ return <AppLoading/>}
  else{
    return (
      <View style={styles.container}>
        <Provider store={store}>
         <ScreenProvider>
          <Header/>
          <MainNavigator/>
         </ScreenProvider>
        </Provider>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});