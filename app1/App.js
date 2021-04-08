import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import C1 from './componentes/comp1';

/* Formato Function */
export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 />
      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
      <Text style={{ color: '#f50', fontSize: 30 }}>cfbcursos.com.br</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt0: {
    color: '#080',
    fontSize: 10,
  },
});

/* Formato Class
export default class App1 extends Component {
  render(){
    return (
      <View>
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React-Native</Text>
        </View>
        <View>
          <Text>Aula 3</Text>
          <Text>www.cfbcursos.com.br</Text>
        </View>
      </View>
    )
  }
}
*/
