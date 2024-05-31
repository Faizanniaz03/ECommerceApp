import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import ProductDetails from './src/screens/ProductDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import Splash from './src/screens/Splash'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import AddNew from './src/screens/AddNew'
import AddCart from './src/screens/AddCart'
import {store} from './src/Redux/store'
import {Provider} from 'react-redux'
const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  return (  
    <Provider store={store}>
       <><NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={ProductDetails} />
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='AddNew' component={AddNew}/>
        <Stack.Screen name='Cart' component={AddCart}/>
      </Stack.Navigator>
    </NavigationContainer></>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})

