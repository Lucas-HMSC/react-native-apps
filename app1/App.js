import React from 'react';
import { Text, View } from 'react-native';
import C1 from './componentes/comp1';

/* Formato Function */
export default function App1() {
  return (
    <View>
      <C1 />
      <Text>youtube.com/cfbcursos</Text>
    </View>
  );
}

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
