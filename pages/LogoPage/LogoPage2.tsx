import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const LogoPage2 = ({navigation}:{ navigation: any }) => {

        setTimeout(() => {
         navigation.navigate("Instruction1");
       }, 2000);
  return (
    <View style={styles.container}>
        <Image style={styles.image} source = {require('../../assets/images/realoader.png')} />
    </View>
  )
}

export default LogoPage2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        marginHorizontal: 16,
    },
    image: {
        flex: 0.2,
        alignItems: 'center',
        height: 100,
        width: 350,
        backgroundColor: "#1D2D83",
    },
})