import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card({ style, children, ...props }) {
    return (
        <View style={[styles.Card, style]} {...props} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 2.62,

        elevation: 4,
        flex: 1,
        borderRadius: 4,
        backgroundColor: "white"
    }
});