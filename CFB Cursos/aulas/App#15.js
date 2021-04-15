import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import Lp from './componentes/ListaPlana';
import style from './estilos/Estilos';

const image = { uri: 'https://reactjs.org/logo-og.png' };

export default function App1() {
  let vexibir = false;
  return (
    <View style={style.container}>
      <ImageBackground source={image} style={estilos.imagemFundo}>
        <View style={estilos.componentes}>
          <Text style={estilos.texto}>CFB Cursos</Text>
          <Text style={estilos.texto}>Curso de React Native</Text>
          {/* <Lp /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const estilos = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  componentes: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
  },
});