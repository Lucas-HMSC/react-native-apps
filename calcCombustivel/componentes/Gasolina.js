import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      <Text>Digite o preço da Gasolina</Text>
      <TextInput style={styles.txtInput} keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
  txtInput: {
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
});
