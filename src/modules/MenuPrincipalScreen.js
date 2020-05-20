import React from 'react'
import { Text, View } from 'react-native'
import { Container, Row, Col } from "../components/Layout";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MenuPrincipalScreen() {
    return (
        <Container style={{ backgroundColor: "white" }}>

            <Text style={{ alignSelf: 'center', margin: 16 }} >
                Olá, usuário. O que deseja fazer?
            </Text>
            <BotaoMenuPrincipal title={'Realizar chamada'} />
            <BotaoMenuPrincipal title={'Adicionar turma'} />
            <BotaoMenuPrincipal title={'Editar turma'} />
            <BotaoMenuPrincipal title={'Configurações'} />
            <BotaoMenuPrincipal title={'Realizar chamada'} />
        </Container>
    )
}

function BotaoMenuPrincipal({ title, onPress }) {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={{ alignSelf: 'center', margin: 16 }}>
            <Text >
                {title}
            </Text>
        </TouchableOpacity>
    )
}