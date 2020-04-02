import React from 'react'
import { View, Text } from 'react-native'
import { Container, Col, Row } from '../components/Layout'
import Card from './Card'
import colors from "../resources/colors"

export default function CardAluno({ nome, rga, presente }) {
    return (
        <Card style={{ minHeight: 80, margin: 8 }}>
            <Row style={{ flex: 1 }}>
                <View style={{ backgroundColor: presente ? colors.verde : colors.vermelho, width: 16 }} />
                <Col style={{ padding: 8, alignSelf: "flex-start", flex: 1 }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
                        {nome}
                    </Text>
                    <Text>
                        {rga}
                    </Text>
                </Col>
                <Text
                    style={{
                        alignSelf: "flex-end",
                        fontWeight: "bold",
                        padding: 8,
                        color: presente ? colors.verde : colors.vermelho
                    }}>

                    {presente ? "Presente" :"Faltoso"}
                </Text>
            </Row>
        </Card>
    )
}