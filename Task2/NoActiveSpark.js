import { StyleSheet, Text } from "react-native";
import { DraxView } from "react-native-drax";
function NoActiveSpark({
  shadowPropStyle,
  activatedSpark,
  setActivatedSpark,
  index,
  sparksList,
  setSparksList,
}) {
  return (
    <DraxView
      style={[styles.mainCard, shadowPropStyle]}
      onReceiveDragDrop={(event) => {
        let selected_item = sparksList[event.dragged.payload];
        if (activatedSpark) {
          setSparksList(sparksList.push(activatedSpark));
        }
        setActivatedSpark(selected_item);
        let arr = sparksList.filter((item) => item !== selected_item);
        setSparksList(arr);
      }}
    >
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
    </DraxView>
  );
}
const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "white",
    height: "27%",
    borderRadius: 25,
    marginLeft: 25,
    marginTop: 50,
    width: "85%",
    padding: 20,
  },
});

export default NoActiveSpark;
