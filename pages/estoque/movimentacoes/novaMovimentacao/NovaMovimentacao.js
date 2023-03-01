import react, { useState } from "react";
import {View,Text,TouchableNativeFeedback, TextInput} from "react-native";
import style from "./style";
import api from '../../../../Services/api'


const NovaMovimentacao = () =>{

    const [movimentacao,setMovimentancao] = useState(
        {
            'codigoMaterial':'MP1N101001',
            'tipoMovimentacao':'ENTRADA',
            'usuarioMovimentacao':'Vitor Hugo',
            'quantidadeMovimentacao':0
            
        }
    )

    const  Movimentacao = async () => {
        await api.post('estoque/movimentacao',movimentacao)
        .then(repo => console.log(repo))
        .catch(error => console.log(error))
    }

return(
    <View style={style.container}>
        <View style>

        </View>
        <Text>
            Nova movimentação
        </Text>
        <TextInput value={movimentacao.codigoMaterial}
        onChangeText={(e) => {
            setMovimentancao({...movimentacao,codigoMaterial:e})
        }}
        style={{backgroundColor:'red',width:300}} />
        <TextInput value={movimentacao.tipoMovimentacao}
        onChangeText={(e) => {
            setMovimentancao({...movimentacao,tipoMovimentacao:e})
        }} 
        style={{backgroundColor:'red',width:300,marginTop:10}} />
        <TextInput style={{backgroundColor:'red',width:300,marginTop:10}} />
        <TouchableNativeFeedback onPress={() => console.log(movimentacao)}>
            <View>
                <Text>Saída</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
)
}

export default NovaMovimentacao