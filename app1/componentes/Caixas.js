import React from 'react';
import { View } from 'react-native';

export default function (props) {
  return (
    <View
      style={{
        width: '100%',
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#2196F3',
        }}
      ></View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#3F51B5',
        }}
      ></View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#005',
        }}
      ></View>
      <View
        style={{
          flexGrow: 3,
          backgroundColor: '#f00',
        }}
      ></View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#a00',
        }}
      ></View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#500',
        }}
      ></View>
    </View>
  );
}
