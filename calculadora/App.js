import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const soma = () => {
    setResultado(valor1 + valor2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora - CFB Cursos</Text>
      <TextInput
        value={String(valor1)}
        style={styles.display}
        onChangeText={(texto) => setValor1(texto)}
      ></TextInput>
      <TextInput
        value={String(valor2)}
        style={styles.display}
        onChangeText={(texto) => setValor2(texto)}
      ></TextInput>
      <TextInput
        value={String(resultado)}
        style={styles.display}
        onChangeText={(texto) => setResultado(texto)}
      ></TextInput>
      <TouchableHighlight style={styles.btn} onPress={() => soma()}>
        <Text>SOMAR</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  display: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: '#aaa',
    padding: 20,
  },
});
