import React, { useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Row, Col } from "../components/Layout";
import Button from "../components/Button";

import CardAluno from "../components/CardAluno";
import { Container } from "../components/Layout";


export default function MainScreen() {
  let [alunos] = useState(LISTA_ALUNOS);

  return (
    <Container style={{ backgroundColor: "white" }}>

      <Col style={{ padding: 16, backgroundColor: "#eee" }}>
        <Text>Turma</Text>
        <Text style={{ fontWeight: "bold" }}>Psicologia</Text>
        <Text style={{ marginTop: 16 }}>Período</Text>
        <Text style={{ fontWeight: "bold" }}>Vespertino</Text>
      </Col>
      <View style={{ height: 2, backgroundColor: "#ddd" }} />

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() =>(
          <Button text="FINALIZAR CHAMADA" />
        )}
        renderItem={({ item }) => (
          <CardAluno nome={item.nome} rga={item.rga} presente={item.presente} />
        )}
      />
    </Container>
  );
}

const LISTA_ALUNOS = [
  {
    nome: "Adalberto Jaguaribe",
    rga: "201211310025",
  },
  {
    nome: "Vanda Núñez",
    rga: "201211310025",
  },
  {
    nome: "Adelino Ulhoa",
    rga: "201211310025",
  },
  {
    nome: "Almor Filgueiras",
    rga: "201211310025",
  },
  {
    nome: "Anita Batista",
    rga: "201211310025",
  },
  {
    nome: "Antônio Prado",
    rga: "201211310025",
  },
  {
    nome: "Caím Lima",
    rga: "201211310025",
  },
  {
    nome: "Comecus Mortágua",
    rga: "201211310025",
  },
  {
    nome: "Célia Vasconcelos",
    rga: "201211310025",
  },
  {
    nome: "Elia Baptista",
    rga: "201211310025",
  },
  {
    nome: "Estefânia Collaço",
    rga: "201211310025",
  },
  {
    nome: "Glória Velasco",
    rga: "201211310025",
  },
  {
    nome: "Gomes Guedelha",
    rga: "201211310025",
  },
  {
    nome: "Hermano Maciel",
    rga: "201211310025",
  },
  {
    nome: "Liedson Viegas",
    rga: "201211310025",
  },
  {
    nome: "Martinho Cipriano",
    rga: "201211310025",
  },
  {
    nome: "Salvina Chousa",
    rga: "201211310025",
  },
  {
    nome: "Simone Girão",
    rga: "201211310025",
  },
  {
    nome: "Siquenique Baranda",
    rga: "201211310025",
  },
  {
    nome: "Solano Freitas",
    rga: "201211310025",
  },
];
