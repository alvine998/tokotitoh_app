import React from 'react'
import Splash from './src/pages/splash'
import Home from './src/pages/home'
import { NavigationContainer } from '@react-navigation/native'
// import BottomTabs from './src/components/Tabs/BottomTabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Home' component={Home} />
        {/* <Stack.Screen name='Main' component={BottomTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}