import React from "react";
import {
  Text,
  StyleSheet
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";
import store from "../store";

class EventsScreen extends React.Component {
  render() {
    var list = <EventListView events={this.props.events} />;
    var emptyMessage = <Text style={styles.emptyMessage}>You have no upcoming events.</Text>;

    return (
      <PageFrame title="Upcoming events" backButton={false} searchButton={true}>
        {this.props.events.length > 0 ? list : emptyMessage}
      </PageFrame>
    );
  }
}

const mapStoreToProps = function(store) {
  return {
    events: store.events
  };
};

const styles = StyleSheet.create({
  emptyMessage: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default connect(mapStoreToProps)(EventsScreen);
