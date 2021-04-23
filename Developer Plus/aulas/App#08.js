import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default class PizzaTranslatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder="Digite aqui para traduzir!"
          onChangeText={text => this.setState({text})}
        />
        <Text style={styles.txt}>
          {this.state.text.split(' ').map(word => (word ? '🍕' : ''))}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  txtInput: {
    height: 50,
    fontSize: 30,
  },
  txt: {
    padding: 10,
    fontSize: 50,
  },
});
