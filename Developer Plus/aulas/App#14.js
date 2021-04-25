import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Tela Inicial</Text>
        </View>
        <View style={{margin: 20}}>
          <Button
            title="Ir para Tela Perfil"
            onPress={() =>
              this.props.navigation.navigate('Profile', {
                name: 'Lucas',
                agr: 22,
              })
            }
          />
        </View>
      </View>
    );
  }
}

class ProfileScreen extends Component {
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

class DetailsScreen extends Component {
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

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({});
