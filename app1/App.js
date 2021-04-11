import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import style from './estilos/Estilos';

export default function App1() {
  const [cor, setCor] = useState('#222');

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={cor}
        barStyle="light-content"
        hidden={false}
      />
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Button
        title="Vermelho"
        onPress={() => {
          setCor('#D32F2F');
        }}
      />
      <Button
        title="Azul"
        onPress={() => {
          setCor('#303F9F');
        }}
      />
      <Button
        title="Verde"
        onPress={() => {
          setCor('#2E7D32');
        }}
      />
    </SafeAreaView>
  );
}
