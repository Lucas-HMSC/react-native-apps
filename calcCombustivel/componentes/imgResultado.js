import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default (props) => {
  return (
    <View style={styles.bloco}>
      {props.comb === '' ? (
        <Image source={require('../assets/bomba.png')} style={styles.img} />
      ) : props.comb === 'G' ? (
        <Image source={require('../assets/bombaG.png')} style={styles.img} />
      ) : (
        <Image source={require('../assets/bombaE.png')} style={styles.img} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'stretch',
  },
});
