import * as React from "react";
import Instruction1 from "./pages/instructions/Instruction1";
import Instruction2 from "./pages/instructions/Instruction2";
import Instruction3 from "./pages/instructions/Instruction3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoPage from "./pages/LogoPage/LogoPage";
import LogoPage2 from "./pages/LogoPage/LogoPage2";
import LandingPage from "./pages/LogoPage/LandingPage";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LogoPage" component={LogoPage} />
        <Stack.Screen name="LogoPage2" component={LogoPage2} />
        <Stack.Screen name="Instruction1" component={Instruction1} />
        <Stack.Screen name="Instruction2" component={Instruction2} />
        <Stack.Screen name="Instruction3" component={Instruction3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000 ",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
