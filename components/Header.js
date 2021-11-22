import React,{useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import {ScreenContext} from '../context/ScreenContext';

const Header = () => {
  const {screen}=useContext(ScreenContext);

  const title=screen!=='main'? 'POKE MEMORY':''
  
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 22,
    fontFamily:'LuckiestGuy'
  }
});

export default Header;