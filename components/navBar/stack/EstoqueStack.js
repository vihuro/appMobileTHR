
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../../../theme/light'

import EstoqueMenu from '../../../pages/estoque/estoqueMenu/EstoqueMenu';
import MovimentacoesEstoque from '../../../pages/estoque/MovimentacoesEstoque';
import NovaMovimentacao from '../../../pages/estoque/movimentacoes/NovaMovimentacao';
import Estoque from '../../../pages/estoque/Estoque';
import Search from '../../../pages/search/PageSearch';

const Stack = createNativeStackNavigator();

export default EstoqueStack = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerTransparent: false,
        tabBarActiveTintColor: theme.COLORS.SECONDARY,
        tabBarStyle: { backgroundColor: theme.COLORS.PRIMARY },
        headerStyle: {
          backgroundColor: theme.COLORS.PRIMARY
        },
        headerTintColor: theme.COLORS.SECONDARY,
        // headerSearchBarOptions:{placeholder:"Pesquisar"}
      }}>
        <Stack.Screen name="MenuEstoque" component={EstoqueMenu} />
        <Stack.Screen name="MovimentacoEstoque" component={MovimentacoesEstoque} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
            heigth: 300,
            elevation: 25,
            borderBottomLeftRadius: 50
        }}} />
        <Stack.Screen name="Estoque" component={Estoque} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
            heigth: 300,
            elevation: 25,
            borderBottomLeftRadius: 50
          }
        }} />
        <Stack.Screen options={{headerShown:true}} name={"Search"} component={Search} /> 
        <Stack.Screen options={{headerShown:true}} name={"NovaMovimentacao"} component={NovaMovimentacao} />
      </Stack.Navigator>
    )
  }