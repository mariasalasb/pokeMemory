import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';

const Pokemons = () => {
  const items = useSelector(state => state.pokemons.items);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>MIS POKEMONES</Text>
      {items.map((item)=>{
          return(
              <Card key={(Math.floor(Math.random() * 100))} style={styles.inputContainer}>
                  <Text style={styles.pokeName}>{item.name}</Text>
              </Card>
          )
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: { 
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width:300,
    maxWidth: '100%',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent:'space-around',
    display:'flex',
    padding:5,
    width:300
  },
  pokeName:{
    textTransform: 'uppercase',
  },
  backButton:{
    margin:50
  }
});

export default Pokemons;