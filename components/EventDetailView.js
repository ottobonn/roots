import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import dateFormat from "dateformat";
import {Ionicons} from "@exponent/vector-icons";
import Button from "react-native-button";
import {connect} from "react-redux";

import CameraButton from "../components/CameraButton";
import ChatHead from "../components/ChatHead";
import ChatHeads from "../components/ChatHeads";
import FlexibleImage from "./FlexibleImage";
import GlobalStyles from "../styles";
import BodyText from "./BodyText";
import TitleText from "./TitleText";
import store from "../store";
import toast from "../util/toast";

class EventDetailView extends Component {
  render() {
    var signUpView = null;
    if (this.props.signedUp) {
      signUpView = (
        <View>
          <View style={styles.signUpView}>
            <Ionicons name="md-checkmark-circle-outline" style={styles.signUpViewText, styles.signUpViewIcon} />
            <BodyText style={styles.signUpViewText}>{"I'm going"}</BodyText>
          </View>
          <View style={styles.cancel}>
            <TouchableOpacity onPress={this.props.cancelEvent} style={styles.cancelButton}>
              <BodyText style={styles.cancelText}> Cancel </BodyText>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      signUpView = (
        <View>
          <TouchableOpacity onPress={this.props.signupForEvent} style={styles.buttonContainer}>
            <BodyText style={styles.button}> Sign up </BodyText>
          </TouchableOpacity>
        </View>
      );
    }

    var dateDisplay = dateFormat(this.props.eventInfo.date, "mmmm dd, h:MM tt");

    var cameraButton = null;
    if (this.props.signedUp) {
      cameraButton = (
        <View style={styles.fab}>
          <CameraButton eventInfo={this.props.eventInfo} diameter={cameraButtonDiameter} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          {cameraButton}
          <View style={styles.header}>
            {/* Header */}
            <FlexibleImage source={this.props.eventInfo.image} />
            <TitleText style={styles.title}>{this.props.eventInfo.title}</TitleText>
          </View>
          {signUpView}
          <View style={styles.body}>
            {/* metadata*/}
            <View>
              <BodyText style={styles.location} bold={true}>{this.props.eventInfo.location}</BodyText>
              <BodyText style={styles.date}>{dateDisplay}</BodyText>
            </View>
            <View>
              {/* Event details */}
              <BodyText style={styles.eventDetail}>{this.props.eventInfo.description}</BodyText>
            </View>
            <View>
              {/* Organizer details */}
              <BodyText style={styles.organizerName} bold={true}>{"About " + this.props.eventInfo.organizer.name}</BodyText>
              <View style={styles.organizerSection}>
                <ChatHead userInfo={this.props.eventInfo.organizer} style={styles.organizerPic} />
                <BodyText style={[styles.eventDetail, styles.organizerBio]}>{this.props.eventInfo.organizer.bio}</BodyText>
              </View>
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
  }).isRequired
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const toastOffset = 50;
  return {
    signupForEvent: () => {
      toast(`Added "${ownProps.eventInfo.title}" to Upcoming`);
      store.dispatch({
        type: "ADD_EVENT",
        event: ownProps.eventInfo
      });
    },
    cancelEvent: () => {
      toast(`Removed "${ownProps.eventInfo.title}" from Upcoming`);
      store.dispatch({
        type: "REMOVE_EVENT",
        event: ownProps.eventInfo
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(EventDetailView);

const cameraButtonDiameter = 60;
const headerHeight = 300;

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    height: headerHeight,
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
    paddingTop: 10
  },
  cancel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpViewText: {
    fontSize: 18,
    padding: 5,
  },
  signUpViewIcon: {
    fontSize: 16,
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
    paddingTop: 15
  },
  organizerName: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    textAlign: "center"
  },
  organizerSection: {
    flex: 1,
    flexDirection: "row",
  },
  organizerPic: {
    flex: 1,
  },
  organizerBio: {
    flex: 3,
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    height: 45,
    backgroundColor: "#499700",
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 17,
    color: "white",
  },
  cancelText: {
    color: "red",
    fontSize: 11,
  },
  cancelButton: {
    marginTop: -3,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  fab: {
    position: "absolute",
    right: 25,
    top: headerHeight - cameraButtonDiameter / 2,
  }
});
