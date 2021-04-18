import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      <Text>Melhor combustível:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 10,
  },
});
