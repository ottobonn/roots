import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ListView
} from "react-native";
import EventCard from "./EventCard";
import Router from "../navigation/Router";
import {withNavigation} from "@exponent/ex-navigation";

function sortEvents(eventArray) {
  eventArray.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  return eventArray;
}

@withNavigation
export default class EventListView extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    console.log("event list view rendering");
    console.log(this.props.events);
    // Sort events by date
    var eventArray = sortEvents(this.props.events);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.title !== r2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(eventArray)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.events !== this.props.events) {
      var eventArray = sortEvents(nextProps.events);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(eventArray)
      })
    }
  }


  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={
            (rowData) =>
              <EventCard
                eventInfo={rowData}
              />
          }
        />
      </View>
    );
  }
}

EventListView.propTypes = {
  /* Array of eventInfo objects */ 
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    /* Event id */
    id: React.PropTypes.number.isRequired,
    /* Event title */
    title: React.PropTypes.string.isRequired,
    /* Event description */
    description: React.PropTypes.string.isRequired,
    /* Information about the event organizer */
    organizer: React.PropTypes.shape({
      /* The name of the organizer */
      name: React.PropTypes.string.isRequired,
      /* The biography or description of the organizer */
      bio: React.PropTypes.string.isRequired,
      /* `image` should be an image as returned by require("image-uri") */
      image: React.PropTypes.number
    }).isRequired,
    /* `image` should be an image as returned by require("image-uri") */
    image: React.PropTypes.number.isRequired,
    /* The human-formatted date string to be displayed for the event */
    date: React.PropTypes.string.isRequired,
    /* The human-formatted location string to be displayed for the event */
    location: React.PropTypes.string.isRequired,
    /* The attendees of the event */
    people: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      /* `image` should be an image as returned by require("image-uri") */
      image: React.PropTypes.number.isRequired
    })).isRequired
  })).isRequired,
};

