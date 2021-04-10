import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import style from './estilos/Estilos';
import CarroC from './componentes/CarroC';
import CarroF from './componentes/CarroF';

export default function App1() {
  return (
    <View style={style.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <CarroC nome="Golf" />
      <CarroC nome="HRV" />
      <CarroF nome="Polo" />
      <CarroF nome="Fit" />
    </View>
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
