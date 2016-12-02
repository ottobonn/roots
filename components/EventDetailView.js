import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import dateFormat from "dateformat";
import {Ionicons} from "@exponent/vector-icons";
import Button from "react-native-button";
import ChatHeads from "../components/ChatHeads";
import FlexibleImage from "./FlexibleImage";
import GlobalStyles from "../styles";
import BodyText from "./BodyText";
import TitleText from "./TitleText";

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
    var signUpView = null;
    if (this.props.signedUp) {
      signUpView = (
        <View style={styles.signUpView}>
          <Ionicons name="md-checkmark-circle-outline" style={styles.signUpViewText} />
          <BodyText style={styles.signUpViewText}>{"I'm going"}</BodyText>
          <Button onPress={this.toggleSignup} style={GlobalStyles.bodyFont}>
            Cancel
          </Button>
        </View>
      );
    } else {
      signUpView = (
        <Button
          containerStyle={styles.buttonContainer}
          style={[GlobalStyles.bodyFont, styles.button]}
          onPress={this.toggleSignup}
        >
          Sign up
        </Button>
      );
    }

    var dateDisplay = dateFormat(this.props.eventInfo.date, "mmmm dd, h:MM tt");

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.header}>
            {/* Header */}
            <FlexibleImage source={this.props.eventInfo.image} />
            <TitleText style={styles.title}>{this.props.eventInfo.title}</TitleText>
          </View>
          {signUpView}
          <View style={styles.body}>
            {/* metadata*/}
            <View>
              <BodyText style={styles.location}>{this.props.eventInfo.location}</BodyText>
              <BodyText style={styles.date}>{dateDisplay}</BodyText>
            </View>
            <View>
              {/* Event details */}
              <BodyText style={styles.eventDetail}>{this.props.eventInfo.description}</BodyText>
            </View>
            <View>
              {/* Organizer details */}
              <BodyText style={styles.organizerName}>{"About " + this.props.eventInfo.organizer.name}</BodyText>
              <BodyText style={styles.organizerBio}>{this.props.eventInfo.organizer.bio}</BodyText>
            </View>
          </View>
          <View style={styles.chatHeadsBar}>
            <ChatHeads style={styles.chatHeads} title="Who's going:" attendees={this.props.eventInfo.people} organizer={this.props.eventInfo.organizer} />
          </View>
        </ScrollView>
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
    padding: 25,
    paddingTop: 0
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
  signUpView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  signUpViewText: {
    fontSize: 20,
    padding: 5
  },
  eventDetail: {
    fontSize: 14,
    color: "#4b4b4b"
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
    color: "#4b4b4b"
  },
  location: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  organizerName: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  organizerBio: {
    fontSize: 14,
    color: "#4b4b4b"
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    height: 45,
    backgroundColor: "#499700",
    borderRadius: 5,
    elevation: 5
  },
  button: {
    fontSize: 19,
    color: "white"
  }
});
