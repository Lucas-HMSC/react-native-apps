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
  const maxGiros = 9;
  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function girarMoeda() {
    iMoeda = 0;
    for (let i = 0; i < maxGiros * 2; i++) {
      iMoeda++;
      if (iMoeda > 1) {
        iMoeda = 0;
      }
      setMoedaAtual(moedas[iMoeda]);
      await espera(100);
    }
    let res = Math.floor(Math.random() * 10) + 1;
    if (res <= 5) res = 0;
    else res = 1;
    setMoedaAtual(moedas[res]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cara ou Coroa</Text>
      <Image source={moedaAtual} />
      <Button title="Girar" onPress={() => girarMoeda()} />
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
