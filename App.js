import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Start from './screens/start';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="POKE MEMORY" />
      <Start/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});