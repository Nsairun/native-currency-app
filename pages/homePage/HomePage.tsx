import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { useFonts } from "expo-font";

const cards = [
  {
    name: "Euro",
    amount: "49,058.16",
    currency: "USD",
    rate: "$53,785.95",
  },
  {
    name: "Japanese Yenn",
    amount: "49,058.16",
    currency: "USD",
    rate: "$53,785.95",
  },
  {
    name: "Swiss France",
    amount: "49,058.16",
    currency: "USD",
    rate: "$53,785.95",
  },
  {
    name: "Canadian Dollar",
    amount: "49,058.16",
    currency: "USD",
    rate: "$53,785.95",
  },
  {
    name: "Dirham",
    amount: "49,058.16",
    currency: "USD",
    rate: "$53,785.95",
  },
];

const HomePage = ({}: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });
  return (
    <View style={styles.HomePage}>
      <View style={styles.navBar}>
        <View style={styles.navContent}>
          <View style={styles.Rightnav}>
            <View>
              <Image source={require("../../assets/images/logo.png")} />
              <View style={styles.balanceField}>
                <Text style={styles.Balance}>Total balance</Text>
                <FaAngleDown style={styles.down} />
              </View>
              <Text style={styles.amount}>$53,785.95</Text>
            </View>
            <Text style={styles.currency}>Your Currencies</Text>
          </View>
          <View style={styles.Leftnav}>
            <FaSearch style={styles.search} />
            <Text style={styles.currency}>Exchange Rates</Text>
          </View>
        </View>
      </View>
      <View style={styles.convertBox}>
        <View style={styles.Content}>
          <View style={styles.content1}>
            <BiSolidDollarCircle style={styles.dollarIcon} />
            <View>
              <Text style={styles.dollar}>USD</Text>
              <Text style={styles.currency1}>$53,785.95</Text>
            </View>
          </View>
          <View style={styles.content2}>
            <Text style={styles.convert}>Convert</Text>
            <FaAngleDown style={styles.down1} />
          </View>
        </View>
      </View>
      <View style={styles.boxContent}>
          <Text style={styles.rate}>Exchange rates</Text>
        {cards.map((card) => (
          <View style={styles.Cards}>
            <View style={styles.cardItems}>
              <View>
                <Text style={styles.Title}>{card.name}</Text>
                <Text style={styles.Value}>{card.amount}</Text>
              </View>
              <View>
                <Text style={styles.Results}>{card.currency}</Text>
                <Text style={[styles.Results, { color: "#00000061" }]}>
                  {card.rate}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: "#E5E5E5",
    fontFamily: "Inter-Regular",
    height: 780,
  },
  navBar: {
    backgroundColor: "#1D2D83",
    height: 154,
  },
  navContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 22,
    width: "88%",
  },
  Rightnav: {
    display: "flex",
    gap: 10,
  },
  balanceField: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  Balance: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24.2,
  },
  down: {
    color: "#F5F5F5",
    fontSize: 15,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
  },
  currency: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
  },
  Leftnav: {
    alignItems: "flex-end",
    display: "flex",
    gap: 30,
    justifyContent: "flex-end",
  },
  search: {
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: 25,
  },
  convertBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    height: 105,
    marginBottom: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    width: "90%",
  },
  Content: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    width: "90%",
  },
  content1: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  dollarIcon: {
    color: "#32cd32",
    fontSize: 50,
  },
  dollar: {
    color: "#1D2D83",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
  },
  currency1: {
    color: "#1D2D83",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
  content2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  convert: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.36,
  },
  down1: {
    color: "#1D2D83",
    fontSize: 25,
  },
  boxContent: {
    gap: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
    width: "90%",
  },
  rate: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.36,
    marginBottom: -10,
    marginLeft: 5,
  },
  Cards: {
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    height: 57,
  },
  cardItems: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8,
    width: "90%",
  },
  Title: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.36,
  },
  Value: {
    color: "#1D2D83",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 17,
  },
  Results: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.36,
  },
});
