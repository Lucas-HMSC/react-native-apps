import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

export default function () {
  const [atualizando, setAtualizando] = useState(false);

  const aoAtualizar = () => {
    setAtualizando(true);
    setTimeout(() => {
      setAtualizando(false);
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: '#333',
          padding: 15,
        }}
        refreshControl={
          <RefreshControl refreshing={atualizando} onRefresh={aoAtualizar} />
        }
      >
        <Text
          style={{
            color: '#eee',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          cumque in ut molestiae consequatur delectus tenetur voluptatibus
          minus, autem laudantium, ducimus, soluta nemo repellendus repudiandae
          sint. Sint eius ipsam itaque!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Veniam cumque in ut molestiae consequatur delectus
          tenetur voluptatibus minus, autem laudantium, ducimus, soluta nemo
          repellendus repudiandae sint. Sint eius ipsam itaque!Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Veniam cumque in ut molestiae
          consequatur delectus tenetur voluptatibus minus, autem laudantium,
          ducimus, soluta nemo repellendus repudiandae sint. Sint eius ipsam
          itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam cumque in ut molestiae consequatur delectus tenetur
          voluptatibus minus, autem laudantium, ducimus, soluta nemo repellendus
          repudiandae sint. Sint eius ipsam itaque!Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Veniam cumque in ut molestiae
          consequatur delectus tenetur voluptatibus minus, autem laudantium,
          ducimus, soluta nemo repellendus repudiandae sint. Sint eius ipsam
          itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam cumque in ut molestiae consequatur delectus tenetur
          voluptatibus minus, autem laudantium, ducimus, soluta nemo repellendus
          repudiandae sint. Sint eius ipsam itaque!Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Veniam cumque in ut molestiae
          consequatur delectus tenetur voluptatibus minus, autem laudantium,
          ducimus, soluta nemo repellendus repudiandae sint. Sint eius ipsam
          itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam cumque in ut molestiae consequatur delectus tenetur
          voluptatibus minus, autem laudantium, ducimus, soluta nemo repellendus
          repudiandae sint. Sint eius ipsam itaque!Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Veniam cumque in ut molestiae
          consequatur delectus tenetur voluptatibus minus, autem laudantium,
          ducimus, soluta nemo repellendus repudiandae sint. Sint eius ipsam
          itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam cumque in ut molestiae consequatur delectus tenetur
          voluptatibus minus, autem laudantium, ducimus, soluta nemo repellendus
          repudiandae sint. Sint eius ipsam itaque!Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Veniam cumque in ut molestiae
          consequatur delectus tenetur voluptatibus minus, autem laudantium,
          ducimus, soluta nemo repellendus repudiandae sint. Sint eius ipsam
          itaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          dignissimos assumenda hic, vitae delectus explicabo quia optio! Error
          dicta, cupiditate natus accusantium quos hic corporis quibusdam,
          consequatur eveniet voluptatem deleniti!
        </Text>
      </ScrollView>
    </View>
  );
}
