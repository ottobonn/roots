import React from "react";
import {
  Text
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";
import store from "../store";

class EventsScreen extends React.Component {
  render() {
    return (
      <PageFrame title="Upcoming events" backButton={false} searchButton={true}>
        <EventListView events={this.props.events} />
      </PageFrame>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    events: store.events
  };
};

export default connect(mapStateToProps)(EventsScreen);
