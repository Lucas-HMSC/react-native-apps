import React from 'react';
import { Text, View } from 'react-native';

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
      {props.exibir ? (
        <View style={{ flex: 1 }}>
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
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexGrow: 1,
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
      )}
    </View>
  );
}
