import { Image, ImageBackground, Text,View , StyleSheet} from 'react-native';
import styles from './styles'
import 'localstorage-polyfill';
import Login from './pages/login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './pages/menu/menu';
import  Estoque  from './pages/estoque/Estoque';
import MyTabs from './components/navBar/NavBar';
import MovimentacoesEstoque from './pages/estoque/MovimentacoesEstoque';
import { Principal } from './pages/principal/Principal';
import Expedicao from './pages/expedicao/Expedicao';
import EstoqueMenu from './pages/estoque/estoqueMenu/EstoqueMenu';
import Movimentacao from './pages/estoque/movimentacoes/Movimentacao';
import Search from './pages/search/PageSearch';
import NovaMovimentacao from './pages/estoque/movimentacoes/NovaMovimentacao';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

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

