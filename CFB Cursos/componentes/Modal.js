import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export default function () {
  const [visivel, setVisivel] = useState(false);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <View style={style.modal}>
          <Text style={style.txtModal}>Modal Component</Text>
          <Text style={style.txtModal}>Curso de React Native</Text>
          <Button
            title="Fechar Modal"
            onPress={() => {
              setVisivel(false);
            }}
          />
        </View>
      </Modal>
      <Button
        title="Abrir Modal"
        onPress={() => {
          setVisivel(true);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  modal: {
    backgroundColor: '#222',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
  },
  txtModal: {
    color: '#ccc',
    textAlign: 'center',
    margin: 10,
  },
});
