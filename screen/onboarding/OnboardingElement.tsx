import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import React from 'react'
import { SubTitle } from 'chart.js';

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#fff", white: "#000" };

type Slide = {
  id: any;
  title: string;
  SubTitle: string;
  image: string;
};

type Props = {};

const slides: Slide[] = [
  {
    id: "1",
    image: require("../../assets/images/board.jpg"),
    title: "Convert to any currency",
    SubTitle: "FLIPA eases conversion of over a thousand currencies",
  },
  {
    id: "2",
    image: require("../../assets/images/Instuct2.jpg"),
    title: "Works in record time",
    SubTitle:
      "You do not have to wait for a long time to get the results of the currency converted",
  },
  {
    id: "3",
    image: require("../../assets/images/board.jpg"),
    title: "Checks stock market trends",
    SubTitle:
      "When all is set you can also check the current stock exchange market",
  },
];

const OnboardingElement = ({item}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={item.image} style={styles.image} />
      <View style={[styles.container1]}>
        <Text style={styles.title1}>{item.title}</Text>
        <Text style={styles.SubTitle1}>{item.SubTitle}</Text>
      </View>
    </View>
  )
}

export default OnboardingElement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: height * 0.6,
        width: width,
    },
    container1: {
      justifyContent: 'center',
      alignItems: 'center',
  },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        height: height * 0.6,
        width:width * 0.9,
        resizeMode: 'contain',
    },
    title1: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'center',
    },
    SubTitle1: {
        color: '#000',
        fontSize: 18,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
})