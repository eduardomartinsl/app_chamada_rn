import React from 'react';
import { } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPrincipalScreen from './modules/MenuPrincipalScreen'

export default function App() {

  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Principal" component={MenuPrincipalScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}