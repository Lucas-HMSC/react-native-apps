import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Globais from './globais';

export default function telaConfig() {
  const [giros, setGiros] = useState(Globais.qtdeGiros);
  const [tempo, setTempo] = useState(Globais.tempEspera);

  const setarGiros = (v) => {
    Globais.qtdeGiros = parseInt(v);
    setGiros(v);
  };

  const setarTempo = (v) => {
    Globais.tempEspera = parseInt(v);
    setTempo(v);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Quantidade de giros:</Text>
      <TextInput
        style={styles.cxTexto}
        value={String(giros)}
        onChangeText={(valor) => {
          setarGiros(valor);
        }}
      />
      <Text style={styles.txt}>Velocidade do giro:</Text>
      <TextInput
        style={styles.cxTexto}
        value={String(tempo)}
        onChangeText={(valor) => {
          setarTempo(valor);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  txt: {
    color: '#fff',
  },
  cxTexto: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#fc0',
  },
});
