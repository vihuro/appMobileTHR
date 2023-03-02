import react, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableNativeFeedback,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Modal,
    FlatList
} from "react-native";
import style from "./style";
import api from '../../../../Services/api';
import Icons from "../../../../theme/icons/expo/Icon"
import Select from "../../../../components/select/Select";


const NovaMovimentacao = ({ navigation, ...props }) => {

    const [modal, setModal] = useState(false)

    const [data, setData] = useState([
        { tipo: 'ENTRADA' },
        { tipo: 'SAÍDA' }
    ])

    useEffect(() => {
        navigation.setOptions({
            title: 'Nova movimentação'
        })
    }, [])

    const [movimentacao, setMovimentancao] = useState(
        {
            'codigoMaterial': '',
            'tipoMovimentacao': 'ENTRADA',
            'usuarioMovimentacao': 'Vitor Hugo',
            'quantidadeMovimentacao': 0

        }
    )

    const Movimentacao = async () => {
        await api.post('estoque/movimentacao', movimentacao)
            .then(repo => console.log(repo))
            .catch(error => console.log(error))
    }

    function renderOptions(item) {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: "#eee",
                borderBottomWidth: 1,
                padding: 20
            }}>
                <Text>{item.tipo}</Text>
            </TouchableOpacity>

        )
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled contentContainerStyle={style.container}>
            <View style={style.wrapForm}>
                <ScrollView style={style.containerForm}>
                    <View style={style.titleInput}><Text>CÓDIGO</Text></View>
                    <View style={style.containerInput}><TextInput style={{ padding: 0 }} /></View>
                    <View style={style.titleInput}><Text>DESCRIÇÃO</Text></View>
                    <View style={[style.containerInput, { borderRadius: 7, height: 100, borderColor: 'gray', borderWidth: 1 }]}><TextInput style={{ padding: 7, height: 100, textAlignVertical: 'top' }} multiline={true} /></View>
                    <View style={style.titleInput}><Text>UNIDADE</Text></View>
                    <View style={style.containerInput}><TextInput /></View>
                    <View style={style.titleInput}><Text>TIPO DE MOVIMENTAÇÃO</Text></View>
                    <View style={style.containerInput}>
                        <Select
                            text={"Selecione..."}
                            title={"Selecione um tipo..."}
                            onChangeSelect={(e) => console.log(e)}
                        />



                            {/* <Text>Selecione um tipo...</Text>
                            <Icons.ICONS.AntDesign name="caretdown" size={10} color='#ccc' /> */}


                        {/* <Modal
                            animationType="slide"
                            visible={modal}
                            onRequestClose={false}>
                                <Select
                                text={"Selecione...."}
                                /> */}
                        {/* <View style={{
                                padding: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottomColor: '#ddd',
                                borderWidth: 1
                            }}>
                                <TouchableOpacity onPress={() => setModal(false)}>
                                    <Icons.ICONS.AntDesign name="caretleft" size={10} />
                                </TouchableOpacity>
                                <Text>
                                    Selecione um tipo...
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'red', fontWeight: '600' }}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => renderOptions(item)}
                            /> */}
                        {/* </Modal> */}

                    </View>
                </ScrollView>
            </View>

            {/* <TextInput value={movimentacao.codigoMaterial}
                onChangeText={(e) => {
                    setMovimentancao({ ...movimentacao, codigoMaterial: e })
                }}
                style={{ backgroundColor: 'red', width: 300 }} />
            <TextInput value={movimentacao.tipoMovimentacao}
                onChangeText={(e) => {
                    setMovimentancao({ ...movimentacao, tipoMovimentacao: e })
                }}
                style={{ backgroundColor: 'red', width: 300, marginTop: 10 }} />
            <TextInput style={{ backgroundColor: 'red', width: 300, marginTop: 10 }} /> */}
            <View style={{ width: 350, backgroundColor: '#56E081', height: 40, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableNativeFeedback style={{}} onPress={() => console.log(movimentacao)}>
                    <View style={{ width: 350, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>LANÇAR MOVIMENTAÇÃO</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NovaMovimentacao