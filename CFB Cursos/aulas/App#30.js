import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Globais from './componentes/Globais';

export default class App1 extends Component {
  nome = Globais.nome;
  canal = Globais.canal;
  num = Globais.num;

  render() {
    return (
      <View>
        <Text>Nome: {this.nome}</Text>
        <Text>Canal: {this.canal}</Text>
        <Text>Número: {this.num}</Text>
      </View>
    );
  }
}