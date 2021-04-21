import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Local from './componentes/Geolocalizacao';

export default function App1() {
  return (
    <View style={styles.container}>
      <Local />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  txt: {
    fontSize: 20,
    color: '#eee',
  },
});
