import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <Text style={styles.txt}>
        Hora: {this.state.date.toLocaleTimeString()}
      </Text>
    );
  }
}

export default class ClockApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Clock />
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
