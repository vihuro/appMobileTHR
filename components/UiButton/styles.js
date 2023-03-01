import { StyleSheet } from "react-native";
import THEME from '../../theme/light'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#816ded',
    },
    containetButton:{
        padding:20,
        backgroundColor:THEME.COLORS.PRIMARY
    },
    text:{
        color:THEME.COLORS.TEXT_PRIMARY
    }
})


export default styles