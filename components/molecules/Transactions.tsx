import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { TransType, useCurrContext } from "../../context/currContext";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Transactions = () => {
  const { transactions, deleteData } = useCurrContext();

  useEffect(() => {
    console.log({ transactions });
  }, [transactions]);

  return (
    <>
      {transactions?.map(({ from, to, date, id }: TransType) => (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View>
              <Text style={styles.mainHeader}>Departure</Text>
              <View>
                <Text style={styles.headerText}>{from[1]}</Text>
                <Text style={styles.pText}>{from[0]}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.mainHeader}>Arrival</Text>
              <View>
                <Text style={styles.headerText}>{to[1]}</Text>
                <Text style={styles.pText}>{to[0]}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => deleteData(id)}>
              <Text>
                <AntDesign name="delete" size={24} color="red" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
      ))}
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0400ff31",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  container: {
    flexDirection: "row",
    padding: 5,
    height: 150,
    width: 350,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0400ff31",
    borderRadius: 10,
    paddingHorizontal: 1,
    marginTop: 15,
    borderTopColor: "#FF495C",
    margin: "auto",
  },
  headerText: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  pText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  mainHeader: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
  },
  delete: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});
