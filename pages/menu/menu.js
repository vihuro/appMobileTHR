import React, { useEffect } from "react";
import { Text, View,Image } from "react-native";
import MyTabs from "../../components/navBar/NavBar";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';
import UiButton from "../../components/UiButton/UiButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();


const Menu = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <StatusBar translucent={true} style="light"/>
        </View>
    )

}

export default Menu