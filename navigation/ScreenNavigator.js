import React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "../constants/colors";
import Main from "../screens/main";
import Menu from "../screens/menu";
import Start from "../screens/start";
const Stack = createNativeStackNavigator();

//Stack.Navigator guarda las rutas, puede haber N
//Screen son las pantallas, puede haber N
//NavigationContainer solo hay 1
//el orden en que declaro los screens acá no influye en nada, salvo la primera que coloco que seria la principal a menos de que use initialRouteName
const ScreenNavigator=()=>(
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}
            initialRouteName="main/"
        >
            <Stack.Screen 
                name="main/" 
                component={Main}
            />
            <Stack.Screen 
                options={{
                    title:'POKE MEMORY',
                    headerShown:true,
                    headerStyle:styles.header,
                    headerTintColor: Platform.OS==='android'?'white':COLORS.primary,
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
                    headerTintColor: Platform.OS==='android'?'white':COLORS.primary,
                    headerTitleStyle:{ fontFamily:'LuckiestGuy'},
                    headerTitleAlign:"center",
                }}            name="select/" 
            component={Start}/>
        </Stack.Navigator>
    </NavigationContainer>

);

 const styles= StyleSheet.create({
    header:{
        backgroundColor: Platform.OS==='android'? colors.primary : 'white',
    },
}) 

export default ScreenNavigator;