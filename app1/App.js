import React from 'react';
import { Text, View } from 'react-native';
import C1 from './componentes/comp1';
import style from './estilos/Estilos';

/* Formato Function */
export default function App1() {
  return (
    <View style={style.container}>
      <C1 curso="React Native" nota="10" />
      <C1 curso="C++" nota="10" />
      <C1 curso="Javascript" nota="10" />
      <C1 curso="C#" nota="10" />
      <Text style={style.textoPadrão}>youtube.com/cfbcursos</Text>
      <Text style={style.textoTitulo}>cfbcursos.com.br</Text>
    </View>
  );
}
