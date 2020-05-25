import React from 'react';
import { } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPrincipalScreen from './modules/MenuPrincipalScreen'
import ChamadaScreen from './modules/ChamadaScreen'
import AdicionarTurmaScreen from './modules/AdicionarTurmaScreen'

export default function App() {

  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Principal">
        <Stack.Screen name="Tela Principal" component={MenuPrincipalScreen}/>
        <Stack.Screen name="Adicionar Turma" component={AdicionarTurmaScreen}/>
        <Stack.Screen name="Chamada" component={ChamadaScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}