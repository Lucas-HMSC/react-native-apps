import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class FlexboxApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewSm} />
        <View style={styles.viewMd} />
        <View style={styles.viewLg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewSm: {
    width: 80,
    height: 80,
    backgroundColor: 'powderblue',
  },
  viewMd: {
    height: 80,
    backgroundColor: 'skyblue',
  },
  viewLg: {
    height: 180,
    backgroundColor: 'steelblue',
  },
});
