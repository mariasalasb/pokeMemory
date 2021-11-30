import React,{useContext} from "react";
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { ScreenContext } from "../context/ScreenContext";

const image = require('../assets/pokeBackground.jpg')  ;

const cover = ({navigation}) => {
  //const cover = ({changeScreen}) => {
    //const handleScreen=()=>changeScreen('randomPick')
    const {screenMenu}=useContext(ScreenContext);

    const handleScreen=()=>screenMenu()

    return(
        <>
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>POKE MEMORY</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('menu/')}>
                <LottieView 
                        source={require('../assets/66763-click.json')} 
                        style={styles.lottie}
                        autoPlay 
                        loop
                    />
            </TouchableOpacity> 
        </View>
        
        </>
        )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 38,
    lineHeight: 84,
    textAlign: "right",
    fontFamily:'LuckiestGuy',
    marginTop:250,
    marginRight:5
  },
  button:{
    top:-234,
    right:-22,
  },
  lottie: {
    width:108,
    marginRight:10,
  },
  buttonContainer:{
    width:50,
    top:-220,
    right:-37,
    elevation: 0
}
});

export default cover;