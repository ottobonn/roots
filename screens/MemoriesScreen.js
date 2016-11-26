import React from "react";
import {
  Text
} from "react-native";

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
