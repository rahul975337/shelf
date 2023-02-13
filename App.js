import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import CreateGroup from "./Task1/CreateGroup";
import ViewGroup from "./Task1/ViewGroup";
import Sparks from "./Task2/Sparks";

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
        <Stack.Screen name="Sparks" component={Sparks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
