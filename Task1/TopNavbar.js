import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TopNavbar({ selectedContacts, navigation }) {
  return (
    <View style={styles.topNavBar}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.navBarText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Add Participants</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ViewGroup", {
            participantsList: selectedContacts,
          })
        }
      >
        <Text style={styles.navBarText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  topNavBar: {
    // height: "10%",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 0.2,
    borderColor: "white",
  },
  navBarText: {
    color: "cyan",
  },
  heading: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },

});
export default TopNavbar;
