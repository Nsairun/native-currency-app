import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SearchOutlined } from '@ant-design/icons';

const HomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.svg")}
        />
            <SearchOutlined style={styles.icon}/>
      </View>
      <Text style={styles.convertText} onPress={() => navigation.navigate("HomePage2")}>Convert Here</Text>
      <View style={styles.subContainer2}>
        <Text style={styles.singleText}>Currencies</Text>
        <Text style={styles.singleText}>Rates</Text>
      </View>
      <View style={styles.currencyDisplay}>
        <Text style={styles.singleText}>Currencies</Text>
        <Text style={styles.singleText}>Rates</Text>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 1,
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  container: {
    height: 140,
    width: 390,
    backgroundColor: "#1D2D83",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    margin: 20,
    paddingVertical: 15,
    height: 80,
    width: 70,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  convertText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0905f838',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
    borderRadius: 50,
    elevation: 1,
  },
  singleText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subContainer2: {
    alignItems: "center",
    paddingVertical: 18,
    marginHorizontal: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    width: 370,
  },
  currencyDisplay: {
    height: 80,
    width: 370,
    backgroundColor: 'lightBlue',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems: 'center',
  },

});
