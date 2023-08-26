import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { BallIndicator } from "react-native-indicators";

const LogoPage2 = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("Instruction1");
  }, 2000);
  return (
    <SafeAreaView style={styles.container}>
      <BallIndicator size={50} color="#1D2D83" />
    </SafeAreaView>
  );
};

export default LogoPage2;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
