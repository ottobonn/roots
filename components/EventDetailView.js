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

    var dateObj = new Date(this.props.eventInfo.date);
    var date = dateObj.toDateString();
    var time = dateObj.toLocaleTimeString();
    var dateDisplay = date + " " + time;

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.header}>
            {/* Header */}
            <FlexibleImage source={this.props.eventInfo.image} />
            <Text style={styles.title}>{this.props.eventInfo.title}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.meta}>
              <Text style={[styles.metaText, styles.date]}>{dateDisplay}</Text>
              <Text style={[styles.metaText, styles.location]}>{this.props.eventInfo.location}</Text>
            </View>
            {cancelView}
            <View>
              {/* Event details */}
              <Text style={styles.eventDetail}>{this.props.eventInfo.description}</Text>
            </View>
            <View>
              {/* Organizer details */}
              <Text style={styles.organizerName}>{this.props.eventInfo.organizer.name}</Text>
              <Text>{this.props.eventInfo.organizer.bio}</Text>
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
    fontSize: 30,
    padding: 5,
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
    fontSize: 18
  },
  meta: {
    flex: 1,
    flexDirection: "row",
    padding: 5
  },
  metaText: {
    fontSize: 15
  },
  date: {
    flex: 1
  },
  location: {
    flex: 1,
    textAlign: "right"
  },
  organizerName: {
    paddingTop: 20,
    fontSize: 20
  },
  buttonBar: {
    elevation: 10,
    backgroundColor: "#4b4b4b"
  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    height: 45,
    backgroundColor: "green"
  },
  button: {
    fontSize: 20,
    color: "white"
  },
  chatHeadsBar: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 5
  }
});
