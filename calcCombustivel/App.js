import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Gasolina from './componentes/Gasolina';
import Etanol from './componentes/Etanol';
import BtnCalcular from './componentes/btnCalcular';
import Resultado from './componentes/Resultado';
import ImgResultado from './componentes/imgResultado';

export default function App() {
  const [gasolina, setGasolina] = useState(0);
  const [etanol, setEtanol] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (!gasolina) {
      alert('Informe o preço da Gasolina');
      return;
    }
    if (!etanol) {
      alert('Informe o preço do Etanol');
      return;
    }
    let res;
    let calc = ((etanol / gasolina) * 100).toFixed(1);
    if (calc > 70) {
      res = 'Gasolina';
    } else {
      res = 'Etanol';
    }
    alert(
      `O Etanol está custando ${calc}% da Gasolina. Portanto, é melhor abastecer com ${res}.`,
    );
    setResultado(res);
  };

  const limpar = () => {
    setResultado('');
  };

  const setarGasolina = (v) => {
    limpar();
    setGasolina(v);
  };

  const setarEtanol = (v) => {
    limpar();
    setEtanol(v);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gasolina aoModificar={setarGasolina} />
      <Etanol aoModificar={setarEtanol} />
      <BtnCalcular aoPressionar={calcular} />
      <Resultado resultado={resultado} />
      <ImgResultado comb={resultado.charAt(0)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});
