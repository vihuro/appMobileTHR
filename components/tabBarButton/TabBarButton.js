import {View,Text,TouchableNativeFeedback} from 'react-native'



const TabBarButton = ({active,name,type,...props}) =>{

    const Tag = type; 

    return(
        <TouchableNativeFeedback
        style={{
        }}
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