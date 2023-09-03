import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, Text, View } from "react-native";

const { height, width } = Dimensions.get("window");

const COLORS = { primary: "#fff", blue: "#1D2D83" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/img.jpg"),
    title: "Convert to any currency",
    subtitle: "FLIPA eases conversion of over a thousand currencies",
  },
  {
    id: "2",
    image: require("../assets/images/Instuct2.jpg"),
    title: "Works in record time",
    subtitle:
      "You do not have to wait for a long time to check the results of the currency converted",
  },
  {
    id: "3",
    image: require("../assets/images/Group.jpg"),
    title: "Checks stock market trends",
    subtitle:
      "When all is set you can also check the current stock exchange market",
  },
];

const Slide = ({ item }) => {
  <View style={{ alignItems: "center" }}>
    <Image
      source={item.image}
      style={{ height: "75%", width, resizeMode: "contain" }}
    />
    <Text style={styles.title}>{item.title}</Text>
  </View>;
};

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <FlatList
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   title: {
//     color: COLORS.blue,
//     fontSize: 22,
//     fontWeight: 'bold',
//   }
// });
export default OnboardingScreen;
