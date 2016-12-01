import React from "react";
import {
  Text
} from "react-native";

import PageFrame from "../components/PageFrame";
import EventListView from "../components/EventListView";

export default class EventsScreen extends React.Component {
  render() {
    return (
      <PageFrame title="Upcoming events" backButton={false} searchButton={true}>
        <EventListView events={[]} />
      </PageFrame>
    );
  }
}
