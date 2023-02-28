import react from "react";
import style from "./Style";
import { Image, View } from "react-native";

const Header = () =>{
    return(
        <View style={style.container}>
            <View style={style.containerLogo}>
                <Image style={style.image} source={require('../../assets/logoMarcaSemFundo.png')} />
            </View>
        </View>
    )
}

export default Header