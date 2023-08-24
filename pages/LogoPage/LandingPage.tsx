import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LandingPage = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("LogoPage");
  }, 1500);

  return (
    <View style={styles.container}>
      <Text>...</Text>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 16,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
});
