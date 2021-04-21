import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App1() {
  const [curso, setCurso] = useState(null);

  const Armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor);
  };

  const Buscar = async (chave) => {
    const valor = await AsyncStorage.getItem(chave);
    setCurso(valor);
  };

  Armazenar('01', 'React Native');
  Armazenar('02', 'JavaScript');
  Armazenar('03', 'C++');
  Armazenar('04', 'HTML + CSS');

  Buscar('01');

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Armazenamento Local / Async-Storage</Text>
      <Text style={styles.txt}>Curso de {curso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  txt: {
    fontSize: 20,
    color: '#eee',
  },
});
