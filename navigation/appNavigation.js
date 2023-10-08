
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddExpenceScreen from "../screens/AddExpenceScreen";
import AddTripScreen from "../screens/AddTripScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{headerShown: false, presentation:'modal'}} name="SignIn" component={SignInScreen} />
          <Stack.Screen options={{headerShown: false, presentation:'modal'}} name="SignUp" component={SignUpScreen} />
          <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} />
          <Stack.Screen options={{headerShown: false}} name="AddExpence" component={AddExpenceScreen} />
          <Stack.Screen options={{headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
    
  );
}
