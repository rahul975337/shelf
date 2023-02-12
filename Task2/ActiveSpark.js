import { Image, StyleSheet, Text, View } from "react-native";

function ActiveSpark({ activatedSpark, shadowPropStyle, logoStyle }) {
  return (
    <View
      style={{
        ...styles.selectedMainCard,
        ...shadowPropStyle,
        ...{ backgroundColor: activatedSpark.color },
      }}
    >
      <Image style={logoStyle} source={{ uri: activatedSpark.logo }} />
      <Text style={{ color: "white" }}>{activatedSpark.company}</Text>
      <Text
        style={{
          color: "white",
          marginTop: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Get {activatedSpark.offer}% cashback
      </Text>
      <View style={styles.cardBottom}>
        <Text style={{ color: "white", fontSize: 13 }}>
          🕐 {activatedSpark.days} days left
        </Text>
        <Text
          style={{
            color: "grey",
            fontWeight: "bold",
          }}
        >
          slice mini
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  selectedMainCard: {
    backgroundColor: "white",
    height: "27%",
    borderRadius: 25,
    marginTop: 50,
    width: "85%",
    padding: 20,
  },
  cardBottom: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
});
export default ActiveSpark;
