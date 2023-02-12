import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { sparksData } from "./data";
import ImageColors from "react-native-image-colors";

function Sparks({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>sparks</Text>
      <View style={styles.mainCard}></View>
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          indicatorStyle="white"
          alwaysBounceVertical={false}
          data={sparksData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={[styles.card, styles.shadowProp]}>
                <Text style={styles.textDefault}>{item.company}</Text>
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
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#0E1117",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
  },
  mainCard: {
    backgroundColor: "red",
    height: "40%",
    width: "100%",
  },
  listContainer: {
    // margin: 30,
    height: "30%",
    width: "100%",
    // backgroundColor: "pink",
  },
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
  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
  },

  cardBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    borderRadius: "50%",
    height: 35,
    borderWidth: 0.2,
    // resizeMode: "contain",
    overflow: "hidden",
    borderColor: "grey",
    width: 35,
  },
  indicator: {
    color: "white",
    backgroundColor: "white",
  },
});
export default Sparks;
