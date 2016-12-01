import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";
import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView"
import ChatHead from "../components/ChatHead"

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var userData = {
  name: "Travis",
  image: require("../static/images/travis.jpg"),
  memories: []
};

for (var i = 0; i < 5; i++) {
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
      <View style={styles.container}>
        <PageFrame title="Memories" backButton={false} searchButton={false}>
          <View style={styles.content}>
            <Image style={styles.image} source={userData.image}/>
            <Text style={styles.userName}>{userData.name}</Text>
          </View>
          <MemoriesView userData={userData}> </MemoriesView>
        </PageFrame>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 19,
    paddingBottom: 10,
  },
  container: {
    flex: 1
  },
  content: {
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});