import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TransType, useCurrContext } from "../../context/currContext";
import { DeleteOutlined } from "@ant-design/icons";

const Transactions = () => {
  const { transactions } = useCurrContext();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <>
      {transactions?.map(({ from, to }: TransType) => (
        <View style={styles.mainContainer} >
          <View style={styles.container}>
            <View>
              <Text style={styles.mainHeader}>Departure</Text>
              <View>
                <Text style={styles.headerText}>{from.sign}</Text>
                <Text style={styles.pText}>{from.amount}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.mainHeader}>Arrival</Text>
              <View>
                <Text style={styles.headerText}>{to.sign}</Text>
                <Text style={styles.pText}>{to.amount}</Text>
              </View>
            </View>

            <View>
              <DeleteOutlined style={styles.headerText} />
            </View>

          </View>
          <Text style={styles.date}>{currentDate}</Text>
        </View>
      ))}
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0400ff31",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 'auto',
  }
});
