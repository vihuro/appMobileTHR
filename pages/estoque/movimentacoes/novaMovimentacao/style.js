import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },
    wrapForm:{
        height:420,
        marginBottom:180
        
    },
    containerForm:{
        backgroundColor:'white',
        borderRadius:7,
        elevation:7,
        width:350,
        top:40,
        padding:10
    },
    titleInput:{

        marginBottom:10
    },
    containerInput:{
        marginBottom:15,
        borderBottomColor:'gray',
        borderBottomWidth:1

    },
    row:{
        borderBottomColor:'gray',
        borderBottomWidth:1
    },
    input:{
        backgroundColor:'gray',
        borderRadius:7,
        paddingLeft:10,
        color:'white',
    },
    ContainerinputDescription:{
        backgroundColor:'gray',
        borderRadius:7,
        width:150,
        height:90,
        marginLeft:10
    },
    inputDescription:{
        padding:0, 
        backgroundColor:'gray',
        color:'white'
    }

})

export default style