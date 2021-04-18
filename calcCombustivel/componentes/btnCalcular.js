import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      <TouchableHighlight style={styles.btn} onPress={props.aoPressionar}>
        <Text style={styles.txtBtn}>Calcular</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#083863',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
  },
  txtBtn: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
  },
});
