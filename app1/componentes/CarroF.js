import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function (props) {
  const [ligado, setLigado] = useState(true);
  return (
    <View>
      <Text>
        Carro: {props.nome} - Ligado: {ligado ? 'Sim' : 'Não'}
      </Text>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setLigado(!ligado)}
      />
    </View>
  );
}
