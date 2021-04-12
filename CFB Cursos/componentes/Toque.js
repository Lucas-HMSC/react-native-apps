import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function () {
  const [cont, setCont] = useState(0);

  const contar = () => {
    setCont(cont + 1);
  };

  return (
    <View>
      <TouchableHighlight
        style={style.botao}
        onPress={contar}
        underlayColor="#222"
      >
        <Text>Elemento Clicável</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={style.botao}
        onPress={contar}
        underlayColor="#222"
      >
        <Text>Elemento Clicável</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        style={style.botao}
        onPress={contar}
        underlayColor="#222"
      >
        <Text>Elemento Clicável</Text>
      </TouchableWithoutFeedback>
      <Text style={style.texto}>{cont}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 20,
    margin: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 30,
  },
});
