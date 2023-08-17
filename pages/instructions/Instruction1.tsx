import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Instruction1 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source = {require('../../assets/images/img.jpg')} />
      </View>
      <View style={styles.subContainers}>
        <Text style={styles.header}>Convert to any currency</Text>
        <Text style={styles.paragraph}>FLIPA eases conversion of over a thousand currencies</Text>
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.text} onPress={() => navigation.navigate("Instruction3")}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Instruction1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 16,
    justifyContent: "space-evenly",
    backgroundColor: '#fff'
  },
  subContainers: {
    alignItems: 'center',
    paddingVertical: 18,
    marginHorizontal: 18,
    justifyContent: "space-evenly",
    height: 200,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1111110a",
    width: 400,
  },
  paragraph: {
    fontFamily: "cursive",
    textAlign: "center",
    fontSize: 20,
    width: 300,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 86,
    width: 150,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: '#1D2D83',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    height: 350,
    width: 350,
  }
});
