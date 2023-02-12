import { Image, StyleSheet, Text, View } from "react-native";
import { DraxView } from "react-native-drax";

const ActiveSpark = ({
  activatedSpark,
  setActivatedSpark,
  shadowPropStyle,
  logoStyle,
  index,
  sparksList,
  setSparksList,
}) => {
  // const showConfirmation = () => {
  //   return (

  //   );
  // };

  return (
    <DraxView
      style={{
        ...styles.selectedMainCard,
        ...shadowPropStyle,
        ...{ backgroundColor: activatedSpark.color },
      }}
      onReceiveDragDrop={(event) => {
        let selected_item = sparksList[event.dragged.payload];
        if (activatedSpark) {
          setSparksList(sparksList.unshift(activatedSpark));
        }
        setActivatedSpark(selected_item);

        let arr = sparksList.filter((item) => item !== selected_item);
        console.log(selected_item);
        setSparksList(arr);
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
    </DraxView>
  );
};
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
