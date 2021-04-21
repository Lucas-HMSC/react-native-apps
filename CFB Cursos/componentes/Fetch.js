import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function () {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://cfbcursos.com.br/filmes.json')
      .then((res) => res.json())
      .then((json) => setDados(json.filmes))
      .catch(() => alert('Erro ao carregar lista de filmes'))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <View>
      {carregando ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dados}
          keyExtractor={({ id }, index) => id}
          renderIte={({ item }) => (
            <Text>
              {item.titulo}, {item.AnoLancamento}
            </Text>
          )}
        />
      )}
    </View>
  );
}
