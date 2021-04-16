import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Gavetas = createDrawerNavigator();

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
    </View>
  );
}

export default function App1() {
  return (
    <NavigationContainer>
      <Gavetas.Navigator initialRouteName="Home">
        <Gavetas.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#4FC3F7',
            },
            headerTintColor: '#E1F5FE',
            headerRight: () => (
              <Button
                title="Cursos"
                color="#222"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />
        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{
            title: 'Tela Canal',
            headerStyle: {
              backgroundColor: '#4FC3F7',
            },
            headerTintColor: '#E1F5FE',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{
            title: 'Cursos do Canal',
          }}
        />
      </Gavetas.Navigator>
    </NavigationContainer>
  );
}