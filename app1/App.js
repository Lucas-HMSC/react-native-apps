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
      <Button
        title="Tela Cursos"
        onPress={() => navigation.navigate('Cursos')}
      />
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

function TelaCursos({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Tela Cursos</Text>
      <Button
        title="React Native"
        onPress={() =>
          navigation.navigate('CursoReactNative', {
            aulas: 100,
            autor: 'Bruno',
          })
        }
      />
    </View>
  );
}

function TelaCursoReactNative({ route, navigation }) {
  const { aulas, autor } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar para Cursos" onPress={() => navigation.goBack()} />
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
        <Pilha.Screen
          name="Cursos"
          component={TelaCursos}
          options={{
            title: 'Cursos do Canal',
          }}
        />
        <Pilha.Screen
          name="CursoReactNative"
          component={TelaCursoReactNative}
          options={{
            title: 'Cursos de React Native',
          }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
