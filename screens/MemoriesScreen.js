import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";
import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var userData = {
  name: "Travis",
  image: require("../static/images/travis.jpg"),
  memories: []
};

for (var i = 0; i < 50; i++) {
  var memory = {
  	eventName: "Tree planting",
  	eventDate: randomDate(new Date(2016, 0, 10), new Date(2016, 11, 10)).toISOString(),
  	image: require("../static/images/memories/01.jpg"),
  };
  userData.memories.push(memory);
}

export default class MemoriesScreen extends React.Component {
  render(){
    return (
      <PageFrame title="Memories" backButton={false} searchButton={false}>
        <MemoriesView userData={userData} />
      </PageFrame>
    );
  }
}
