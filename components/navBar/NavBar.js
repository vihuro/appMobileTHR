import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Expedicao from '../../pages/expedicao/Expedicao';
import TabBarButton from '../tabBarButton/TabBarButton';
import style from './style';
import theme from '../../theme/light'
import icons from '../../theme/icons/expo/Icon'
import EstoqueStack from './stack/EstoqueStack';
import LoginStack from './stack/LoginStack';

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.SECONDARY,
        tabBarStyle: { backgroundColor: theme.COLORS.PRIMARY},
        headerStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
        },
        headerTintColor: theme.COLORS.SECONDARY
      }}>
        <Tab.Screen
        name="LoginStack"
        component={LoginStack}
        options={{
          tabBarButton: ({ accessibilityState, children, ...props }) => (
            <View style={style.containerButton}  >
              <TabBarButton  {...props} type={icons.ICONS.AntDesign} name={'home'} active={accessibilityState.selected} />
            </View>
        )}}
        />
      <Tab.Screen
        name="StackEstoque"
        component={EstoqueStack}
        options={{
          tabBarButton: ({ accessibilityState, children, ...props }) => (
            <View style={style.containerButton}  >
              <TabBarButton  {...props} type={icons.ICONS.Feather} name={'box'} active={accessibilityState.selected} />
            </View>
        )}}
      />

      <Tab.Screen
        name="Expedicao"
        component={Expedicao}
        options={{
          tabBarButton: ({accessibilityState, children, ...props}) =>(
            <View style={style.containerButton} >
              <TabBarButton {...props} type={icons.ICONS.Feather}name="truck" active={accessibilityState.selected} />
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