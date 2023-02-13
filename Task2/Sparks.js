import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { DraxList, DraxProvider } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationButton from "../Components/NavigationButton";
import ActiveSpark from "./ActiveSpark";
import NoActiveSpark from "./NoActiveSpark";
import { sparksData } from "./data";
import SparkCard from "./SparkCard";

function Sparks({ navigation }) {
  const [activatedSpark, setActivatedSpark] = useState("");
  const [sparksList, setSparksList] = useState(sparksData);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    if (activatedSpark != "")
      Alert.alert("Activated", activatedSpark.company, [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
  }, [activatedSpark]);
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <DraxProvider>
          <Text style={styles.title}>sparks</Text>
          {!activatedSpark ? (
            <NoActiveSpark
              sparksList={sparksList}
              setSparksList={setSparksList}
              stylshadowPropStylees={styles.shadowProp}
              activatedSpark={activatedSpark}
              setActivatedSpark={setActivatedSpark}
            />
          ) : (
            <ActiveSpark
              sparksList={sparksList}
              setSparksList={setSparksList}
              stylshadowPropStylees={styles.shadowProp}
              logoStyle={styles.logo}
              activatedSpark={activatedSpark}
              setActivatedSpark={setActivatedSpark}
            />
          )}
          <View style={styles.listContainer}>
            <DraxList
              renderItemContent={SparkCard}
              scrollEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              indicatorStyle="white"
              alwaysBounceVertical={false}
              data={sparksList}
              keyExtractor={(item, index) => index}
            />
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
      <NavigationButton
        navigation={navigation}
        screenName="HomeScreen"
        title="Home"
        style={styles.button}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E1117",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
  },

  listContainer: {
    marginTop: 50,
    height: "30%",
    width: "100%",
  },

  shadowProp: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
  },

  logo: {
    borderRadius: "50%",
    height: 35,
    borderWidth: 0.2,
    overflow: "hidden",
    borderColor: "grey",
    width: 35,
  },
  button: {
    position: "absolute",
    bottom: 0,
    marginLeft: "23%",
  },
});
export default Sparks;
