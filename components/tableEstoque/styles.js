import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flex:1

    },

    card:{
        width:'95%',
        flexDirection:'row',
        backgroundColor:'white',
        marginLeft:10,
        elevation:5,
        borderRadius:7,
        alignItems:'center',
        marginBottom:10,
        padding:10
    },
    textHeader: {
        color:"#fff"
    },
    text:{
        fontSize:13,
        fontFamily:''
    },
    column:{
        width:100,
        marginLeft:4
    },
    containerHeader:{
        backgroundColor: '#0000ae',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    columnHeader:{
        elevation: 6,
        zIndex: 100,
        height: 87,
    },
    columnHeaderTable:{
        top: 0,
        left: 0,
        backgroundColor: '#0000ae',
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',

    },
    containerHeaderButton:{
        flex: 1, 
        flexDirection: 'row', 
        padding: 10,
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: '#0000ae' ,
        elevation:7

    },
})

export default styles