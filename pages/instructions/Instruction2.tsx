import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Instruction2 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/Instuct2.jpg")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.header}>Works in record time</Text>
        <View style={{ width: "70%" }}>
          <Text style={styles.paragraph}>
            You do not have to wait for a long time to check the results of the
            currency converted
          </Text>
        </View>
      </View>
      <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Instruction1")}
          >
            Prev
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.text}
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
    fontFamily: "Inter-Regular",
    alignItems: "center",
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
  subContainer: {
    alignItems: "center",
    paddingVertical: 50,
    justifyContent: "space-between",
    height: 200,
  },
  subContainer1: {
    alignItems: "center",
    paddingVertical: 18,
    marginHorizontal: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    width: 350,
  },
  header: {
    fontSize: 25,
    fontWeight: "900",
    lineHeight: 30,
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24.2,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#1D2D83",
    borderRadius: 12,
    height: 33,
    justifyContent: "center",
    width: 121,
  },
  text: {
    color: "#F5F5F5",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
    letterSpacing: 0.25,
  },
  image: {
    height: 250,
    width: 288,
  },
});
