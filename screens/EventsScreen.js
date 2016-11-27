import React from "react";
import {
  Text
} from "react-native";

export default class EventsScreen extends React.Component {
  render() {
    return (
      <Text>My events</Text>
    );
  }
}

EventsScreen.route = {
  navigationBar: {
    title: "My events",
  }
};
