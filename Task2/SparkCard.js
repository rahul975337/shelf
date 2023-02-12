import { Image, StyleSheet, Text, View } from "react-native";

function SparkCard({ shadowPropStyle, item, logoStyle }) {
  return (
    <View style={[styles.card, shadowPropStyle]}>
      <Text>{item.company}</Text>
      <Text
        style={{
          color: item.color,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Get {item.offer}% cashback
      </Text>
      <View style={styles.cardBottom}>
        <Text style={{ color: "grey", fontSize: 13 }}>
          🕐 {item.days} days left
        </Text>
        <Image style={logoStyle} source={{ uri: item.logo }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: 25,
    margin: 20,
    backgroundColor: "white",
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default SparkCard;
