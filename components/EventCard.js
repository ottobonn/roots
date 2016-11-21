import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

import GlobalStyles from "../styles";

/**
Example use:
<EventCard
  title="Tree Planting"
  image={require("./static/images/placeholder.jpg")}
  date="16 Nov 2016"
  location="Henry Coe Park"
/>
*/
export default class EventCard extends Component {
  render() {
    return (
      <View style={styles.card}>

        <View style={styles.cardHeader}>
          <View style={{flex: 1, flexDirection: "row"}}>
            <Image
              style={styles.image}
              source={this.props.image}
            />
          </View>
          <Text style={[GlobalStyles.titleFont, styles.title]}>
            {this.props.title}
          </Text>
        </View>

        <View style={styles.eventDetail}>
          <Text style={[styles.detailText, styles.date]}>
            {this.props.date}
          </Text>
          <Text style={[styles.detailText, styles.location]}>
            {this.props.location}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    height: 250,
    backgroundColor: "black",
    elevation: 10
  },
  cardHeader: {
    flex: 5
  },
  image: {
    flex: 1,
    width: 1 /* Hack? Required to get image to resize to container. */
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
  }
});
