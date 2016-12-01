import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";
import events from "../static/content/events.js";

var eventList = [];

export default class DiscoverCategoryScreen extends Component {

  componentWillMount() {
    categoryName = this.props.route.params.name.toLowerCase();
    for (let i = 0; i < events.length; i++) {
      if (events[i].category === categoryName) {
        eventList.push(events[i]);
      }
    }
  }

  componentWillUnmount() {
    eventList = [];
  }

  render() {
    return (
      <PageFrame title={this.props.route.params.name}>
        <EventListView
          events = {eventList}
        />
      </PageFrame>
    );
  }
};