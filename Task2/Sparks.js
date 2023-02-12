import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import NavigationButton from "../Components/NavigationButton";
import ActiveSpark from "./ActiveSpark";
import { sparksData } from "./data";
import NoActiveSpark from "./NoActiveSpark";
import SparkCard from "./SparkCard";
import Draggable from "react-native-draggable";

function Sparks({ navigation }) {
  const [activatedSpark, setActivatedSpark] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>sparks</Text>
      {!activatedSpark ? (
        <NoActiveSpark shadowPropStyle={styles.shadowProp} />
      ) : (
        <ActiveSpark
          stylshadowPropStylees={styles.shadowProp}
          logoStyle={styles.logo}
          activatedSpark={activatedSpark}
        />
      )}
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
              <TouchableOpacity onLongPress={() => setActivatedSpark(item)}>
                <SparkCard
                  item={item}
                  shadowPropStyle={styles.shadowProp}
                  logoStyle={styles.logo}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
  },
});
export default Sparks;
