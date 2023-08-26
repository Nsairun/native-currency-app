import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LogoPage = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("LogoPage2");
  }, 2500);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.logoText}>FLIPA</Text>
    </View>
  );
};

export default LogoPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1D2D83",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    height: 89,
    width: 89,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 59.4,
  },
});
