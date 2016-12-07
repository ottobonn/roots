import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import EventCard from "./EventCard";
import Router from "../navigation/Router";
import {withNavigation} from "@exponent/ex-navigation";

const eventDateComparator = function(eventA, eventB) {
  return new Date(eventA.date) - new Date(eventB.date);
};

@withNavigation
export default class EventListView extends Component {
  render() {
    var eventArray = [].concat(this.props.events);
    if (this.props.sortByDate) {
      eventArray.sort(eventDateComparator);
    }
    return (
      <View>
        <ScrollView>
          {eventArray.map((eventInfo) => {
            return (
              <EventCard
                eventInfo={eventInfo}
                showPeople={this.props.showPeople}
                key={eventInfo.id}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

EventListView.propTypes = {
  /* Boolean indicating whether or not to show chatheads */
  showPeople: React.PropTypes.bool,
  /* Boolean, whether or not to sort by date */
  sortByDate: React.PropTypes.bool,
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
      image: React.PropTypes.any
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
  })).isRequired
};
