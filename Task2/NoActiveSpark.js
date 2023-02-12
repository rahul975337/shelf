import { StyleSheet, Text, View } from "react-native";

function NoActiveSpark({ shadowPropStyle }) {
  return (
    <View style={[styles.mainCard, shadowPropStyle]}>
      <Text style={{ color: "grey" }}>No Active Spark</Text>
      <Text
        style={{
          color: "grey",
          fontWeight: "bold",
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        slice mini
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "white",
    height: "27%",
    borderRadius: 25,
    marginTop: 50,
    width: "85%",
    padding: 20,
  },
});

export default NoActiveSpark;
