import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { DraxList, DraxProvider } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationButton from "../Components/NavigationButton";
import ActiveSpark from "./ActiveSpark";
import NoActiveSpark from "./NoActiveSpark";
import { sparksData } from "./data";
import SparkCard from "./SparkCard";

function Sparks({ navigation }) {
  const [activatedSpark, setActivatedSpark] = useState();
  const [sparksList, setSparksList] = useState(sparksData);

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
              //   keyExtractor={(item) => item.id}
              keyExtractor={(item, index) => index}
              //   renderItem={({ item }) => {
              //     return (
              //       <TouchableOpacity onLongPress={() => setActivatedSpark(item)}>
              //         <SparkCard
              //           item={item}
              //           shadowPropStyle={styles.shadowProp}
              //           logoStyle={styles.logo}
              //         />
              //       </TouchableOpacity>
              //     );
              //   }}
            />
          </View>
          <NavigationButton
            navigation={navigation}
            screenName="HomeScreen"
            title="Home"
            style={styles.button}
          />
        </DraxProvider>
      </GestureHandlerRootView>
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
  },
});
export default Sparks;
