import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { TransType, useCurrContext } from "../../context/currContext";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Transactions = () => {
  const { transactions, deleteData } = useCurrContext();

  useEffect(() => {
    console.log({ transactions });
  }, [transactions]);

  return (
    <>
      {transactions?.map(({ from, to, date, id }: TransType) => (
        <View style={styles.mainContainer}>
          <View style={styles.Box}>
            <View style={styles.container}>
              <View style={styles.Section}>
                <View>
                  <Text style={styles.headerText}>{from[1]}</Text>
                  <Text style={styles.pText}>{from[0]}</Text>
                </View>
                <View>
                  <Text style={styles.headerText}>{to[1]}</Text>
                  <Text style={styles.pText}>{to[0]}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteData(id)}>
                  <MaterialIcons name="delete-forever" style={styles.bin} />
                </TouchableOpacity>
              </View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    border: "1px solid #1D2D83",
    borderRadius: 5,
    margin: 10,
  },
  Box: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    backgroundColor: "#E7E7EA",
    borderRadius: 10,
    gap: 5,
    height: 75,
    width: 320,
  },
  Section: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: "85%",
  },
  headerText: {
    color: "#000",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17,
  },
  pText: {
    color: "#000",
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  mainHeader: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  date: {
    color: "#00000057",
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 15,
  },
  bin: {
    fontSize: 25,
    color: "#cd5c5c",
  },
});
