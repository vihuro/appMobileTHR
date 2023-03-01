import React ,{useEffect} from "react";
import { Text, TouchableNativeFeedback, View } from 'react-native'
import styles from "./styles";
import Header from "../../components/header/HeaderOnMenu";
import theme from '../../theme/light'

export const Principal = ({ navigation }) => {

    useEffect(() =>{
        navigation.getParent().setOptions({
          tabBarStyle:{
            display:'flex',
            backgroundColor:theme.COLORS.PRIMARY
          }
        })
      },[])

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
                        <View style={{width:350,height:40,alignItems:'center',justifyContent:'center',backgroundColor:theme.COLORS.ALERT}}>
                        <Text style={{fontSize:14,color:'white'}}>
                            SAIR
                        </Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}