import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 30,
        justifyContent: 'space-between', 
        backgroundColor: 'transparent'
    },
    containerTitleAndBack:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    containerButton:{
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    titleHeader:{
        fontSize: 20, 
        marginLeft: 10, 
        color: 'white'
    },
    containerButtonSearch:{
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    containerInput:{
        position: 'absolute',
        top: 0,
        left: 45,
    },
    wrapContainerInputSearch:{
        backgroundColor: '#0000ae',
        position: 'absolute',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        color:'white',
        borderColor: 'gray',
        width: 280,
        left:10,
        borderBottomWidth:1
    },
    containerButtonClose:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 20,
        height: 20,
        borderRadius: 10,
    },

})


export default styles