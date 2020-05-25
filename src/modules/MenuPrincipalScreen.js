import React from 'react'
import { Text, View } from 'react-native'
import { Container, Row, Col } from "../components/Layout";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MenuPrincipalScreen({ navigation }) {
    return (
        <Container style={{ backgroundColor: "white" }}>

            <Text style={{ alignSelf: 'center', margin: 32 }} >
                Olá, usuário. O que deseja fazer?
            </Text>
            <BotaoMenuPrincipal title={'Realizar chamada'} onPress={() => {navigation.navigate('Chamada')}} />
            <BotaoMenuPrincipal title={'Adicionar turma'} onPress={() => {navigation.navigate('Adicionar Turma')}}  />
            <BotaoMenuPrincipal title={'Editar turma'} />
            <BotaoMenuPrincipal title={'Configurações'} />
        </Container>
    )
}

function BotaoMenuPrincipal({ title, onPress }) {
    return (
        <TouchableOpacity activeOpacity={.6} style={{ alignSelf: 'center', margin: 16 }} onPress={onPress} >
            <Text >
                {title}
            </Text>
        </TouchableOpacity>
    )
}