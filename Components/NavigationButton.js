import { Pressable, StyleSheet, Text } from "react-native";
function NavigationButton({ navigation, screenName, title, style }) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
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
export default NavigationButton;
