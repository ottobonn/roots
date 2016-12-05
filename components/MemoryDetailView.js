import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";
import dateFormat from "dateformat";

import FlexibleImage from "./FlexibleImage";

export default class MemoryDetailView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FlexibleImage source={this.props.memory.image} resizeMode="contain" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.dateText}>
            {dateFormat(new Date(this.props.memory.eventDate), "mmmm yyyy")}
          </Text>
          <Text style={styles.locationText}>
            {this.props.memory.eventLocation}
          </Text>
        </View>
      </View>
    );
  }
};

MemoryDetailView.propTypes = {
  /* The memory object to display */
  memory: React.PropTypes.shape({
    /* The image for the memory, as returned by require("image-name") */
    image: React.PropTypes.any.isRequired,
    /* The date of the event, as an ISO string */
    eventDate: React.PropTypes.string.isRequired,
    /* The location of the event, in human-readable form */
    eventLocation: React.PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: "#000000cc",
    padding: 10
  },
  dateText: {
    textAlign: "center",
    color: "white"
  },
  locationText: {
    textAlign: "center",
    color: "white"
  }
});
