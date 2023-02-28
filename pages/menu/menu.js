import React, { useEffect } from "react";
import { Text, View,Image } from "react-native";
import MyTabs from "../../components/navBar/NavBar";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';
import UiButton from "../../components/UiButton/UiButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();


const Menu = ({navigation}) =>{

    function navegar() {
        console.log(navigation)
        navigation.navigate('Estoque')
    }

    return(
        <View style={styles.container}>
            <MyTabs/>
            <StatusBar style="light"/>
        </View>
    )

}

export default Menu