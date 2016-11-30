import React from "react";
import {
  Text
} from "react-native";

var memory = {
  eventName: "Tree planting",
  eventDate: Date(),
  image: require("../static/content/images/memories/01.jpg")
};

var userData = {
  name: "Sara",
  image: require("../static/content/images/people/users/01_sara_douglas.jpg"),
  memories: []
};

for (var i = 0; i < 10; i++) {
  userData.memories.push(memory);
}

export default class MemoriesScreen extends React.Component {
  render() {
    return (
      <Text>My memories</Text>
    );
  }
}

MemoriesScreen.route = {
  navigationBar: {
    title: "My memories",
  }
};
