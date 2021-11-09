import React, { useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet,FlatList } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';
import axios from 'axios';

const Start = () => {
  //const [pokeCardColor, setPokeCardColor] = useState('');
  const [pokeList, setPokeList]= useState({});
  const [myPokeList, setMyPokeList]= useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const  result  = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=7',
          );
      setPokeList(result.data.results);
    };
 
    fetchData();
  }, []);

 /*  const fetchData = async () => {
    if(pokeQuantity===2){
        const result = await axios(
            "https://pokeapi.co/api/v2/pokemon?limit=" + pokeQuantity,
          );
      
          setPokeList(result.data.results);
    }
  };
 */
  const handleConfirm = () => {
    if (loading===true){
      setLoading(false);
    }else if(loading===false){
      setLoading('none');
    } else{
      setLoading(false);
    }
  };

  const addPokemon = (it) => {
    if(myPokeList.includes(it)===true ){
      const oldList= myPokeList.filter(item=>item!==it)
      setMyPokeList(oldList);
    }else{
      setMyPokeList([...myPokeList, it])
    }
  }

  const removeItem = (idborrar)=>{
    const oldList= cart.filter(item=>item.item.id!==idborrar)
    setCart(oldList);
}
console.log(pokeList)
  console.log(myPokeList);

  const ButtonText= loading ===true? 'VER POKEMONES' :loading ===false? 'CONTINUAR':loading ==='none'? 'VOLVER':'';
  const Instructions= loading ===true? 'Haz click para empezar' :loading ===false? 'Selecciona tus jugadores':loading ==='none'?'Tus jugadores son:':'';
  const pokeCardColor = (it)=> myPokeList.includes(it) ? colors.accent : 'white';
  const List = loading ===true? pokeList : myPokeList;
  

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{Instructions}</Text>
      {!loading && pokeList.map((item)=>{
                return(
                    <Card key={item.url.substr(34,1)} style={[styles.inputContainer, { backgroundColor: pokeCardColor(item.name) }]}>
                        <Text style={styles.pokeName} onPress={() => {addPokemon(item.name)}}>{item.name}</Text>
                    </Card>
                )
            })}
      {loading==='none' && myPokeList.map((item)=>{
          return(
              <Card key={Math.random().toString()} style={[styles.inputContainer, { backgroundColor: pokeCardColor(item) }]}>
                  <Text style={styles.pokeName} onPress={() => {addPokemon(item)}}>{item}</Text>
              </Card>
          )
      })}
      <Card style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <Button title={ButtonText} color={colors.primary} onPress={handleConfirm}/>
        </View>
      </Card>

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
    flexDirection: 'row',
  },
  pokeName:{
    textTransform: 'uppercase',
  }
});

export default Start;