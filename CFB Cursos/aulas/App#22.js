import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import style from './estilos/Estilos';
import Modal from './componentes/Modal';

export default function App1() {
  return (
    <SafeAreaView style={style.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Modal />
    </SafeAreaView>
  );
}