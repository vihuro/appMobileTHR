import react from "react";
import { Text, TouchableHighlight, TouchableNativeFeedback, View } from "react-native";
import styles from "./styles";



const UiButton = ( props ) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
                'black'
            )}
            onPress={props.action}>
                <View style={{padding:20,backgroundColor:'#0000ae'}}>
                    <Text style={{color:'white'}} >{props.text}</Text>
                </View>
            </TouchableNativeFeedback>


        </View>
    )
}


export default UiButton