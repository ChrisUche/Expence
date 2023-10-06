
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddExpenceScreen from "../screens/AddExpenceScreen";
import AddTripScreen from "../screens/AddTripScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddExpence" component={AddExpenceScreen} />
          <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
    
  );
}
