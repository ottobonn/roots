import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";

treeEvent = {
  id: 0,
  title: "Tree Planting",
  image: require("../static/images/placeholder.jpg"),
  date: "16 Nov 2016",
  location: "Henry Coe Park",
  description: "Plant trees",
  organizer: {
  	name: "Ranger Max",
  	bio: "I like trees",
  },
  people: [],
};

var events = [];
for (var i = 0; i < 10; i++) {
  events.push(treeEvent);
}

export default class DiscoverCategoryScreen extends Component {
  render() {
    return (
      <PageFrame title={this.props.route.params.name}>
        <EventListView
          events = {events}
        />
      </PageFrame>
    );
  }
};
