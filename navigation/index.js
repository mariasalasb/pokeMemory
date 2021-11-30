import React from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "../constants/colors";
import TabNavigator from "./tab";

const Stack = createNativeStackNavigator();

const MainNavigator=()=>(
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

 const styles= StyleSheet.create({
    header:{
        backgroundColor: Platform.OS==='android'? colors.primary : 'white',
    },
}) 

export default MainNavigator;