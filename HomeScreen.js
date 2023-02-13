import { SafeAreaView, StyleSheet } from "react-native";
import NavigationButton from "./Components/NavigationButton";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationButton
        navigation={navigation}
        screenName="CreateGroup"
        title="Create Group"
      />
      <NavigationButton
        navigation={navigation}
        screenName="Sparks"
        title="Sparks"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E1117",
    justifyContent: "center",
  },
});
export default HomeScreen;
