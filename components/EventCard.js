import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

import {withNavigation} from "@exponent/ex-navigation";

import BodyText from "./BodyText";
import TitleText from "./TitleText";
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
        <View style={styles.chatHeads}>
          <ChatHeads
            attendees={this.props.eventInfo.people}
            organizer={this.props.eventInfo.organizer}
          />
        </View>
      );
    }

    return (
      <View style={styles.card}>
        <TouchableHighlight style={{flex: 1}} onPress={this.showDetails}>
          <View style={{flex: 1}}>
            <View style={styles.cardHeader}>
              <FlexibleImage source={this.props.eventInfo.image} />
              <TitleText style={styles.title}>
                {this.props.eventInfo.title}
              </TitleText>
            </View>

            <View style={styles.eventDetail}>
              <BodyText style={styles.location}>
                {this.props.eventInfo.location}
              </BodyText>
              <BodyText style={styles.date}>
                {dateDisplay}
              </BodyText>
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
  chatHeads: {
    paddingTop: 8
  },
  title: {
    // marginTop: -10,
    color: "white",
    backgroundColor: "#333c",
    fontSize: 19,
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
    backgroundColor: "white",
  },
  date: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    color: "#4b4b4b"
  },
  location: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    paddingTop: 5,
    fontWeight: "bold",
  },
});
