import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Button, Text, Dimensions, TextInput, TouchableHighlight, View, Image, ImageBackground, TouchableNativeFeedback } from 'react-native';
import api from '../../Services/api'
import { LinearGradient } from 'expo-linear-gradient';
import 'localstorage-polyfill';
import styles from './styles'

const { height, width } = Dimensions.get('window')


const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Menu" }]
    })
    const login = {
      'apelido': usuario,
      'senha': senha
    };
    // await api.post('/login', login)
    //   .then(response => alert(JSON.stringify(response.data)))
    //   .catch(error => {
    //     if (error.response.data) {
    //       alert(error.response.data)
    //     }
    //     else {
    //       console.log(error)
    //     }

    //   });
  }

  return (

    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.iconLogo} source={require('../../assets/TelaPadraoSemIcone.png')}>
        <Image style={{ display: 'flex', position: 'absolute', width: 300, height: 200, left: 40, top: 20 }} source={require('../../assets/logoMarcaSemFundo.png')} />

        <View style={styles.wrapLogin}>
          <Text style={styles.infoUser}>Usuário:</Text>
          <View style={styles.containerInput}>
            <TextInput value={usuario} onChangeText={e => setUsuario(e)} style={styles.input} />
          </View>
          <Text style={styles.infoUser}>Senha:</Text>
          <View style={styles.containerInput}>
            <TextInput secureTextEntry={true} value={senha} onChangeText={(e) => setSenha(e)} style={styles.input} />
          </View>
          <View style={styles.containerButton}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(
            'black',false)} onPress={() => { logar() }}>
            <View style={styles.button}>
              <Text style={{ color: '#fff', fontSize: 15 }}>ENTRAR</Text>
            </View>
          </TouchableNativeFeedback>
            
          </View>
          
        </View>
        <StatusBar translucent={true} style='light' />
      </ImageBackground>
    </View>

  )

}

export default Login
