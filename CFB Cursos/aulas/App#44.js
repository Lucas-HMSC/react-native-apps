import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rede from './componentes/Fetch';

export default function App1() {
  return (
    <View>
      <Text>CFB Cursos</Text>
      <Rede />
    </View>
  );
}

const styles = StyleSheet.create({});
