import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Ola extends Component {
  render() {
    return (
      <View>
        <Text style={styles.txt}>Olá, {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ola name={'Lucas'} />
        <Ola name={'Paulo'} />
        <Ola name={'Marco'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    textAlign: 'center',
  },
});
