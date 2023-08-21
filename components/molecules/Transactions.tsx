import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TransType, useCurrContext } from "../../context/currContext";

const Transactions = () => {
  const { transactions } = useCurrContext();

  return (
    <>
      {transactions?.map(({ from, to }: TransType) => (
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
        </View>
      ))}
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#0400ff31',
        borderRadius: 10,
        paddingHorizontal: 1,
        marginTop: 10,
        borderTopColor: '#FF495C',
    },
    headerText: {
        fontSize: 25,
        color: '#000',
        fontWeight:'bold',
    },
    pText: {
        color: 'blue',
        fontSize: 20,
        fontWeight:'bold',
    },
    mainHeader: {
        fontSize: 20,
        color: '#000',
        fontWeight:'bold',
    },
});
