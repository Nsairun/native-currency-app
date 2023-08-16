import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Instruction1 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Instruction1</Text>
      <View>
        <Image source = {require('../../assets/images/img.jpg')} />
      </View>
      <View>
        <Text style={styles.header}>Convert to any currency</Text>
        <Text style={styles.paragraph}>FLIPA eases conversion of over a thousand currencies</Text>
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.text} onPress={() => navigation.navigate("Instructions2")}>
          {" "}
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
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    fontFamily: "cursive",
    textAlign: "center",
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 86,
    width: 150,
    borderRadius: 4,
    elevation: 1,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
