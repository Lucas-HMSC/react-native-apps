import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

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
      <View style={styles.bloco}>
        <Text style={styles.txt}>Informe seu Peso: </Text>
        <TextInput
          autoFocus={true}
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text)}
          style={styles.txtInput}
        ></TextInput>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.txt}>Informe sua Altura: </Text>
        <TextInput
          autoFocus={false}
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          style={styles.txtInput}
        ></TextInput>
      </View>
      <View style={styles.bloco}>
        <TouchableHighlight style={styles.btnCalc} onPress={() => calcIMC()}>
          <Text style={styles.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.txtTitulo}>Resultado: {resultado}</Text>
      </View>
      <View>
        <Text style={styles.txtTitulo}>Tabela IMC</Text>
        <Text style={styles.txt}>abaixo de 18,5      -   Abaixo do peso</Text>
        <Text style={styles.txt}>entre 18,6 e 24,9   -   Peso Ideal</Text>
        <Text style={styles.txt}>entre 25,0 e 29,9   -   Levemente acima do peso</Text>
        <Text style={styles.txt}>entre 30,0 e 34,9   -   Obesidade Grau I</Text>
        <Text style={styles.txt}>entre 35,0 e 34,9   -   Obesidade Grau II (severa)</Text>
        <Text style={styles.txt}>acima de 40         -   Obesidade Grau III (mórbida)</Text>
      </View>
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
  },
  txtTitulo: {
    fontSize: 20,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 15,
  },
  txtInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#eee',
  },
});
