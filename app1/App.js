import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Lp from './componentes/ListaPlana';
import style from './estilos/Estilos';

export default function App1() {
  let vexibir = false;
  return (
    <View style={style.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Lp />
    </View>
  );
}
