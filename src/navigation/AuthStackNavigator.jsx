import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignUp from '../screens/SignUp';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator()
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
     
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator

const styles = StyleSheet.create({})
