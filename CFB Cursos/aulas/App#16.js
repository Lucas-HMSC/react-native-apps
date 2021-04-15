import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Lp from './componentes/ListaPlana';
import style from './estilos/Estilos';

export default function App1() {
  const [ligado, setLigado] = useState(true);

  return (
    <View style={style.container}>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setLigado(!ligado)}
      />
      {ligado ? (
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React Native</Text>
        </View>
      ) : (
        <Text>* * *</Text>
      )}
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