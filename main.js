import Exponent from "exponent";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import EventListView from "./components/EventListView";

treeEvent = {
  title: "Tree Planting",
  image: require("./static/images/placeholder.jpg"),
  date: "16 Nov 2016",
  location: "Henry Coe Park"
};

var events = [];
for (var i = 0; i < 10; i++) {
  events.push(treeEvent);
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing the editor</Text>
        <EventListView
          events = {events}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

Exponent.registerRootComponent(App);
