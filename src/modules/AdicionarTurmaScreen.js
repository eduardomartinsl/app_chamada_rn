import React from 'react'
import { TextInput, Text, Picker, View } from 'react-native'
import { Container, Col } from '../components/Layout'
import InputText from '../components/InputText'

let periodos = [{
  value: 'Matutino',
}, {
  value: 'Vespertino',
}, {
  value: 'Noturno',
}];

export default function AdicionarTurmaScreen() {
  return (
    <Container style={{ margin: 8 }}>
      <Col>
        <InputText placeholder="Nome da turma" title="Adicionar turma" />
        <View>
        </View>
      </Col>
    </Container>
  )
}