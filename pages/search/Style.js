import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        borderRadius: 7,
        marginTop: 7,
        marginBottom:15,
        marginLeft: 10,
        elevation: 7,
        width: '95%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,

    },
    containerHeader:{
        top:5,
        elevation:7,
        backgroundColor:'white',
        padding:15,
        borderRadius:7

    },
    header: {
        flexDirection: 'row',
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3
    },
    columnHeadeCodigo: {
        width: 100
    },
    columnHeaderDescricao:{
        width: 235
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    containerDiponivelAndUnidade: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 7
    },

    rowUnidadeDisponivel: {
        width: 200,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:10,
        marginBottom:10

    },
    containerPlus:{
        width:360,
        marginTop:20,
        backgroundColor:'white',
        elevation:7,
        borderRadius:7,
    },
    cardPlus:{
        width:120,
        top:20,
        height:80,
        alignItems:'center',
        justifyContent:'center'
    },
    headerCardPlus:{
        flexDirection:'row',
        height:30,
        alignItems:'center',
        justifyContent:'space-between',
        padding:2,

    },
    rowCardPlus:{
        flexDirection:'row',
        justifyContent:'space-between',
        top:10,
        marginBottom:10

    },
    column:{
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTextCardPlus:{

    },
    containerCategoria:{
        top:10
    },
    infoUsuarioHoraCadastro:{
        width:300,
        marginTop:100,
        elevation:7,
        padding:5,
        backgroundColor:'white',
        borderRadius:7
    },
    containerUsuarioHoraCadastro:{
        marginTop:10
    }



})

export default style