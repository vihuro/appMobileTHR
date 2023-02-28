import React from "react";
import {StyleSheet, Dimensions} from "react-native"

const {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
    
    backgroundColor:"#0000ae",

    },

    iconLogo:{

        width:'100%',
        height:'100%',

    },

    wrapLogin:{
        width:"80%",
        position:'relative',
        borderRadius:7,
        marginTop:300,
        marginLeft:"10%",
        marginRight:"10%",
        padding:7,

    },
    infoUser:{
        marginBottom:7,
        color:"white"
    },
    containerInput:{

        borderRightWidth:0,
        marginBottom:40,
        backgroundColor:"#e1e1e1",
        padding:10,
        borderRadius:7
    },
    input:{
        fontSize:14,
        marginLeft:2,
        borderRadius:7,
        color:"#525252",

    },
    containerButton:{
        overflow:'hidden',
        borderRadius:7,
        height:60,
        width:300,
        marginTop:100,
        marginBottom:30,
        borderColor:"#21d4fd",
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        borderRadius:7,
        width:300,
        height:60,
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
            
        color:"#4040ff",
        fontSize:15
    }
  });

  export default styles