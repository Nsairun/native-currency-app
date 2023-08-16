import react from 'react';
import NavigationContainer from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Instructions1 from './pages/instructions/Instruction1' ;

const  Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen  
                name="Welcome"
                component={Instructions1}
                options={{title: ''}} 
            />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000 ',
        alignItems: 'center',
        justifyContent: 'center',
    },
});