import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
function SparkCard({ item, index }) {
  return (
    <DraxView
      style={[styles.card, styles.shadowProp]}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={index}
      longPressDelay={150}
      key={index}
    >
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
        <Image style={styles.logo} source={{ uri: item.logo }} />
      </View>
    </DraxView>
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
  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
  },
  draggableBox: {
    width: Dimensions.get("window").width / 4 - 12,
    height: Dimensions.get("window").width / 4 - 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: "magenta",
    borderWidth: 2,
  },
  logo: {
    borderRadius: "50%",
    height: 35,
    borderWidth: 0.2,
    overflow: "hidden",
    borderColor: "grey",
    width: 35,
  },
});
export default SparkCard;
