import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SelectDropdown from "react-native-select-dropdown";
import { TouchableOpacity } from "react-native";
import { useCurrContext } from "../../context/currContext";
import Transactions from "../../components/molecules/Transactions";

const HomePage2 = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const { convertCurrency, currencies, loading } = useCurrContext();

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.svg")}
        />
        <SearchOutlined style={styles.icon} />
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          onChange={(e: any) => setAmount(+e.target.value)}
          value={amount}
        />
        {loading && <Text>Loading...</Text>}
        <View style={styles.spacing}>
          <View style={styles.dropContainer}>
            <View style={styles.currContainer}>
              <Text style={styles.text}>From</Text>
              <SelectDropdown
                data={
                  currencies
                    ? [...Object.keys(currencies)]
                    : ["XAF", "USD", "EUR"]
                }
                onSelect={(selectedItem) => {
                  setFromCurrency(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.currContainer}>
              <Text style={styles.text}>To</Text>
              <SelectDropdown
                data={
                  currencies
                    ? [...Object.keys(currencies)]
                    : ["XAF", "USD", "EUR"]
                }
                onSelect={(selectedItem) => {
                  setToCurrency(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => convertCurrency({ amount, fromCurrency, toCurrency })}
        >
          Convert
        </TouchableOpacity>
      </View>

      <View>
        <Transactions />
      </View>
    </View>
  );
};

export default HomePage2;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 1,
    alignItems: "center",
    marginHorizontal: 1,
    justifyContent: "space-evenly",
    // backgroundColor: "#fff",
  },
  icon: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 15,
  },
  container: {
    height: 120,
    width: 390,
    backgroundColor: "#1D2D83",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    rowGap: 1,
    padding: 2,
  },
  image: {
    margin: 20,
    paddingVertical: 15,
    height: 80,
    width: 70,
  },
  text: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
  },
  dropContainer: {
    flexDirection: "row",
    padding: 15,
    width: 355,
    height: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0400ff31",
    borderRadius: 10,
    paddingHorizontal: 1,
    borderTopColor: "red",
    margin: "auto",
  },
  currContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2,
    backgroundColor: "#4a4a8a46",
    borderRadius: 10,
    width: 150,
    marginTop: 50,
  },
  spacing: {
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 25,
    justifyContent: "space-evenly",
    rowGap: 3,
  },

  subContainer2: {
    alignItems: "center",
    paddingVertical: 18,
    marginHorizontal: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 2,
    height: 70,
    width: 370,
  },
  input: {
    height: 70,
    width: 350,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    width: 210,
    height: 60,
    borderRadius: 20,
    elevation: 1,
    backgroundColor: "#1D2D83",
    margin: "auto",
    color: "#fff",
  },
});
