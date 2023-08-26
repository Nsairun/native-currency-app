import { StyleSheet, View } from "react-native";
import React from "react";
import { BarIndicator } from "react-native-indicators";

const LandingPage = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("LogoPage");
  }, 1500);
  return (
    <View style={styles.container}>
      <BarIndicator color="#1D2D83" size={30} count={5} />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
});
