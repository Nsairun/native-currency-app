import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Instruction3 = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/Group.jpg")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.header}>Checks stock market trends</Text>
        <Text style={styles.paragraph}>
          When all is set you can also check the current stock exchange market
        </Text>
      </View>
      <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Instruction2")}
          >
            Prev
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("HomePage")}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Instruction3;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    fontFamily: "Inter-Regular",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 30,
  },
  subContainer: {
    alignItems: "center",
    display: "flex",
    gap: 2,
    width: "80%",
  },
  subContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  header: {
    fontSize: 25,
    fontWeight: "900",
    lineHeight: 30,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24.2,
    textAlign: "center",
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
    height: 275,
    width: 241,
  },
});
