import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Local from '@react-native-community/geolocation';

export default function () {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const obterLocal = () => {
    Local.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      },
      (error) => {
        alert('Erro: ' + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 120000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View>
      <Text style={styles.txt}>CFB Cursos - Geolocalização</Text>
      <TouchableHighlight style={styles.btn} onPress={obterLocal}>
        <Text style={styles.txtBtn}>Clique aqui para pegar a localização</Text>
      </TouchableHighlight>
      <Text style={styles.txt}>Latitude: {latitude}</Text>
      <Text style={styles.txt}>Longitude: {longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: '#eee',
  },
  btn: {
    backgroundColor: '#eee',
    borderRadius: 50,
    margin: 10,
  },
  txtBtn: {
    fontSize: 20,
    padding: 20,
    color: '#333',
  },
});
