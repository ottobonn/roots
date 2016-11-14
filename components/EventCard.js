import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

/**
* Each EventCard has the following props:
* - title
* - des
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
          <Text style={styles.title}>
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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#eee",
    flex: 1,
    margin: 20,
    height: 300
  },
  cardHeader: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: Image.resizeMode.cover
  },
  title: {
    // marginTop: -10,
    color: "white",
    backgroundColor: "#333",
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    flex: 1
  },
  eventDetail: {
    flex: 1,
    flexDirection: "row"
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
    fontSize: 20
  }
});
