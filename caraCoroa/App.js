import React from 'react';
import { StyleSheet } from 'react-native';
import TelaJogo from './componentes/telaJogo';
import TelaConfig from './componentes/telaConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Menus = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={temaMenu}>
      <Menus.Navigator initialRouteName="Jogo">
        <Menus.Screen
          name="Jogo"
          component={TelaJogo}
          options={{ title: 'Jogo' }}
        />
        <Menus.Screen name="Configurações" component={TelaConfig} />
      </Menus.Navigator>
    </NavigationContainer>
  );
}

const temaMenu = {
  dark: false,
  colors: {
    primary: 'rgb(255, 204, 0)', //Cor do texto menu selecionado
    background: 'rgb(34, 34, 34)', //Cor do fundo
    card: 'rgb(34, 34, 34)', //Cor do fundo do menu
    text: 'rgb(255, 255, 255)', //Cor do texto
    border: 'rgb(255, 255, 255)', //Cor da borda
    Notification: 'rgb(255, 0, 0)', //Cor do emblema do navegador
  },
};

const styles = StyleSheet.create({});
