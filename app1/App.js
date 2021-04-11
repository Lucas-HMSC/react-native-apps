import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Pilha = createStackNavigator();

function TelaHome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Tela Home</Text>
      <Text>CFB Cursos</Text>
      <Button title="Tela Canal" onPress={() => navigation.navigate('Canal')} />
    </View>
  );
}

function TelaCanal({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Tela Canal</Text>
      <Text>youtube.com/cfbcursos</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App1() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Inicial',
          }}
        />
        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{
            title: 'Tela Canal',
          }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
