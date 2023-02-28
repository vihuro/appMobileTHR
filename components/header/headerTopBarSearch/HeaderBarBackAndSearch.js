import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableHighlight,
    Animated,
    Dimensions,
    TouchableNativeFeedback,
    TextInput
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { StatusBar } from "expo-status-bar";



const HeaderBar = ({ back, 
                    text,
                    changeText,
                    closeAndCancelSearch }) => {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState(new Animated.Value(0));
    const [textSearch, setTextSearch] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() =>{
        setTextSearch(changeText)
    },[])




    function OpenToggle() {
        if (!toggle) {
            Animated.spring(
                width, {
                toValue: 250,
                friction: 6,
                useNativeDriver: true
            }
            ).start();
            setToggle(!toggle)
        } else {
            CloseToggleAndSearch()
        }
    }

    function CloseToggle() {
        if (toggle) {
            Animated.spring(
                width, {
                toValue: 0,
                friction: 6,
                useNativeDriver: true
            }
            ).start();
            setToggle(!toggle)
        }
    }

    function CloseToggleAndSearch() {
        setSearch("")
        valueSearch()
        CloseToggle()
    }

    function CancelSearch() {
        setSearch("");
        valueSearch();
        CloseToggle();
    }

    function valueSearch(){
        var value = textSearch;
        if(value === undefined){
            return closeAndCancelSearch("")
        }
        return(closeAndCancelSearch(value))
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerTitleAndBack}>
                <TouchableHighlight
                    onPress={back}
                    underlayColor={'#05506B'}
                    style={styles.containerButton}> 
                        <View >
                        <Ionicons name="arrow-back" size={25} color={'white'} />
                        </View>
                </TouchableHighlight>
                <View ><Text style={styles.titleHeader}>{text}</Text></View>
            </View>
            <View style={{
                
            }}>
                <Animated.View
                    style={[styles.containerButton,{
                        transform: [{
                            translateX: width.interpolate({
                                inputRange: [0, 100],
                                outputRange: [0, -137]
                            })
                        }]
                    }]}
                >
                    <TouchableHighlight
                        onPress={() => { OpenToggle() }}
                        underlayColor={'#05506b'}
                        style={[styles.containerButton,{             
                            backgroundColor: '#0000ae'
                        }]}
                    >
                        <Ionicons
                            name="search-outline"
                            size={25}
                            color={'white'}
                        />
                    </TouchableHighlight>
                </Animated.View>
                <Animated.View style={[styles.containerInput,{
                    transform: [
                        {
                            translateX: width.interpolate({
                                inputRange: [0, 100],
                                outputRange: [0, -140]
                            })
                        }
                    ],
                }]}>
                    <View style={styles.wrapContainerInputSearch}>
                        <TouchableNativeFeedback >
                        <View style={[styles.containerButton]}>
                            <Ionicons name="camera-outline" size={25} color={'white'} />
                        </View>

                        </TouchableNativeFeedback>

                        <TextInput
                            value={textSearch}
                            placeholder={"Pesquisar..."}
                            maxLength={45}
                            placeholderTextColor={'gray'}
                            onChangeText={(e) => {
                                setTextSearch(e)
                                changeText(e)
                            }}
                            onSubmitEditing={() => { CloseToggleAndSearch()}}
                            textColor={'white'}
                            style={styles.input}
                        />
                        <TouchableNativeFeedback
                            onPress={() => {
                                CancelSearch();
                            }}
                        >
                            <View style={styles.containerButtonClose}>
                                <Ionicons
                                    name="close-outline"
                                    size={20}
                                    color={'white'}
                                />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </Animated.View>
            </View>
        </View>
    )

}

export default HeaderBar