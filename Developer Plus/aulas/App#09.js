import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';

export default class PizzaTranslatorApp extends Component {
  onPressButton() {
    Alert.alert('Você clicou no botão');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.onPressButton();
            }}
            title="clique aqui"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.onPressButton();
            }}
            title="clique aqui"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeButtonContainer}>
          <Button onPress={this.onPressButton} title="Parece OK!" />
          <Button onPress={this.onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
