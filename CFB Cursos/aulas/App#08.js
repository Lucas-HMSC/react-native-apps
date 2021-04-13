import React from 'react';
import { Text, View } from 'react-native';
import Caixas from './componentes/Caixas';
import style from './estilos/Estilos';

/* Formato Function */
export default function App1() {
  return (
    <View style={style.container}>
      <Caixas />
      <Text style={style.textoPadrão}>youtube.com/cfbcursos</Text>
      <Text style={style.textoTitulo}>cfbcursos.com.br</Text>
    </View>
  );
}