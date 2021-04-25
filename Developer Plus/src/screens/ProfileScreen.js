import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'PERFIL',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const name = this.props.navigation.getParam('name', 'Anônimo');
    const age = this.props.navigation.getParam('age', 'Não determinado');

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Tela de Perfil</Text>
          <Text style={{fontSize: 50}}>Nome: {JSON.stringify(name)}</Text>
          <Text style={{fontSize: 50}}>Idade: {JSON.stringify(age)}</Text>
        </View>
        <View style={{margin: 20}}>
          <Button
            title="Ir para Tela Detalhes"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}
