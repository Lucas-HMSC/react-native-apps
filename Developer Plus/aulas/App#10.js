import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class PizzaTranslatorApp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
        <View style={styles.msgDireita}>
          <Text style={styles.txt}>Olá, tudo bem?</Text>
        </View>
        <View style={styles.msgEsquerda}>
          <Text style={styles.txt}>Tudo bem e você?</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
  },
  msgDireita: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  msgEsquerda: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
