import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CurrText = ({text}:{text:string}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default CurrText

const styles = StyleSheet.create({})