import react from "react";
import { Text, TouchableHighlight, TouchableNativeFeedback, View } from "react-native";
import styles from "./styles";
import THEME from "../../theme/light"



const UiButton = ( {
    text,
    action,
    color,
    visible} ) => {

    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
                'black'
            )}
            onPress={action}>
                <View style={[styles.containetButton,{backgroundColor:color, display:visible}]}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )

}

UiButton.defaultProps ={
    color:THEME.COLORS.PRIMARY,
    visible:"flex"
}


export default UiButton