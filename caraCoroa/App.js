import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Image,
} from 'react-native';

export default function App() {
  const moedas = [
    require('./assets/moeda_coroa.png'),
    require('./assets/moeda_cara.png'),
  ];
  let iMoeda = 0;
  const maxGiros = 20;
  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function giraMoeda() {}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cara ou Coroa</Text>
      <Image source={moedaAtual} />
      <Button title="Girar" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
