import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class StylesApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>
          Olá, <Text style={styles.txtgreen}>Lucas</Text>!
        </Text>
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
  txtgreen: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});
