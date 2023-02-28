import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { View,Text, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import MyTabs from "../../components/navBar/NavBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import TabelaEstoque from "../../components/tableEstoque/TableEstoque";
import UiButton from "../../components/UiButton/UiButton";
import { Principal } from "../principal/Principal";
import MovimentacoesEstoque from "./MovimentacoesEstoque";
import Menu from "../menu/menu";


const Tab = createBottomTabNavigator();

const Estoque = ({navigation,route}) => {

    return (
        <View style={{flex:1}}>
            <TabelaEstoque router={route} navigate={navigation}/>
        </View>
    )
}

export default Estoque