import react from "react";
import {
    View,
    Text,
    TouchableNativeFeedback
} from "react-native";
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import styles from "./style";



const CardInfo = ({ info, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                    'white', false)}
                onPress={() => { navigation.navigate("Search", info) }}
            >
                <View style={styles.containerButton}>
                    <Feather name="plus" size={18} color={'white'} />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                style={{ overflow: 'hidden' }}
                background={TouchableNativeFeedback.Ripple(
                    'white', false)}
                onPress={() => { }}
            >
                <View style={styles.containerButton}>
                    <Feather name="repeat" size={18} color={'white'} />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default CardInfo