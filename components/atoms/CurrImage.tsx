import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const arrImage = [{image: require('../../assets/images/')}]

const CurrImage = ({item}:{item: any}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={item.image} />
    </View>
  )
}

export default CurrImage

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },

    Image: {
        height: 400,
        width: 150,
        backgroundColor: "#fff",
    }
})