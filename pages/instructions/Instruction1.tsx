import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import CurrImage from "../../components/atoms/CurrImage";
import CurrText from "../../components/atoms/CurrText";
import CurrButton from "../../components/atoms/CurrButton";

const Instruction1 = ({ item, navigation }: { item: any, navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Instruction1</Text>
      <CurrImage item={item} />
      <View>
        <CurrText text="Convert to ant currency" />
      </View>
      <View>
        <CurrText text="FLIPA eases conversion of over a thousand currencies" />
      </View>
      <View>
        <CurrButton
          text="Next"
          handlePress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
          }
        />
      </View>
    </View>
  );
};

export default Instruction1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    fontFamily: "cursive",
    textAlign: "center",
  },
});
