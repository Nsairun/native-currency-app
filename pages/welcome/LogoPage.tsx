import { StyleSheet, Text, View, Image } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync;

const LogoPage = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "MPLUSRounded1c-Regular": require("../../assets/fonts/MPLUSRounded1c-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => {
    navigation.navigate("Loading1");
  }, 2000);
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
    fontFamily: "MPLUSRounded1c-Regular",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 59.4,
  },
});
