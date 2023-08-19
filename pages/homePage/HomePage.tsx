import React from "react";
import { Image, StyleSheet, View } from "react-native";

const HomePage = ({}: { navigation: any }) => {
  return (
    <View style={styles.HomePage}>
      <View style={styles.navBar}>
        <Image source={require("../../assets/images/logo.png")} />
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
});
