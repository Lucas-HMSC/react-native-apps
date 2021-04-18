import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      <Text style={styles.txt}>Informe seu Peso: </Text>
      <TextInput
        autoFocus={true}
        keyboardType="numeric"
        onChangeText={(text) => props.aoModificar(text)}
        style={styles.txtInput}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%',
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
});
