import React, { useState } from 'react';
import { FlatList } from 'react-native';

import CardAluno from '../components/CardAluno';
import { Container } from '../components/Layout'

export default function MainScreen() {

let [alunos] = useState(LISTA_ALUNOS)

  return (
    <Container >
      <FlatList
        data={alunos}
        keyExtractor={item => item.id}
        // renderSectionHeader = { }
        renderItem={({ item }) =>
          <CardAluno nome={item.nome} rga={item.rga} presente={item.presente} />
        }>
      </FlatList>
    </Container>
  );
}

const LISTA_ALUNOS = [
  {
    nome: "Adalberto Jaguaribe",
    rga: "201211310025"
  },
  {
    nome: "Vanda Núñez",
    rga: "201211310025"
  },
  {
    nome: "Adelino Ulhoa",
    rga: "201211310025"
  },
  {
    nome: "Almor Filgueiras",
    rga: "201211310025"
  },
  {
    nome: "Anita Batista",
    rga: "201211310025"
  },
  {
    nome: "Antônio Prado",
    rga: "201211310025"
  },
  {
    nome: "Caím Lima",
    rga: "201211310025"
  },
  {
    nome: "Comecus Mortágua",
    rga: "201211310025"
  },
  {
    nome: "Célia Vasconcelos",
    rga: "201211310025"
  },
  {
    nome: "Elia Baptista",
    rga: "201211310025"
  },
  {
    nome: "Estefânia Collaço",
    rga: "201211310025"
  },
  {
    nome: "Glória Velasco",
    rga: "201211310025"
  },
  {
    nome: "Gomes Guedelha",
    rga: "201211310025"
  },
  {
    nome: "Hermano Maciel",
    rga: "201211310025"
  },
  {
    nome: "Liedson Viegas",
    rga: "201211310025"
  },
  {
    nome: "Martinho Cipriano",
    rga: "201211310025"
  },
  {
    nome: "Salvina Chousa",
    rga: "201211310025"
  },
  {
    nome: "Simone Girão",
    rga: "201211310025"
  },
  {
    nome: "Siquenique Baranda",
    rga: "201211310025"
  },
  {
    nome: "Solano Freitas",
    rga: "201211310025"
  }

]