import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ListView
} from "react-native";
import EventCard from "./EventCard";

export default class EventListView extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.events)
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) =>
              <EventCard
                title={rowData.title}
                image={rowData.image}
                date={rowData.date}
                location={rowData.location}
                people={rowData.people}
              />
          }
        />
      </View>
    );
  }
}
