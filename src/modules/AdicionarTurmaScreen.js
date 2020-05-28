import React from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import { Container, Col, Row } from '../components/Layout'
import InputText from '../components/InputText'

state = {
  language: 'java',
};

export default function AdicionarTurmaScreen() {
  return (
    <Container style={{ margin: 8 }}>
      <Col>
        <InputText placeholder="Nome da turma" title="Adicionar turma" />
          <Text style={{ marginVertical: 8 }}>Período</Text>
          <Row>
            <BotaoPeriodo periodo={'matutino'} />
            <BotaoPeriodo periodo={'vespertino'} />
            <BotaoPeriodo periodo={'noturno'} />
          </Row>
        <View style={{height: 2, backgroundColor: '#DDD', marginVertical: 16}} />
        <Text style={{ marginVertical: 8 }}>Adicionar alunos</Text>
        <Row>
          <TextInput style={{borderWidth: 1, flex: 1, padding: 8}}/>
          <TouchableOpacity style={{backgroundColor: 'green', minWidth: 32}}/>
        </Row>
      </Col>

    </Container>
  )
}

function BotaoPeriodo({periodo}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
        alignItems: 'center'
      }}>
      <Text> {periodo}</Text>
    </TouchableOpacity>
  )
}