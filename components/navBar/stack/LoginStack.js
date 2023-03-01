import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../../../theme/light';
import Login from '../../../pages/login/Login';
import { Principal } from '../../../pages/principal/Principal';



const Stack = createNativeStackNavigator();

export default LoginStack = () =>{
  return(
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
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Menu' component={Principal}/>
    </Stack.Navigator>
  )
}