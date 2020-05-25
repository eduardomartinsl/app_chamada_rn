import React from 'react'
import { TextInput } from 'react-native'
import { View, Text } from 'native-base'

export default function InputText({title, placeholder}) {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput style={{ borderWidth: 1, borderRadius: 4, padding: 8, marginTop: 4}} placeholder={placeholder} />
    </View>
  )
}