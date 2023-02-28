import React from "react";
import { Button, Image, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import styles from "./styles";
import TabelaEstoque from "../../components/tableEstoque/TableEstoque";
import Estoque from "../estoque/Estoque";
import UiButton from "../../components/UiButton/UiButton";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/header/HeaderOnMenu";

export const Principal = ({ navigation }) => {


    function navegar() {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={{elevation:7,backgroundColor:'red',height:100,width:300,marginTop:20,borderRadius:10,overflow:'hidden'}}>
                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                    'black',false)}
                >
                    <View style={{backgroundColor:'white',flex:1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>
                            Seja bem Vindo ao APP da THR!
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{overflow:'hidden',width:350,top:400,height:40,borderRadius:10,backgroundColor:'green'}}>
                <TouchableNativeFeedback
                onPress={navegar}
                    background={TouchableNativeFeedback.Ripple(
                    'black',false)}>
                        <View style={{width:350,height:40,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                        <Text style={{fontSize:14,color:'white'}}>
                            SAIR
                        </Text>
                   

                        </View>

                </TouchableNativeFeedback>

            </View>


        </View>
    )
}