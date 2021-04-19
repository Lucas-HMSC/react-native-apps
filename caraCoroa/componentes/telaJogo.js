import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import Globais from './globais';

export default function telaJogo() {
  const moedas = [
    require('../assets/moeda_coroa.png'),
    require('../assets/moeda_cara.png'),
  ];
  let iMoeda = 0;
  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);
  let maxGiros = Globais.qtdeGiros;
  let tempoGiro = Globais.tempEspera;

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function girarMoeda() {
    maxGiros = Globais.qtdeGiros;
    tempoGiro = Globais.tempEspera;
    iMoeda = 0;
    for (let i = 0; i < maxGiros * 2; i++) {
      iMoeda++;
      if (iMoeda > 1) {
        iMoeda = 0;
      }
      setMoedaAtual(moedas[iMoeda]);
      await espera(tempoGiro);
    }
    let res = Math.floor(Math.random() * 10) + 1;
    if (res <= 5) res = 0;
    else res = 1;
    setMoedaAtual(moedas[res]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>{Globais.titulo}</Text>
      <Image source={moedaAtual} />
      <TouchableHighlight
        style={styles.btnGirar}
        onPress={() => {
          girarMoeda();
        }}
      >
        <Text style={styles.txtBtn}>Girar</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontSize: 30,
    color: '#fc0',
    textTransform: 'uppercase',
  },
  btnGirar: {
    margin: 20,
    backgroundColor: '#fc0',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    color: '#222',
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
