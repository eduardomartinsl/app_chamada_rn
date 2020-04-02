import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, Col, Row } from '../components/Layout'
import Card from './Card'
import colors from "../resources/colors"

export default function CardAluno({ nome, rga}) {

    const [presente, setPresente] = useState(false)

    return (
        <Card style={{ minHeight: 80, margin: 8 }}>
            <TouchableOpacity activeOpacity={.6} style={{flex: 1}} onPress={() => { setPresente(!presente) }}>
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

                        {presente ? "Presente" : "Faltoso"}
                    </Text>
                </Row>
            </TouchableOpacity>
        </Card>
    )
}