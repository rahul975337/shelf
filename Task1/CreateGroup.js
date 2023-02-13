import * as Contacts from "expo-contacts";

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LazyLoadFlatList from "@gluons/react-native-lazyload-flatlist";
import TopNavbar from "./TopNavbar";

const CreateGroup = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contactsPermission, setContactsPermission] = useState(null);
  const [lastLoadedData, setLastLoadedData] = useState([]);
  function getRandomColor() {
    var letters = "BCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setContactsPermission(status);

      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          sort: "firstName",
        });
        setContacts(data);
      }
    })();
  }, []);

  const toggleContact = (contact) => {
    if (selectedContacts.includes(contact))
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    else setSelectedContacts([...selectedContacts, contact]);
  };
  const getContactsList = () => {
    return (
      <LazyLoadFlatList
        data={contacts}
        itemLimit={20}
        onLoadMore={(moreData) => {
          setLastLoadedData(moreData);
          return moreData;
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleContact(item)}
            style={
              selectedContacts.includes(item)
                ? styles.selectedContact
                : styles.contact
            }
          >
            <Text style={[styles.textDefault, styles.contactListText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };
  const getSelectedContacts = () => {
    return (
      <LazyLoadFlatList
        horizontal={true}
        data={selectedContacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleContact(item)}>
            <View
              style={{
                ...styles.selectedListItem,
                ...{ backgroundColor: getRandomColor() },
              }}
            >
              <Text style={{ ...styles.textDefault, ...{ color: "black" } }}>
                {item.firstName.slice(0, 2).toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavbar navigation={navigation} selectedContacts={selectedContacts} />
      {/* Selected List */}
      {selectedContacts.length > 0 && (
        <>
          <Text style={styles.heading}>Selected Contacts</Text>
          <View style={styles.selectedContainer}>{getSelectedContacts()}</View>
        </>
      )}
      {/* Contacts List */}
      <View style={styles.listContainer}>
        {contactsPermission === "granted" ? (
          getContactsList()
        ) : (
          <Text>Please grant access to your contacts to use this feature.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E1117",
  },
  selectedContainer: {
    width: "100%",
    padding: 20,
  },
  textDefault: {
    color: "white",
  },
  contactListText: {
    marginLeft: 25,
  },
  heading: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
  },
  selectedListItem: {
    width: 70,
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    borderRadius: 70 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
  },
  listContainer: {
    width: "100%",
  },
  contact: {
    borderBottomWidth: 0.2,
    justifyContent: "center",
    height: 60,
  },
  selectedContact: {
    backgroundColor: "grey",
    justifyContent: "center",
    borderWidth: 0.2,
    height: 60,
  },
});


export default CreateGroup;
