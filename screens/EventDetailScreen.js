import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";

import PageFrame from "../components/PageFrame";
import EventDetailView from "../components/EventDetailView";

export default class EventDetailScreen extends Component {
  render() {
    // Placeholder empty function to suppress warnings 
    var emptyFunc = function() {};
    return (
      <PageFrame title={this.props.route.params.eventInfo.title}>
        <EventDetailView
          eventInfo = {this.props.route.params.eventInfo}
          onSignUpChange = {emptyFunc}
        />
      </PageFrame>
    );
  }
};