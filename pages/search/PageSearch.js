import react, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./Style"
import Moment from "moment/moment";


const Search = ({ navigation, route, params, ...info }) => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem(route.params)
        console.log(navigation)
        navigation.setOptions({
            title: "PLUS",
            headerRight:() =>(
                <View style={{right:15,width:230,overflow:'hidden',height:42}}>
                <View><Text style={{color:'white'}} numberOfLines={1}>{route.params.codigo}</Text></View>
                <View><Text style={{color:'white'}} numberOfLines={1}>{route.params.descricao}</Text></View>
            </View>
            ),

        })
    }, [])

    const dateString = (date) => {

        var data = new Date(date)
        const dia = Moment(data).format('D');
        const mes = Moment(data).format('M');
        const ano = Moment(data).format('yyyy');
        const hora = Moment(data).format('HH');
        const minuto = Moment(data).format('mm');

        var text = `${dia < 10 ? "0" + dia : dia}-${mes < 10 ? "0" + mes : mes}-${ano} ${hora < 10 ? "0" + hora : hora}:${minuto}`

        return text

    }
    return (
        <ScrollView style={style.container}>
            <View style={style.card}>
                <View style={style.containerHeader}>
                    <View style={[style.header]}>
                        <View style={[style.columnHeadeCodigo, { left: 5 }]}><Text style={style.texHeader}>CÓDIGO</Text></View>
                        <View style={style.columnHeaderDescricao}><Text style={style.texHeader}>DESCRIÇÃO</Text></View>
                    </View>
                    <View style={style.row}>
                        <View style={style.columnHeadeCodigo} ><Text>{item.codigo}</Text></View>
                        <View style={style.columnHeaderDescricao}><Text>{item.descricao}</Text></View>
                    </View>
                </View>

                <View style={style.containerDiponivelAndUnidade}>
                    <View style={[style.rowUnidadeDisponivel]}>
                        <View style={{ width: 90, alignItems: 'center' }}><Text>DISPONÍVEL</Text></View>
                        <View style={{ width: 100, alignItems: 'center' }}><Text>UNIDADE</Text></View>
                    </View>
                    <View style={[style.rowUnidadeDisponivel]}>
                        <View style={{ width: 90, alignItems: 'center' }}><Text>{item.quantidadeEstoque}</Text></View>
                        <View style={{ width: 100, alignItems: 'center' }}><Text>{item.unidade}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.containerPlus}>
                    <View style={style.headerCardPlus}>
                        <View style={style.column}><Text>CATEGORIA - A</Text></View>
                        <View style={style.column}><Text>CATEGORIA - B</Text></View>
                        <View style={style.column}><Text>CATEGORIA - C</Text></View>
                    </View>
                    <View style={style.rowCardPlus}>
                        <View style={style.column}><Text>{item.categoriaA}</Text></View>
                        <View style={style.column}><Text>{item.categoriaB}</Text></View>
                        <View style={style.column}><Text>{item.categoriaC}</Text></View>
                    </View>
                </View>
                <View style={style.containerPlus}>
                    <View style={style.headerCardPlus}>
                        <View style={style.column}><Text>ESTOQUE MIN.</Text></View>
                        <View style={style.column}><Text>ESTOQUE MAX.</Text></View>
                        <View style={style.column}><Text>ESTOQUE SEG.</Text></View>
                    </View>
                    <View style={style.rowCardPlus}>
                        <View style={style.column}><Text>{item.estoqueMinimo}</Text></View>
                        <View style={style.column}><Text>{item.estoqueMaximo}</Text></View>
                        <View style={style.column}><Text>{item.estoqueSeguranca}</Text></View>
                    </View>
                </View>
                <View style={style.infoUsuarioHoraCadastro}>
                    <View style={style.containerUsuarioHoraCadastro}><Text>Usuário do Dadastro: {item.usuarioCadastro}</Text></View>
                    <View style={style.containerUsuarioHoraCadastro}><Text>Date e Hora do Cadastro: {dateString(route.params.dataHoraCadastro)}</Text></View>
                    <View style={style.containerUsuarioHoraCadastro}><Text>Usuário do Dadastro: {item.usuarioAlteracao}</Text></View>
                    <View style={style.containerUsuarioHoraCadastro}><Text>Date e Hora da Alteração: {dateString(route.params.dataHoraAlteracao)}</Text></View>
                </View>
            </View>
        </ScrollView>

    )

}


export default Search