import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Instruction2 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/Group.svg")}
        />
      </View>
      <View style={styles.subContainers}>
        <Text style={styles.header}>Works in record time</Text>
        <Text style={styles.paragraph}>
        You do not have to wait for a long time to get the results of the currency converted
        </Text>
      </View>
      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.Button1}>
          <Text
            style={styles.text1}
            onPress={() => navigation.navigate("Instruction1")}
          >
            Prev
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button2}>
        <Text
            style={styles.text2}
            onPress={() => navigation.navigate("Instruction3")}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Instruction2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 1,
    justifyContent: "space-evenly",
    backgroundColor: '#fff',
  },
  subContainers: {
    alignItems: "center",
    paddingVertical: 18,
    marginHorizontal: 18,
    justifyContent: "space-evenly",
    height: 200,
  },
  subContainer2: {
    alignItems: "center",
    paddingVertical: 18,
    marginHorizontal: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    width: 350,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: 400,
    lineHeight: 25,
  },
  paragraph: {
    textAlign: "center",
    fontSize: 20,
    width: 300,
    marginBottom: 30
  },
  Button1: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 40,
    borderRadius: 50,
    elevation: 1,
    borderWidth: 2,
    borderColor: '#1D2D83',
    backgroundColor: 'transparent',
    marginTop: 50,
  },

  Button2: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: "#1D2D83",
    marginTop: 50,
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#1D2D83",
  },

  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  image: {
    height: 180,
    width: 180,
    marginTop: 50
  },
});
