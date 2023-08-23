import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const LogoPage = ({navigation}:{ navigation: any }) => {

        setTimeout(() => {
         navigation.navigate("LogoPage2");
       }, 2500);
  return (
    <View style={styles.container}>
        <Image style={styles.image} source = {require('../../assets/images/logo.svg')} />
    </View>
  )
}

export default LogoPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginHorizontal: 16,
        backgroundColor: "#1D2D83",
    },
    image: {
        flex: 0.2,
        alignItems: 'center',
        height: 70,
        width: 160,
        backgroundColor: "#1D2D83",
    },
})