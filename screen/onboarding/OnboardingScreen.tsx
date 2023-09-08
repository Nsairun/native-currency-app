import React from "react";
import { StatusBar, ImageStyle } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import OnboardingElement from "./OnboardingElement";

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#fff", white: "#000" };

type Slide = {
  id: any;
  title: string;
  SubTitle: string;
  image: string;
};

type Props = {};

const slides: Slide[] = [
  {
    id: "1",
    image: require("../../assets/images/board.jpg"),
    title: "Convert to any currency",
    SubTitle: "FLIPA eases conversion of over a thousand currencies",
  },
  {
    id: "2",
    image: require("../../assets/images/Instuct2.jpg"),
    title: "Works in record time",
    SubTitle:
      "You do not have to wait for a long time to get the results of the currency converted",
  },
  {
    id: "3",
    image: require("../../assets/images/Group.jpg"),
    title: "Checks stock market trends",
    SubTitle:
      "When all is set you can also check the current stock exchange market",
  },
];

function OnboardingScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
  const ref = React.useRef(null);

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // marginTop: 10,
          }}
        >
          <Text>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator1,
                  currentSlideIndex == index && {
                    backgroundColor: COLORS.white,
                    width: 32,
                    padding: 2,
                  },
                ]}
              />
            ))}
          </Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("HomePage2")}
              >
                <Text style={{color: "#fff"}}>GET STARTED</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={[styles.transparentBtn]} onPress={skip}>
                <Text style={{color: "##0F5298"}}>Skip</Text>
              </TouchableOpacity>

              <View style={{ width: 15 }} />

              <TouchableOpacity style={[styles.btn]} onPress={goNext}>
                <Text style={{color: "#fff"}}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNext = () => {
    const nextIndex = currentSlideIndex + 1;
    if (nextIndex != slides.length) {
      const offset = nextIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextIndex);
    }
  };

  const skip = () => {
    const lastIndex = slides.length - 1;
    const offset = lastIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastIndex);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        snapToAlignment={"center"}
        data={slides}
        bounces={false}
        pagingEnabled={true}
        contentContainerStyle={{ height: height * 0.65 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingElement item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  title1: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  SubTitle1: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  indicator1: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#0F5298',
    justifyContent: "center",
    alignItems: "center",
  },
  transparentBtn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    color: '#66D3FA',
    borderBlockColor: "#0F5298",
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    resizeMode: "contain",
    height: 400,
    width,
  },
  footerContainer: {
    height: height * 0.25,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  footerSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  btnSubContainer: {
    flexDirection: "row",
  },
});
