import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen  name='SignIn' component={Login}/>
        <Stack.Screen name='Register' component={Signup} />

        

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})