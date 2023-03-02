import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8F9FA',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:'#555'
    },
    modal:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"

    },
    modalTitle:{
        fontSize:14,
        color:"#555"
    },
    modalCancel:{
        fontWeight:"600",
        color:'red'
    },
    optionsContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        padding:10
    },
    optionText:{
        fontSize:16,
        color:"#555"
    }

})

export default style