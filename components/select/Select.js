import react, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal
} from "react-native";
import style from "./style";
import Icons from '../../theme/icons/expo/Icon'


const Select = ({ text, action, title }) => {
    const [textProps, setText] = useState("");
    const [visibleModal, setVisibleModal] = useState(false);
    const [optinsProps, setOptionsProps] = useState([
        {TIPO:"ENTRADA"},
        {TIPO:"SAÍDA"}
    ]);

    function renderOptions({item}){
        return(
            <TouchableOpacity style={style.optionsContainer} onPress={() =>{
                setText(item.TIPO)
                setVisibleModal(false)
            }}>
                <Text style={style.optionText}>
                    {item.TIPO}
                </Text>
            </TouchableOpacity>
        )
    }
    

    useEffect(() => {
        setText(text)
    }, [])

    return (
        <TouchableOpacity style={style.container} onPress={() => setVisibleModal(true)}>
            <Text style={style.text}>
                {textProps}
            </Text>
            <Icons.ICONS.AntDesign name="caretdown" size={10} color='#ccc' />
            <Modal
                animationType="slide"
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <View style={style.modal}>
                    <TouchableOpacity onPress={() => setVisibleModal(false)}>
                        <Icons.ICONS.AntDesign name="caretleft" size={10} color="#ccc" />
                    </TouchableOpacity>
                    <Text style={style.modalTitle}>
                        {title}
                    </Text>
                    <TouchableOpacity onPress={() => setVisibleModal(false)}>
                        <Text style={style.modalCancel}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                data={optinsProps}
                renderItem={(item) => renderOptions(item)}
                />
            </Modal>
        </TouchableOpacity>
    )

}

export default Select