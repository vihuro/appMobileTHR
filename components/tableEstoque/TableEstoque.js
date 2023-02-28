import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    RefreshControl,
    SafeAreaView,
    Animated,
    TouchableNativeFeedback,
    StyleSheet,
    useWindowDimensions,
    PanResponder,
    ScrollView,

} from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import api from '../../Services/api'
import styles from "./styles";
import CardMovimentacoesEstoque from '../card/cardEstoque/CardMovimentacoesEstoque'
import CardInfo from "../card/cardInfo/CardInfo";
import HeaderBar from "../header/headerTopBarSearch/HeaderBarBackAndSearch";

const TabelaEstoque = (props) => {

    const [estoque, setEstoque] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cardMovimentacoes, setCardMovimentacoes] = useState(false);
    const [cardInfo, setCardInfo] = useState(false);
    const [locationX, setlocationX] = useState(0);
    const [locationY, setLocationY] = useState(0);
    const [item, setItem] = useState([]);
    const [lista, setLista] = useState([{
        codigo: 'Primeiro código',
        descricao: 'FILME STRETCH MAN TRD 500 X 0,025 X 3 B4 T1,4',
        unidade: 'KG',
        fornecedor: 'THR',
        categoriaA: "STRETCH",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'
    },
    {
        codigo: 'SPMN101003',
        descricao: 'FILME STRETCH MAN TRD 500 X 0,030 X 3 B10 T1,4',
        unidade: 'KG',
        categoriaA: "STRETCH",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'
    },
    {
        codigo: 'SPMN101002',
        descricao: 'FILME STRETCH MAN TRD 500 X 0,025 X 3 B8 T1,4',
        unidade: 'KG',
        categoriaA: "STRETCH",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'


    },
    {
        codigo: 'MP1N101001',
        descricao: 'FLAKE AZUL',
        unidade: 'KG',
        categoriaA: "FLAKE",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'MP1N101002',
        descricao: 'FLAKE LARANJA',
        unidade: 'KG',
        categoriaA: "FLAKE",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'


    },
    {
        codigo: 'MP1N101003',
        descricao: 'PICOTADO DE PET',
        unidade: 'KG',
        categoriaA: "PICOTADO",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'MP1N101004',
        descricao: 'FILME SACARIA',
        unidade: 'KG',
        categoriaA: "SACARIA",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'MP1N101005',
        descricao: 'FLEXUS 9001',
        unidade: 'KG',
        categoriaA: "PEDBL",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'MP1N101006',
        descricao: 'LL - 250 AF',
        unidade: 'KG',
        categoriaA: "FLAKE",
        categoriaB: "MATERIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'SPJN501005',
        descricao: 'FILME STRETCH JUMBO PL 500 X 0,025 X 3 B50 T1,4',
        unidade: 'KG',
        categoriaA: "JUMBO STRETCH",
        categoriaB: "PRODUTO ACABADO / MATÉRIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'SPJN501025',
        descricao: 'FILME STRETCH JUMBO PL 500 X 0,021 B50 T1,4',
        unidade: 'KG',
        categoriaA: "JUMBO STRETCH",
        categoriaB: "PRODUTO ACABADO / MATÉRIA PRIMA",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'PETN101001',
        descricao: 'FITA DE ARQUEAR PET VDE REC 10 X 0,09 C/900',
        unidade: 'ROL',
        categoriaA: "FITA PET",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'PETN101002',
        descricao: 'FITA DE ARQUEAR PET VDE REC 12 X 0,65 C/1200',
        unidade: 'ROL',
        categoriaA: "FITA PET",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'FPAN101001',
        descricao: 'FITA DE ARQUEAR PP PTA 10 X 0,65 C/3000',
        unidade: 'ROL',
        categoriaA: "FITA PP",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'FPAN101002',
        descricao: 'FITA DE ARQUEAR PP COL 10 X 0,65 C/3000',
        unidade: 'ROL',
        categoriaA: "FITA PP",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'FPAN101003',
        descricao: 'FITA DE ARQUEAR PP BCA 10 X 0,65 C/3000',
        unidade: 'ROL',
        categoriaA: "FITA PP",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'

    },
    {
        codigo: 'FPAN101004',
        descricao: 'FITA DE ARQUEAR PP BCA 10 X 0,65 C/2200',
        unidade: 'KG',
        unidade: 'ROL',
        categoriaA: "FITA PP",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'


    },

    {
        codigo: 'FPAN101005',
        descricao: 'FITA DE ARQUEAR PP COL 10 X 0,65 C/2200',
        unidade: 'ROL',
        categoriaA: "FITA PP",
        categoriaB: "PRODUTO ACABADO",
        categoriaC: "THR",
        quantidadeEstoque: 400,
        estoqueSeguranca: 200,
        estoqueMinimo: 50,
        estoqueMaximo: 40000,
        usuarioCadastro: "Vitor Hugo",
        dataHoraCadastro: "2023-01-11T13:05:10.382715Z",
        usuarioAlteracao: "Vitor Hugo",
        dataHoraAlteracao: '2023-01-11T13:05:10.382907Z'


    }
    ])

    useEffect(() => {
        api.get('/estoque')
            .then(response => {
                setEstoque(response.data)
            })
            .catch(error => console.error(error))
    }, [])



    const CONTAINER_HEIGHT = 50;
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;


    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            offsetAnim,
        ),
        0,
        CONTAINER_HEIGHT
    )

    var _clapedSrollValue = 0;
    var _offSetValue = 0;
    var _scrollValue = 0;
    useEffect(() => {
        scrollY.addListener(({ value }) => {
            const diff = value - _scrollValue;
            _scrollValue = value;
            _clapedSrollValue = Math.min(
                Math.max(_clapedSrollValue * diff, 0),
                CONTAINER_HEIGHT,
            )
        });
        offsetAnim.addListener(({ value }) => {
            _offSetValue = value;
        })
        props.navigate.setOptions({
            title: 'Estoque THR',
        });

        props.navigate.setOptions({ headerShown: false })

    }, [])

    const [search, setSearch] = useState('');

    const listaFiltrada = lista.filter(
        (descricao) => descricao.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );



    const headerTranslate = clampedScroll.interpolate({
        inputRange: [0, CONTAINER_HEIGHT],
        outputRange: [0, -CONTAINER_HEIGHT - 130],
        extrapolate: 'clamp',
    })

    const tabTranslate = clampedScroll.interpolate({
        inputRange: [0, CONTAINER_HEIGHT],
        outputRange: [0, CONTAINER_HEIGHT],
        extrapolate: 'clamp'

    })



    const Header = ({ back, text }) => {
        const [novaBusca, setNovaBusca] = useState('');
        return (
            <HeaderBar
                back={() => {
                    props.navigate.goBack()
                }}
                searchTable={() => {
                    setSearch(novaBusca)
                }}
                changeText={(e) => {
                    setNovaBusca(e)
                }}
                closeAndCancelSearch={(textSearch) => {
                    setNovaBusca(textSearch);
                    setSearch(textSearch);
                }}
                text={"Estoque"}
            />
        )
    }




    const setlocation = ({ ...props }) => {

        if (!cardInfo) {
            setCardInfo(!cardInfo)
        }
        setLocationY(props.pageY - 60)
        setlocationX(props.pageX - 50)

    }


    return (

        <View style={styles.container}>
            <View >
                <Animated.FlatList
                    scrollEventThrottle={16}
                    contentContainerStyle={{ top: CONTAINER_HEIGHT + 100, paddingBottom: 150 }}
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y),
                            props.navigate.getParent().setOptions({
                                tabBarStyle: {
                                    transform: [{
                                        translateY: tabTranslate
                                    }],
                                    backgroundColor: '#0000ae',
                                    height: CONTAINER_HEIGHT,
                                    position: 'absolute'
                                }
                            }),
                            props.navigate.setOptions({})
                        setCardInfo(false)
                        // setDimensiosFlat(e.nativeEvent)
                        // scrollPercentage(e.nativeEvent)

                        // {cardInfo ? setCardInfo(!cardInfo):null}
                    }}
                    data={listaFiltrada}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableNativeFeedback
                                onLongPress={(e) => {
                                    console.log('clique longo')
                                    setlocation(e.nativeEvent)
                                    setItem(item)
                                    // info(index)
                                    // setlocation(e.nativeEvent)
                                    // setLocationY(e.nativeEvent)
                                }}
                            >
                                <View id={index} style={[styles.card]}>

                                    <View style={styles.column}><Text style={styles.text}>{item.codigo}</Text></View>
                                    <View style={styles.column}><Text style={styles.text}>{item.descricao}</Text></View>
                                    <View style={[styles.column,{width:37}]}><Text style={styles.text}>{item.unidade}</Text></View>
                                    <View style={styles.column}><Text style={styles.text}>{item.quantidadeEstoque}</Text></View>

                                    {/* {cardInfo && index === findIndex && (
                                        <View
                                            style={{
                                                elevation: 7,
                                                position:'absolute',
                                                marginTop:100,
                                                display:'flex',
                                                left: 20,
                                                width: 100,
                                            }}
                                        >
                                            <CardInfo
                                                info={index}
                                            />
                                        </View>
                                    )} */}
                                </View>
                            </TouchableNativeFeedback>

                        )
                    }}
                    refreshControl={
                        <RefreshControl
                            progressViewOffset={120}
                            tintColor={"#0000ae"}
                            colors={['#0000ae', '#33c6be']}
                            refreshing={refreshing}
                            onRefresh={() => {
                                setRefreshing(true),
                                    setTimeout(() => {
                                        setLista([...lista])
                                        setRefreshing(false)

                                    }, 2000);

                            }}

                        />
                    }

                />

            </View>
            {cardInfo && (
                <View
                    style={{
                        elevation: 7,
                        position: 'absolute',
                        top: parseFloat(locationY),
                        left: parseFloat(locationX),
                        display: 'flex',
                        width: 100,
                    }}
                >
                    <CardInfo
                        navigation={props.navigate}
                        info={item}
                    // info={index}
                    />
                </View>
            )}
            <Animated.View style={[styles.containerHeader, {
                height: CONTAINER_HEIGHT,
                transform: [{
                    translateY: headerTranslate
                }],

            }]}>

                <Animated.View style={[styles.columnHeader,{
                    transform: [{
                        translateY: tabTranslate
                    }],

                }]}>
                    <View style={[styles.containerHeaderButton]}>
                        <Header
                            back={() => {
                                props.navigate.goBack()
                            }}
                            text={"Estoque"}
                        />
                    </View>
                    {/* <View style={{ backgroundColor: 'red' }}>
                        {props.navigate.setOptions({
                            headerSearchBarOptions: {
                                placeholder: 'Teste...'
                            }
                        })}
                    </View> */}
                </Animated.View>

                <View style={[styles.columnHeaderTable,{ backgroundColor:'#0000ae', height: CONTAINER_HEIGHT + 14,

                }]}>
                    <View style={styles.column}><Text style={styles.textHeader}>Código</Text></View>
                    <View style={styles.column}><Text style={styles.textHeader}>Descrição</Text></View>
                    <View style={[styles.column,{width:37}]}><Text style={styles.textHeader}>Uni.</Text></View>
                    <View style={styles.column}><Text style={styles.textHeader}>Quantidade</Text></View>
                </View>

            </Animated.View>
        </View>
    )
}

export default TabelaEstoque