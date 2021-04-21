import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Display from './componentes/Display';
import Botao from './componentes/Botao';

export default function App() {
  const [operacao, setOperacao] = useState(0);
  const [resultado, setResultado] = useState(0);

  const operar = () => {
    setResultado(eval(operacao));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora - CFB Cursos</Text>
      <Display valor={0} res={0} />
      <View style={styles.btnContainer}>
        <Botao label="AC" ac aoClicar={() => {}}></Botao>
        <Botao label="(" aoClicar={() => {}}></Botao>
        <Botao label=")" aoClicar={() => {}}></Botao>
        <Botao label="/" operacao aoClicar={() => {}}></Botao>
        <Botao label="7" aoClicar={() => {}}></Botao>
        <Botao label="8" aoClicar={() => {}}></Botao>
        <Botao label="9" aoClicar={() => {}}></Botao>
        <Botao label="*" operacao aoClicar={() => {}}></Botao>
        <Botao label="4" aoClicar={() => {}}></Botao>
        <Botao label="5" aoClicar={() => {}}></Botao>
        <Botao label="6" aoClicar={() => {}}></Botao>
        <Botao label="-" operacao aoClicar={() => {}}></Botao>
        <Botao label="1" aoClicar={() => {}}></Botao>
        <Botao label="2" aoClicar={() => {}}></Botao>
        <Botao label="3" aoClicar={() => {}}></Botao>
        <Botao label="+" operacao aoClicar={() => {}}></Botao>
        <Botao label="0" aoClicar={() => {}}></Botao>
        <Botao label="." aoClicar={() => {}}></Botao>
        <Botao label="<-" bs aoClicar={() => {}}></Botao>
        <Botao label="=" igual aoClicar={() => {}}></Botao>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
