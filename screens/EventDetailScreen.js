import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";

import PageFrame from "../components/PageFrame";
import EventDetailView from "../components/EventDetailView";

export default class EventDetailScreen extends Component {
  constructor() {
    super();
    this.state = {signedUp: false};
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup() {
    this.setState({signedUp: !this.state.signedUp});
  }

  render() {
    return (
      <PageFrame overlay={true}>
        <EventDetailView
          eventInfo = {this.props.route.params.eventInfo}
          onSignUpChange = {this.toggleSignup}
          signedUp = {this.state.signedUp}
        />
      </PageFrame>
    );
  }
};
