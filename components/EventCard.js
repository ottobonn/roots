import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import {withNavigation} from "@exponent/ex-navigation";
import dateFormat from "dateformat";

import BodyText from "./BodyText";
import TitleText from "./TitleText";
import ChatHeads from "../components/ChatHeads";
import ChatHead from "../components/ChatHead";
import GlobalStyles from "../styles";
import Router from "../navigation/Router";
import FlexibleImage from "./FlexibleImage";
import CameraButton from "./CameraButton";
import Colors from "../constants/Colors";

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
    var chatHeads = null;
    if (this.props.eventInfo.people && this.props.showPeople) {
      chatHeads = (
        <View style={styles.chatHeads}>
          <ChatHeads
            attendees={this.props.eventInfo.people}
            organizer={this.props.eventInfo.organizer}
          />
        </View>
      );
    }

    var detailsView = null;
    if (this.props.showPeople) {
      var dateDisplay = dateFormat(this.props.eventInfo.date, "mmmm dd");
      detailsView = (
        <View style={styles.eventDetail}>
          <BodyText style={styles.location} bold={true}>
            {this.props.eventInfo.location}
          </BodyText>
          <BodyText style={styles.date}>
            {dateDisplay}
          </BodyText>
         </View>
      );
    } else {
      var date = dateFormat(this.props.eventInfo.date, "dd");
      var monthYearTime = dateFormat(this.props.eventInfo.date, "mmmm | h:MM tt");
      detailsView = (
        <View style={styles.eventDetailUpcoming}>
          <BodyText style={styles.dateUpcoming} light={true}>
            {date}
          </BodyText>
          <BodyText style={styles.dateUpcomingMonth}>
          {monthYearTime}
          </BodyText>
        </View>
      );
    }

    var cameraButton = null;
    if (!this.props.showPeople) {
      cameraButton = (
        <View style={styles.fab}>
          <CameraButton eventInfo={this.props.eventInfo} diameter={cameraButtonDiameter} />
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
            {detailsView}
            {cameraButton}
          </View>
        </TouchableHighlight>
        {chatHeads}
      </View>
    );
  }
}

EventCard.propTypes = {
  /* Boolean indicating whether or not to show chatheads */
  showPeople: React.PropTypes.bool,
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
    people: React.PropTypes.arrayOf(ChatHead.propTypes.userInfo).isRequired
  }).isRequired,
};

const headerHeight = 200;
const cameraButtonDiameter = 60;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    elevation: 10
  },
  cardHeader: {
    flex: 1,
    height: headerHeight
  },
  chatHeads: {
    paddingTop: 8
  },
  title: {
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
  eventDetailUpcoming: {
    paddingTop: 7,
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    textAlign: "center",
    fontSize: 13,
    color: "#4b4b4b"
  },
  dateUpcoming: {
    fontSize: 30,
    paddingRight: 6,
    color: "#191919",
    paddingBottom: 8,
  },
  dateUpcomingMonth: {
    fontSize: 16,
    color: "#4b4b4b",
    paddingBottom: 8,
  },
  location: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    paddingTop: 5,
  },
  fab: {
    position: "absolute",
    right: 15,
    top: headerHeight - cameraButtonDiameter / 2
  }
});
