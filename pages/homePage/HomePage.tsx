import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import { TransType, useCurrContext } from "../../context/currContext";

const DATA = [
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

const HomePage = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });
  const { transactions } = useCurrContext();

  useEffect(() => {
    console.log({ transactions });
  }, [transactions]);

  return (
    <ScrollView style={styles.HomePage}>
      <View style={styles.navBar}>
        <View style={styles.navContent}>
          <View style={styles.Rightnav}>
            <View>
              <Image source={require("../../assets/images/logo.png")} />
              <View style={styles.balanceField}>
                <Text style={styles.Balance}>Total balance</Text>
                <MaterialIcons name="keyboard-arrow-down" style={styles.down} />
              </View>
              <Text style={styles.amount}>$53,785.95</Text>
            </View>
            <Text style={styles.currency}>Your Currencies</Text>
          </View>
          <View style={styles.Leftnav}>
            <MaterialIcons name="search" style={styles.search} />
            <Text style={styles.currency}>Exchange Rates</Text>
          </View>
        </View>
      </View>
      <View style={styles.Main}>
        <View style={styles.convertBox}>
          <View style={styles.Content}>
            <View style={styles.content1}>
              <MaterialIcons name="monetization-on" style={styles.dollarIcon} />
              <View>
                <Text style={styles.dollar}>USD</Text>
                <Text style={styles.currency1}>$53,785.95</Text>
              </View>
            </View>
            <View style={styles.content2}>
              <Text style={styles.convert}>Convert</Text>
              <MaterialIcons name="keyboard-arrow-down" style={styles.down1} />
            </View>
          </View>
        </View>

        <View style={styles.boxContent}>
          <Text style={styles.rate}>Exchange rates</Text>
          {transactions?.map(({ date, from, to }: TransType) => (
            <View style={styles.Data}>
              <Text style={styles.date}>{date}</Text>
              <View style={styles.dataItems}>
                <View>
                  <Text style={styles.Title}>{from[1]}</Text>
                  <Text style={styles.Value}>{from[0]}</Text>
                </View>
                <View>
                  <Text style={styles.Results}>{to[1]}</Text>
                  <Text style={[styles.Results, { color: "#00000061" }]}>
                    {to[0]}
                  </Text>
                </View>
              </View>
            </View>
          ))}
          {/* {DATA.map((data) => (
            <View style={styles.Data}>
              <View style={styles.dataItems}>
                <View>
                  <Text style={styles.Title}>{data.name}</Text>
                  <Text style={styles.Value}>{data.amount}</Text>
                </View>
                <View>
                  <Text style={styles.Results}>{data.currency}</Text>
                  <Text style={[styles.Results, { color: "#00000061" }]}>
                    {data.rate}
                  </Text>
                </View>
              </View>
            </View>
          ))} */}
        </View>
        <View style={styles.buttonField}>
          <Text style={styles.clear}>Clear All</Text>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={styles.next}
              onPress={() => navigation.navigate("HomePage2")}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 16,
    fontWeight: "900",
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
  Main: {
    marginTop: 30,
    marginBottom: 30,
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
    fontSize: 38,
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
  image: {
    backgroundColor: "#FFFFFF",
    height: 38,
    width: 38,
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
  Data: {
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    height: 60,
  },
  date: {
    fontSize: 10,
    fontWeight: "400",
    margin: "auto",
  },
  dataItems: {
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
  buttonField: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    width: "90%",
  },
  clear: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#1D2D83",
    borderRadius: 12,
    height: 33,
    justifyContent: "center",
    width: 121,
  },
  next: {
    color: "#F5F5F5",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
    letterSpacing: 0.25,
  },
});
