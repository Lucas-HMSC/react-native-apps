import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import style from './estilos/Estilos';
import CarroF from './componentes/CarroF';

export default function App1() {
  return (
    <SafeAreaView style={style.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <CarroF nome="Polo" />
      <CarroF nome="Fit" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  componentes: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
  },
});
