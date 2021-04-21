import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default (props) => {
  const estilosBotoes = [styles.btn];
  if (props.duplo) {
    estilosBotoes.push(styles.btnDuplo);
  }
  if (props.igual) {
    estilosBotoes.push(styles.btnIgual);
  }
  if (props.operacao) {
    estilosBotoes.push(styles.btnOper);
  }
  if (props.ac) {
    estilosBotoes.push(styles.btnAC);
  }
  if (props.bs) {
    estilosBotoes.push(styles.btnBS);
  }

  return (
    <TouchableHighlight onPress={props.aoClicar}>
      <Text style={estilosBotoes}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
  },
  btnOper: {
    color: '#00C853',
  },
  btnIgual: {
    color: '#DD2C00',
  },
  btnAC: {
    color: '#FFD600',
  },
  btnBS: {
    color: '#0091EA',
  },
  btnDuplo: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
});
