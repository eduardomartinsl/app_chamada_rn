import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import firebase from '@react-native-firebase/app';
import { material } from 'react-native-typography';
import CardAluno from '../components/CardAluno';
import Card from '../components/Card';
import {Col, Row, Container} from '../components/Layout'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

export default function MainScreen() {
  return (
    <Container >
      <FlatList
      data={LISTA_ALUNOS}
      keyExtractor={item => item.id}
      renderItem ={ ({item}) => 
        <CardAluno nome={item.nome} rga={item.rga} presente={item.presente}/>
      }>
      </FlatList>
    </Container>
  );
}

const LISTA_ALUNOS = [
  {
    nome: "Eduardo Martins",
    rga: "201211310025",
    presente: true
  },
  {
    nome:"Maeli Romero",
    rga : "201211310025",
    presente: false
  }
]