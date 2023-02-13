import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

const gestureRootViewStyle = { flex: 1 };

export default function Demo() {
  const draggableItemList = [
    {
      id: 101,
      name: "A",
      background_color: "red",
    },
    {
      id: 102,
      name: "B",
      background_color: "pink",
    },
    {
      id: 103,
      name: "C",
      background_color: "blue",
    },
    {
      id: 104,
      name: "D",
      background_color: "purple",
    },
  ];

  const [itemsList, setItemsList] = useState(draggableItemList);
  const [selectedItem, setSelectedItem] = useState("DUMMY");
  const SmallCard = ({ item, index }) => {
    return (
      <DraxView
        style={[
          styles.centeredContent,
          styles.draggableBox,
          { backgroundColor: item.background_color },
        ]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
      </DraxView>
    );
  };

  const MainCard = () => {
    return (
      <DraxView
        style={[
          styles.centeredContent,
          styles.receivingZone,
          { backgroundColor: "green" },
        ]}
        onReceiveDragDrop={(event) => {
          let selected_item = itemsList[event.dragged.payload];
          if (selectedItem) {
            setItemsList(itemsList.push(selectedItem));
          }
          setSelectedItem(selected_item);
          let arr = itemsList.filter((item) => item !== selected_item);
          setItemsList(arr);
        }}
      >
        <Text style={styles.textStyle}>{selectedItem.name}</Text>
      </DraxView>
    );
  };

  return (
    <GestureHandlerRootView style={gestureRootViewStyle}>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.receivingContainer}>
            <MainCard />
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={itemsList}
              renderItemContent={SmallCard}
              keyExtractor={(item, index) => index}
              numColumns={4}
              scrollEnabled={true}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: "space-evenly",
  },
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: Dimensions.get("window").width / 4 - 12,
    borderRadius: 10,
    width: Dimensions.get("window").width / 4 - 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
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
  receivingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  draxListContainer: {
    padding: 5,
    height: 200,
  },
});
