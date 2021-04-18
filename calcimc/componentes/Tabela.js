import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <View>
      <Text style={styles.txtTitulo}>Tabela IMC</Text>
      <Text style={styles.txt}>abaixo de 18,5 - Abaixo do peso</Text>
      <Text style={styles.txt}>entre 18,6 e 24,9 - Peso Ideal</Text>
      <Text style={styles.txt}>
        entre 25,0 e 29,9 - Levemente acima do peso
      </Text>
      <Text style={styles.txt}>entre 30,0 e 34,9 - Obesidade Grau I</Text>
      <Text style={styles.txt}>
        entre 35,0 e 34,9 - Obesidade Grau II (severa)
      </Text>
      <Text style={styles.txt}>acima de 40 - Obesidade Grau III (mórbida)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitulo: {
    fontSize: 20,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 15,
  },
});
