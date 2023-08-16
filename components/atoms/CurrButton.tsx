import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react'

export default function CurrButton({text, handlePress}:{text:string, handlePress:()=>void}) {
  return (
    <View style={styles.Button}>
      <TouchableOpacity  onPress={() => {handlePress()}}> 
      <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Button: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: 'blue',
        borderEndEndRadius: 10,
        padding: 10,
        color: '#fff'
    }
})