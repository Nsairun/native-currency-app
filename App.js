import * as React from "react";
import OnboardingScreen from "./screen/onboarding/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoPage from "./screen/LogoPage/LogoPage";
import LogoPage2 from "./screen/LogoPage/LogoPage2";
import LandingPage from "./screen/LogoPage/LandingPage";
import HomePage from "./screen/homePage/HomePage";
import HomePage2 from "./screen/homePage/HomePage2";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { CurrContextProvider } from "./context/currContext";

const Stack = createNativeStackNavigator();

function App() {
  const [isAppLaunched, setIsAppLaunched] = React.useState(null);
  React.useEffect(() => {
    // const handleAsyncStorage = async () => {
    //   const appData = await AsyncStorage.getItem("isAppLaunched") ?? false;
    //   setIsAppLaunched(appData);
    // };

    // handleAsyncStorage();
  }, []);

  return (
    // isAppLaunched != null && (
      <CurrContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="LogoPage" component={LogoPage} />
            <Stack.Screen name="LogoPage2" component={LogoPage2} />
            {/* {isAppLaunched && ( */}
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            {/* )} */}
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="HomePage2" component={HomePage2} />
          </Stack.Navigator>
        </NavigationContainer>
      </CurrContextProvider>
    )
  // );
}

export default App;
