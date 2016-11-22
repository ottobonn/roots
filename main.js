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
import EventDetail from "./components/EventDetail";
import PageFrame from "./components/PageFrame";

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
    // return (
    //   <View style={styles.container}>
    //     <EventListView
    //       events = {events}
    //     />
    //   </View>
    // );
    var content = <EventDetail
      title="Discourage the plastic bag!"
      description="I partnered with our local Smartway, which agreed to pushing negative incentives (on top of the extra fee) on plastic bags. Volunteers that join me in this event will hold up signs outside the store that encourage customers to either bring their own cloth bags or not take a plastic bag."
      organizer={{
        name: "Alanna Ihejirika",
        bio: "I moved from Norway in 2007. I read up on global warming there, and have felt its drastic effects. Since moving, I have been doing everything I can to help. I am currently in high school and am planning on a career in alternative energy."
      }}
      image={require("./static/images/placeholder.jpg")}
      date="17 Nov 2016"
      location="Smartway"
      people={people}
    />;
    return (
      <View style={styles.container}>
        <PageFrame title="Event detail" content={content} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 24
    // alignItems: "center",
    // justifyContent: "center",
  },
});

Exponent.registerRootComponent(App);
