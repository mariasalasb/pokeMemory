import React, { useState,useEffect,useContext } from 'react';
import { View, Text, Button, StyleSheet,FlatList,ImageBackground } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';

const image = require('../assets/pokeBackground.jpg')  ;

const Menu = ({navigation}) => {
  //const MenuOptions=[] Math.random().toString()
  const[options,setOptions]=useState(true)

  const changeMenu=()=>{
    setOptions(false)
  }

  const MenuOptions=[
    {
        title: 'BUSCA TUS POKEMONES',
        function: changeMenu,
        secondary: false
    },
    {
        title: 'VER MIS POKEMONES',
        function: changeMenu,
        secondary: true
    },
]
const MenuSubOptions=[
    {
        title: 'POR NOMBRE',
        redirect: 'select/',
        secondary: false
    },
    {
        title: 'ALEATORIo',
        redirect: 'select/',
        secondary: false
    },
    {
        title: 'VER MIS POKEMONES',
        redirect: 'select/',
        secondary: true
    }
]

const menuColor = (it)=> it===true ? colors.grayed : colors.accent;
const titleColor = (it)=> it===true ? colors.grayFont : 'white';
  return (
    <View style={styles.screen}>
      {options && MenuOptions.map((item,index)=>{
                return(
                    <Card key={index} style={[styles.inputContainer, { backgroundColor: menuColor(item.secondary) }]} >
                        <Text style={[styles.menuItem,{color:titleColor(item.secondary)}]} onPress={item.function}  >{item.title}</Text>
                    </Card>
                )
            })}
        {!options && MenuSubOptions.map((item,index)=>{
            return(
                <Card key={index} style={[styles.inputContainer, { backgroundColor: menuColor(item.secondary) }]} >
                    <Text style={[styles.menuItem,{color:titleColor(item.secondary)}]} onPress={()=>navigation.navigate(item.redirect)}  >{item.title}</Text>
                </Card>
            )
        })}
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop:250
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
  menuItem:{
    textTransform: 'uppercase',
    fontFamily:'LuckiestGuy',
    fontSize:17,
    textAlign:'center',
  },
  backButton:{
    margin:50
  },
  menuTitle:{
    fontSize:17,
    textAlign:'center',
    marginTop:200
  }
});

export default Menu;