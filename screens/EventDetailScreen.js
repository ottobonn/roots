import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import EventDetailView from "../components/EventDetailView";

class EventDetailScreen extends Component {
  render() {
    var currentEvent = this.props.route.params.eventInfo;
    var foundEvent = this.props.signedUpEvents.find((eventInfo) => {
      return eventInfo.id === currentEvent.id;
    });
    var signedUp = !!foundEvent; // Coerce to boolean

    return (
      <PageFrame overlay={true}>
        <EventDetailView
          eventInfo = {currentEvent}
          signedUp = {signedUp}
        />
      </PageFrame>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    signedUpEvents: store.events
  };
};

export default connect(mapStateToProps)(EventDetailScreen);
