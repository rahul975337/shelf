import CreateGroup from "./Task1/CreateGroup";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Sparks from "./Task2/Sparks";
import { StatusBar } from "react-native";
import ViewGroup from "./Task1/ViewGroup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Demo from "./Task2/demo";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="ViewGroup" component={ViewGroup} /> */}
        {/* <Stack.Screen name="Sparks" component={Sparks} /> */}
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
