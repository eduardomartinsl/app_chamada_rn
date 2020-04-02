import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function Card({style, children, ...props}){
    return(
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
            height: 1.25,
        },
        shadowOpacity: 0.13,
        shadowRadius: 1,
        elevation: 1,
        flex: 1,
        borderRadius: 4,
        backgroundColor: "white"
    }
});