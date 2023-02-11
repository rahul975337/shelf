import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

function ViewGroup({ route, navigation }) {
  const { participantsList } = route.params;
  participantsList.sort();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Group Participants</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={participantsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contact}>
              <Text style={styles.textDefault}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E1117",
  },
  listContainer: {
    width: "100%",
  },
  heading: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },
  contact: {
    borderBottomWidth: 0.2,
    justifyContent: "center",
    height: 60,
  },
  textDefault: {
    color: "white",
    marginLeft: 25,
  },
});
export default ViewGroup;
