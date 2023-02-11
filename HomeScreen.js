import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { StatusBar } from "expo-status-bar";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CreateGroup")}
      >
        <Text style={styles.buttonText}>Create Group</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Spark")}
      >
        <Text style={styles.buttonText}>Spark</Text>
      </Pressable>
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
  button: {
    color: "pink",
    height: 50,
    margin: 50,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
    backgroundColor: "cyan",
  },
  buttonText: {
    color: "#0E1117",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default HomeScreen;
