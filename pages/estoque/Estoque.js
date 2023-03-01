import React from "react";
import { View } from 'react-native'

import TabelaEstoque from "../../components/tableEstoque/TableEstoque";




const Estoque = ({navigation,route}) => {

    return (
        <View style={{flex:1}}>
            <TabelaEstoque router={route} navigate={navigation}/>
        </View>
    )
}

export default Estoque