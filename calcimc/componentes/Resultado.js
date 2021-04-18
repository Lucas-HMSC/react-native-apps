import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      <Text style={styles.txtTitulo}>Resultado: {props.resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%',
  },
  txtTitulo: {
    fontSize: 20,
    alignSelf: 'center',
  }
});
