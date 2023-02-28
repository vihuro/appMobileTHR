import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        borderRadius:7,
        flex:1,
        position:'absolute', 
        flexDirection: 'row',
        width:100,
        backgroundColor:'#2C2C2C',
        shadowColor:'black' ,
        elevation:7
    },
    containerButton:{
        flex: 1,
        overflow:'hidden',
        borderRadius:18/2,
        height: 35,
        alignItems:'center',
        justifyContent:'center'
    }

})

export default styles