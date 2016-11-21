import Exponent from "exponent";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import EventListView from "./components/EventListView";
import ChatHead from "./components/ChatHead";
import ChatHeads from "./components/ChatHeads";

var person = {
  name: "Travis",
  image: require("./static/images/travis.jpg")
};

var people = [];
for (var i = 0; i < 10; i++) {
  people.push(person);
}

var treeEvent = {
  title: "Tree Planting",
  image: require("./static/images/placeholder.jpg"),
  date: "16 Nov 2016",
  location: "Henry Coe Park",
  people: people
};

var events = [];
for (var i = 0; i < 10; i++) {
  events.push(treeEvent);
}

// <Text>Testing the editor</Text>
// <EventListView
//   events = {events}
// />

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
