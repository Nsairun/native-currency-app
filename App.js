import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "./pages/welcome/Loading";
import LogoPage from "./pages/welcome/LogoPage";
import Loading1 from "./pages/welcome/Loading1";
// import OnboardingScreen from "./screens/OnboardingScreen";
// import HomeScreen from "./screens/HomeScreen";
// import { TailwindProvider } from "tailwindcss-react-native";
// import Instruction1 from "./pages/instructions/Instruction1";
// import Instruction2 from "./pages/instructions/Instruction2";
// import Instruction3 from "./pages/instructions/instruction3";
import HomePage from "./pages/home/HomePage";
import HomePage1 from "./pages/home/HomePage1";
import { CurrContextProvider } from "./context/currContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CurrContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="LogoPage" component={LogoPage} />
          <Stack.Screen name="Loading1" component={Loading1} />
          {/* <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          {/* <Stack.Screen name="Instruction1" component={Instruction1} />
          <Stack.Screen name="Instruction2" component={Instruction2} />
          <Stack.Screen name="Instruction3" component={Instruction3} /> */}
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="HomePage1" component={HomePage1} />
        </Stack.Navigator>
      </NavigationContainer>
    </CurrContextProvider>
  );
}

export default App;
