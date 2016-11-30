import React from "react";
import {
  View,
  StyleSheet,
  Image
} from "react-native";
import PageFrame from "../components/PageFrame";

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
  render(){
    return (
      <View style={styles.container}>
        <PageFrame title="Memories" backButton={false} searchButton={false}>
        </PageFrame>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});