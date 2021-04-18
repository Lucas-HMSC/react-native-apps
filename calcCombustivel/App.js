import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Gasolina from './componentes/Gasolina';
import Etanol from './componentes/Etanol';
import BtnCalcular from './componentes/btnCalcular';
import Resultado from './componentes/Resultado';
import ImgResultado from './componentes/imgResultado';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Gasolina />
      <Etanol />
      <BtnCalcular />
      <Resultado />
      <ImgResultado />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 10,
  },
});
