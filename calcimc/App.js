import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import Peso from './componentes/Peso';
import Altura from './componentes/Altura';
import BtnCalcular from './componentes/btnCalcular';
import Resultado from './componentes/Resultado';
import Tabela from './componentes/Tabela';

export default function calcimc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcIMC = () => {
    if (peso === 0 || !peso) {
      alert('Informe o Peso');
      return;
    }
    if (altura === 0 || !altura) {
      alert('Informa a Altura');
      return;
    }
    const result = peso / Math.pow(altura, 2);
    setResultado(result.toFixed(1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.txtTitulo}>Calculadora de IMC</Text>
      </View>

      <Peso aoModificar={setPeso} />
      <Altura aoModificar={setAltura} />
      <BtnCalcular aoClicar={calcIMC} />
      <Resultado resultado={resultado} />
      <Tabela />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  bloco: {
    marginBottom: 20,
    width: '100%',
  },
  txtTitulo: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
