import React from "react";
import {
  Text,
  StyleSheet
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";
import BodyText from "../components/BodyText";

class EventsScreen extends React.Component {
  render() {
    var list = <EventListView events={this.props.events} sortByDate={true} />;
    var emptyMessage = <BodyText style={styles.emptyMessage}>You have no upcoming events.</BodyText>;

    return (
      <PageFrame title="Upcoming events" backButton={false}>
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
