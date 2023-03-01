import {View, Text} from 'react-native';
import Header from "../../../components/header/HeaderOnMenu";
import UiButton from "../../../components/UiButton/UiButton";
import style from "./Style";


const EstoqueMenu = ({navigation}) =>{


    function navegar() {
        navigation.navigate('Estoque')
    }
    function navegarMovimenacoes(){
        navigation.navigate("MovimentacoEstoque")
    }
    function navegarNovaMovimentacao(){
        navigation.navigate("NovaMovimentacao")
    }

    return(
        <View style={style.container}>
            <Header/>
            <View style={style.containerButton}>
                <UiButton
                    text={'CONSULTAR ESTOQUE'}
                    action={() => { navegar()}}
                />
            </View>
            <View style={style.containerButton}>
                <UiButton
                    text={'CONSULTRAR MOVIMENTAÇÕES'}
                    action={() => { navegarMovimenacoes() }}
                />
            </View>
            <View style={style.containerButton}>
                <UiButton
                    text={'NOVA MOVIMENTAÇÂO'}
                    action={() => { navegarNovaMovimentacao() }}
                />
            </View>
        </View>
    )

}

export default EstoqueMenu