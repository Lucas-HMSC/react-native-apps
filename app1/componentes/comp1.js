import React from 'react';
import { Text } from 'react-native';
import style from '../estilos/Estilos';

let nt;

export default function (props) {
  nt = props.nota;
  return (
    <Text style={style.textoCursos}>
      CFB Cursos - Curso de {props.curso}: Nota = {nt}
    </Text>
  );
}
