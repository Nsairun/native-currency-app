import { View } from "react-native";
import React from "react";

const Loading = ({ navigation }: { navigation: any }) => {
  setTimeout(() => {
    navigation.navigate("LogoPage");
  }, 1500);
  return <View style={{ backgroundColor: "#fff", flex: 1 }} />;
};

export default Loading;
