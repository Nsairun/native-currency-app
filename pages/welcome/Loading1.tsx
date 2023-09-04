import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { BallIndicator } from "react-native-indicators";

const Loading1 = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("HomePage");
  }, 2500);
  return (
    <SafeAreaView style={styles.container}>
      <BallIndicator size={50} color="#1D2D83" />
    </SafeAreaView>
  );
};

export default Loading1;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: "center",
  },
});
