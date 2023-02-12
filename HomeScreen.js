import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
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
      {/* <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CreateGroup")}
      >
        <Text style={styles.buttonText}>Create Group</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Task2")}
      >
        <Text style={styles.buttonText}>Task2</Text>
      </Pressable> */}
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
