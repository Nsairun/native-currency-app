import { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Instruction1 = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        style={styles.image}
        source={require("../../assets/images/img.jpg")}
      />
      <View style={styles.subContainers}>
        <Text style={styles.header}>Convert to any currency</Text>
        <View style={{ width: "70%" }}>
          <Text style={styles.paragraph}>
            FLIPA eases conversion of over a thousand currencies
          </Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Instruction2")}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Instruction1;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    fontFamily: "Inter-Regular",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 40,
  },
  subContainers: {
    alignItems: "center",
    display: "flex",
    gap: 8,
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
  buttonArea: {
    position: "relative",
    left: "25%",
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
    height: 267,
    width: 276,
  },
});
