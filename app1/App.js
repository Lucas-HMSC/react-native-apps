import React from 'react';
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
import Caixas from './componentes/Caixas';
import style from './estilos/Estilos';

/* Formato Function */
export default function App1() {
  let vexibir = false;
  return (
    <View style={style.container}>
      <Button 
        title='Mostrar Mensagem'
        onPress={() => Alert.alert('Aviso', 'Curso de React Native')}
      />
      <Image
        // source={require('./assets/icon.png')}
        source={{ uri: 'https://cfbcursos.com.br/logoCanal.png' }}
        style={estilo.logo}
      />
      <Text style={style.textoPadrão}>youtube.com/cfbcursos</Text>
      <Text style={style.textoTitulo}>cfbcursos.com.br</Text>
      {vexibir ? <Text>Curso de React Native</Text> : <Text>- - -</Text>}
      {vexibir && <Text>Renderizado com Operador AND</Text>}
    </View>
  );
}

const estilo = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
