import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useCurrContext } from "../../context/currContext";
import Transactions from "../../components/molecules/Transactions";

const HomePage1 = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const { convertCurrency, currencies, loading } = useCurrContext();

  const Currencies = [
    {
      name: "USD",
      image: require("../../assets/images/usd-flag.png"),
    },
    {
      name: "EUR",
      image: require("../../assets/images/Union-Flag.png"),
    },
    {
      name: "XAF",
      image: require("../../assets/images/cameroun-franccfa.jpeg"),
    },
  ];

  return (
    <View style={styles.Main}>
      <View style={styles.navBar}>
        <View style={styles.navContent}>
          <View>
            <Image source={require("../../assets/images/logo.png")} />
          </View>
          <View>
            <MaterialIcons name="format-list-bulleted" style={styles.list} />
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.spacing}>
          <Text style={styles.exchange}>Exchange</Text>
          <View style={styles.dropContainer}>
            {loading && <Text>Loading...</Text>}
            <View style={styles.currContainer}>
              <View style={styles.bigView}>
                <View style={styles.line}>
                  <Text style={styles.text}>From</Text>
                </View>
              </View>
              <SelectDropdown
                data={
                  currencies
                    ? [...Object.keys(currencies)]
                    : ["XAF", "USD", "EUR"]
                }
                onSelect={(selectedItem, index) => {
                  setToCurrency(selectedItem);
                  console.log(selectedItem, index);
                }}
                buttonStyle={styles.dropDown}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View style={styles.dropdownChild}>
                      <View style={styles.dropdownStyle}>
                        {selectedItem ? (
                          <Image
                            source={selectedItem.image}
                            style={{ height: 15, width: 17 }}
                          />
                        ) : (
                          <Ionicons name="earth" color="#1D2D83" size={20} />
                        )}
                        <Text style={styles.dropdownTxt}>
                          {selectedItem ? selectedItem.name : "curr"}
                        </Text>
                      </View>
                      <AntDesign name={"caretdown"} size={17} color="#000" />
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.currContainer}>
              <View style={styles.bigView}>
                <View style={styles.line}>
                  <Text style={styles.text}>To</Text>
                </View>
              </View>
              <SelectDropdown
                data={
                  currencies
                    ? [...Object.keys(currencies)]
                    : ["XAF", "USD", "EUR"]
                }
                onSelect={(selectedItem, index) => {
                  setToCurrency(selectedItem);
                  console.log(selectedItem, index);
                }}
                buttonStyle={styles.dropDown}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View style={styles.dropdownChild}>
                      <View style={styles.dropdownStyle}>
                        {selectedItem ? (
                          <Image
                            source={selectedItem.image}
                            style={{ height: 15, width: 17 }}
                          />
                        ) : (
                          <Ionicons name="earth" color="#1D2D83" size={20} />
                        )}
                        <Text style={styles.dropdownTxt}>
                          {selectedItem ? selectedItem.name : "curr"}
                        </Text>
                      </View>
                      <AntDesign name={"caretdown"} size={17} color="#000" />
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.smallView}>
            <View style={styles.line1}>
              <Text style={styles.amount}>Amount</Text>
            </View>
          </View>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              onChange={(e: any) => setAmount(+e.target.value)}
              value={amount}
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                convertCurrency({ amount, fromCurrency, toCurrency })
              }
            >
              Submit
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Transactions />
        </View>
      </View>
    </View>
  );
};

export default HomePage1;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "#E5E5E5",
    height: 800,
  },
  navBar: {
    alignItems: "center",
    backgroundColor: "#1D2D83",
    display: "flex",
    justifyContent: "center",
    height: 154,
  },
  navContent: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    width: "80%",
  },
  list: {
    color: "#FFFFFF",
    fontSize: 38,
  },
  mainContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
  },
  spacing: {
    alignContent: "center",
    display: "flex",
    gap: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    width: "85%",
  },
  dropContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currContainer: {
    display: "flex",
  },
  bigView: {
    display: "flex",
    flexDirection: "row",
    left: "10%",
    position: "relative",
    right: 0,
  },
  line: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: 13,
    width: 54,
  },
  text: {
    bottom: "10%",
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    paddingVertical: 3,
    position: "absolute",
  },
  dropDown: {
    backgroundColor: "#fff",
    border: "1px solid #1D2D83",
    borderRadius: 10,
    height: 48,
    width: 137,
  },
  dropdownChild: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  dropdownStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  dropdownTxt: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
  },
  inputField: {
    alignItems: "center",
    display: "flex",
    gap: 20,
    justifyContent: "center",
  },
  exchange: {
    fontSize: 24,
    fontWeight: "700",
  },
  smallView: {
    display: "flex",
    justifyContent: "center",
  },
  line1: {
    backgroundColor: "#fff",
    height: 13,
    width: 93,
  },
  amount: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
  },
  input: {
    backgroundColor: "#ffffff",
    border: "2px solid #1D2D83",
    borderRadius: 5,
    height: 54,
    padding: 10,
    width: 340,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#1D2D83",
    borderRadius: 5,
    color: "#fff",
    fontFamily: "MPLUSRounded1c-Regular",
    fontWeight: "900",
    height: 48,
    justifyContent: "center",
    position: "relative",
    width: 130,
  },
});
