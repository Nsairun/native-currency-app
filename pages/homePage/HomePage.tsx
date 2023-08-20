import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomePage = ({}: { navigation: any }) => {
  return (
    <View style={styles.HomePage}>
      <View style={styles.navBar}>
        <Image source={require("../../assets/images/logo.png")} />
        <View>
          <Text style={styles.Balance}>Total balance</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    display: "flex",
  },
  navBar: {
    backgroundColor: "#1D2D83",
    height: 154,
    width: "100%",
  },
  Balance: {
    color: "#FFFFFF",
    fontFamily: "Inter Regular Regular",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24.2,
    textAlign: "center",
  },
});
