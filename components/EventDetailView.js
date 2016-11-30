import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import {Ionicons} from "@exponent/vector-icons";
import Button from "react-native-button";
import ChatHeads from "../components/ChatHeads";
import FlexibleImage from "./FlexibleImage";

export default class EventDetailView extends Component {
  constructor(props) {
    super(props);
    this.toggleSignup = this.toggleSignup.bind(this);
    console.log(props);
  }

  toggleSignup() {
    this.props.onSignUpChange(!this.props.signedUp);
    console.log("toggle signup");
  }

  render() {
    /* The footer holds either the signup button or the chat heads. */
    var footer = null;
    if (this.props.signedUp) {
      footer = (
        <View style={styles.chatHeadsBar}>
          <ChatHeads style={styles.chatHeads} title="Who's going:" attendees={this.props.eventInfo.people} />
        </View>
      );
    } else {
      footer = (
        <View style={styles.buttonBar}>
          <Button
            containerStyle={styles.buttonContainer}
            style={styles.button}
            onPress={this.toggleSignup}
          >
            Sign up
          </Button>
        </View>
      );
    }

    var cancelView = null;
    if (this.props.signedUp) {
      cancelView = (
        <View style={styles.cancelView}>
          <Ionicons name="md-checkmark-circle-outline" style={styles.cancelViewText} />
          <Text style={styles.cancelViewText}>{"I'm going"}</Text>
          <Button
            onPress={this.toggleSignup}
          >
            Cancel
          </Button>
        </View>
      );
    }

    var dateFormat = require('dateformat');
    var dateDisplay = dateFormat(this.props.eventInfo.date, "mmmm dd, h:MM tt");

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.header}>
            {/* Header */}
            <FlexibleImage source={this.props.eventInfo.image} />
            <Text style={styles.title}>{this.props.eventInfo.title}</Text>
          </View>
          <View style={styles.body}>
            {/* metadata*/}
            <View>
              <Text style={styles.location}>{this.props.eventInfo.location}</Text>
              <Text style={styles.date}>{dateDisplay}</Text>
            </View>
            {cancelView}
            <View>
              {/* Event details */}
              <Text style={styles.eventDetail}>{this.props.eventInfo.description}</Text>
            </View>
            <View>
              {/* Organizer details */}
              <Text style={styles.organizerName}>{"About " + this.props.eventInfo.organizer.name}</Text>
              <Text style={styles.organizerBio}>{this.props.eventInfo.organizer.bio}</Text>
            </View>
          </View>
        </ScrollView>
        {footer}
      </View>
    );
  }
};

EventDetailView.propTypes = {
  /* True when the user is signed up for this event and false otherwise */
  signedUp: React.PropTypes.bool,
  /* Called with new signup status when the user alters the signup */
  onSignUpChange: React.PropTypes.func.isRequired,
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
  header: {
    flexDirection: "column",
    height: 300,
    backgroundColor: "black"
  },
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f3efef"
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    fontSize: 19,
    padding: 10,
    backgroundColor: "#333c"
  },
  cancelView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cancelViewText: {
    fontSize: 20,
    padding: 5
  },
  eventDetail: {
    fontSize: 12
  },
  meta: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  date: {
    flex: 1,
    fontSize: 13,
    textAlign: "center",
    paddingBottom: 10,
  },
  location: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold"
  },
  organizerName: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  organizerBio: {
    fontSize: 12
  },
  buttonBar: {
    elevation: 10,
    backgroundColor: "#4b4b4b"
  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    height: 45,
    backgroundColor: "#499700"
  },
  button: {
    fontSize: 19,
    color: "white"
  },
  chatHeadsBar: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 5
  }
});
