import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

import {withNavigation} from "@exponent/ex-navigation";

import ChatHeads from "../components/ChatHeads";
import GlobalStyles from "../styles";
import Router from "../navigation/Router";
import FlexibleImage from "./FlexibleImage";

@withNavigation
export default class EventCard extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.props.navigator.push(Router.getRoute("eventDetails", {
      eventInfo: this.props.eventInfo
    }));
  }

  render() {
    var dateFormat = require('dateformat');
    var dateDisplay = dateFormat(this.props.eventInfo.date, "mmmm dd");

    var chatHeads = null;
    if (this.props.eventInfo.people) {
      chatHeads = (
        <ChatHeads
          title="Who's going:"
          attendees={this.props.eventInfo.people}
          organizer={this.props.eventInfo.organizer}
        />
      );
    }

    return (
      <View style={styles.card}>
        <TouchableHighlight style={{flex: 1}} onPress={this.showDetails}>
          <View style={{flex: 1}}>
            <View style={styles.cardHeader}>
              <FlexibleImage source={this.props.eventInfo.image} />
              <Text style={[GlobalStyles.titleFont, styles.title]}>
                {this.props.eventInfo.title}
              </Text>
            </View>

            <View style={styles.eventDetail}>
              <Text style={[styles.detailText, styles.date]}>
                {dateDisplay}
              </Text>
              <Text style={[styles.detailText, styles.location]}>
                {this.props.eventInfo.location}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        {chatHeads}
      </View>
    );
  }
}

EventCard.propTypes = {
  /* Event object */
  eventInfo: React.PropTypes.shape({
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
  }).isRequired,
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    elevation: 10
  },
  cardHeader: {
    flex: 1,
    height: 200
  },
  title: {
    // marginTop: -10,
    color: "white",
    backgroundColor: "#333c",
    fontSize: 25,
    padding: 10,
    textAlign: "center",
    /* Position at bottom and fill width */
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
  eventDetail: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: -1
  },
  date: {
    flex: 1,
    textAlign: "left"
  },
  location: {
    flex: 1,
    textAlign: "right"
  },
  detailText: {
    // for location and date
    margin: 10,
    fontSize: 15
  },
  chatHeadsLabel: {
    paddingLeft: 10,
    fontSize: 10
  }
});
