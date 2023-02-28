import { Text, View, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Principal } from '../../pages/principal/Principal';
import Estoque from '../../pages/estoque/Estoque';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Expedicao from '../../pages/expedicao/Expedicao';
import EstoqueMenu from '../../pages/estoque/estoqueMenu/EstoqueMenu';
import TabBarButton,{Icons} from '../tabBarButton/TabBarButton';
import { useState } from 'react';
import MovimentacoesEstoque from '../../pages/estoque/MovimentacoesEstoque';
import Search from '../../pages/search/PageSearch';
import NovaMovimentacao from '../../pages/estoque/movimentacoes/NovaMovimentacao';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const EstoqueStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Estoque" component={Estoque} />
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  )
}

const EstoqueMenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      headerTransparent: false,
      tabBarActiveTintColor: '#ffff',
      tabBarStyle: { backgroundColor: "#0000ae" },
      headerStyle: {
        backgroundColor: '#0000ae'
      },
      headerTintColor: "#fff",
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


export default function MyTabs() {
  let [activeColor, setActiveColor] = useState('#8e8eef');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffff',
        tabBarStyle: { backgroundColor: "#0000ae" },
        headerStyle: {
          backgroundColor: '#0000ae',
        },
        headerTintColor: "#fff"
      }}>
      <Tab.Screen
        name="Menu"
        component={Principal}
        options={{
          tabBarLabel: 'MENU',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name='home' />
          ),
          tabBarButton: ({ accessibilityState, children, ...props }) => (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
              <TabBarButton  {...props} type={Icons.AntDesign} name={'home'} active={accessibilityState.selected} />
            </View>
          )}}
      />
      <Tab.Screen
        name="Estoque"
        component={EstoqueMenuStack}
        options={{
          tabBarLabel: 'Estoque',
          tabBarButton: ({ accessibilityState, children, ...props }) => (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
              <TabBarButton  {...props} type={Icons.Feather} name={'box'} active={accessibilityState.selected} />
            </View>
        )}}
      />

      <Tab.Screen
        name="Expedicao"
        component={Expedicao}
        options={{
          tabBarLabel: 'Updates',

          tabBarButton: ({accessibilityState, children, ...props}) =>(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TabBarButton {...props} type={Icons.Feather}name="truck" active={accessibilityState.selected} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}