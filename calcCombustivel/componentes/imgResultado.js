import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default (props) => {
  return <View style={styles.bloco}></View>;
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
