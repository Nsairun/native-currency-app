import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const HomePage = ({}: { navigation: any }) => {
  return (
    <View style={styles.HomePage}>
      <View style={styles.navBar}>
        <View style={styles.navContent}>
          <View style={styles.Rightnav}>
            <Image source={require("../../assets/images/logo.png")} />
            <View>
              <View style={styles.balanceField}>
                <Text style={styles.Balance}>Total balance</Text>
                <FaAngleDown style={styles.down} />
              </View>
              <View>
                <Text style={styles.amount}>$53,785.95</Text>
              </View>
              <Text style={styles.currency}>Your Currencies</Text>
            </View>
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
            <Image source={require("../../assets/images/dollar.png")} />
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
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: "#E5E5E5",
    fontFamily: "inter",
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
    marginTop: 20,
    width: "88%",
  },
  Rightnav: {
    display: "flex",
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
});
