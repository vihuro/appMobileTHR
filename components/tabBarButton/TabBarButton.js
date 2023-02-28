import react from "react";
import {View,Text,TouchableNativeFeedback} from 'react-native'
import { AntDesign ,
        FontAwesome,
        Ionicons,
        Entypo,
        EvilIcons,
        MaterialIcons,
        Octicons,
        Fontisto,
        Zocial,
        SimpleLineIcons,
        FontAwesome5,
        MaterialCommunityIcons ,
        Feather} from '@expo/vector-icons';
import Icon from "@expo/vector-icons";

export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    EvilIcons,
}


const TabBarButton = ({active,name,type,...props}) =>{

    const Tag = type; 

    return(
        <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
            'black',true
        )}
        onPress={() =>{
            props.onPress()
        }}>
        <View style={{flex:1,borderRadius:10,width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Tag name={name} size={24} color={active ? 'white':'#8E8E8F'} />
        </View>
    </TouchableNativeFeedback>

    )

} 

export default TabBarButton