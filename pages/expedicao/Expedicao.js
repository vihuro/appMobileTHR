import react from "react";
import {View, Text} from 'react-native'
import Header from "../../components/header/HeaderOnMenu";
import UiButton from "../../components/UiButton/UiButton";


const Expedicao = () =>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Header/>
            <View style={{width:350,marginTop:10}}>
                <UiButton 
                    text={'PEDIDOS'}
                 />
            </View>
            <View style={{width:350,marginTop:10}}>
                <UiButton 
                    text={'SEPARAR PEDIDOS'}
                 />
            </View>
        </View>
    )
}

export default Expedicao