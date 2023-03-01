import { Image, ImageBackground, Text,View , StyleSheet} from 'react-native';
import styles from './styles'
import 'localstorage-polyfill';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/navBar/NavBar';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  return (
    <NavigationContainer style={styles.container}><ImageBackground source={require('./assets/telaPadraoComIcone.png')}/>
    <MyTabs/>
    <StatusBar/>
      {/* <Stack.Navigator screenOptions={{headerShown:true}}>      
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false, headerStyle:{backgroundColor:'#3f31ea', color:'#fff'}}} name="Menu" component={Menu} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

