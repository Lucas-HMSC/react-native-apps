import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Tela de Detalhes</Text>
        </View>
        <View style={{margin: 20}}>
          <Button
            title="Ir para Tela Inicial"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={{margin: 20}}>
          <Button
            title="Voltar"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{margin: 20}}>
          <Button
            title="Topo"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>
      </View>
    );
  }
}
