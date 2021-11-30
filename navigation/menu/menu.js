import React from "react";
import { Platform, StyleSheet } from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "../../constants/colors";
import cover from "../../screens/cover";
import Menu from "../../screens/menu";
import randomPick from "../../screens/randomPick";
const Stack = createNativeStackNavigator();

//Stack.Navigator guarda las rutas, puede haber N
//Screen son las pantallas, puede haber N
//NavigationContainer solo hay 1
//el orden en que declaro los screens acá no influye en nada, salvo la primera que coloco que seria la principal a menos de que use initialRouteName
const MenuNavigator=()=>(
        <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}
            initialRouteName="cover/"
        >
            <Stack.Screen 
                name="cover/" 
                component={cover}
            />
            <Stack.Screen 
                options={{
                    title:'POKE MEMORY',
                    headerShown:true,
                    headerStyle:styles.header,
                    headerTintColor: Platform.OS==='android'?'white':colors.primary,
                    headerTitleStyle:{ fontFamily:'LuckiestGuy'},
                    headerTitleAlign:"center",
                }}
                name="menu/" 
                component={Menu}
            />
            <Stack.Screen 
                options={{
                    title:'POKE MEMORY',
                    headerShown:true,
                    headerStyle:styles.header,
                    headerTintColor: Platform.OS==='android'?'white':colors.primary,
                    headerTitleStyle:{ fontFamily:'LuckiestGuy'},
                    headerTitleAlign:"center",
                }}            name="select/" 
            component={randomPick}/>
        </Stack.Navigator>
);

 const styles= StyleSheet.create({
    header:{
        backgroundColor: Platform.OS==='android'? colors.primary : 'white',
    },
}) 

export default MenuNavigator;