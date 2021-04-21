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
  const [operacao, setOperacao] = useState(0);
  const [resultado, setResultado] = useState(0);

  const operar = () => {
    setResultado(eval(operacao));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora - CFB Cursos</Text>
      <View style={styles.display}>
        <TextInput
          value={String(operacao)}
          style={styles.txtDspOper}
          onChangeText={(texto) => setOperacao(texto)}
        ></TextInput>
        <TextInput
          value={String(resultado)}
          style={styles.txtDspRes}
        ></TextInput>
      </View>
      <View>
        <TouchableHighlight style={styles.btn} onPress={() => operar()}>
          <Text>OPERAR</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  display: {
    backgroundColor: '#333',
    padding: 10,
  },
  txtDspOper: {
    color: '#fff',
  },
  txtDspRes: {
    color: '#fff',
  },
  btn: {
    backgroundColor: '#aaa',
    padding: 20,
  },
});
