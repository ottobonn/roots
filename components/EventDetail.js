import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import Button from "react-native-button";
import ChatHeads from "./ChatHeads";

export default class EventDetail extends Component {
  constructor() {
    super();
    this.state = {
      signupEnabled: true
    };
  }

  signup() {
    this.setState({signupEnabled: false});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.header}>
          {/* Header */}
            <Image source={this.props.image} style={styles.bannerImage} />
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.body}>
            <View>
              <Text>{this.props.date}</Text>
              <Text>{this.props.location}</Text>
            </View>
            <View>
              {/* Event details */}
              <Text style={styles.eventDetail}>{this.props.description}</Text>
            </View>
            <View>
              {/* Organizer details */}
              <Text style={styles.organizerName}>{this.props.organizer.name}</Text>
              <Text>{this.props.organizer.bio}</Text>
            </View>
          </View>
        </ScrollView>
        {
        this.state.signupEnabled ?
          <View style={styles.buttonBar}>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.button}
              onPress={() => this.signup()}
            >
              Sign up
            </Button>
          </View>
        :
        <View style={styles.buttonBar}>
          <Text>Who's going:</Text>
          <ChatHeads people={this.props.people} />
        </View>
        }
      </View>
    );
  }
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
  bannerImage: {
    flex: 1,
    resizeMode: "cover"
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
  eventDetail: {
    fontSize: 18
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
  }
});
