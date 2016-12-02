import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import ChatHead from "./ChatHead";
import BodyText from "./BodyText";

/*
Example usage:
<ChatHeads attendees={[
  {
    name: "Travis",
    image: require("../static/images/travis.jpg")
  },
  {
    name: "Guhan",
    image: require("../static/images/guhan.jpg")
  },
  ...
]} />
*/
export default class ChatHeads extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Add attendees
    var elements = this.props.attendees.map((person, i) => {
      return (<ChatHead name={person.name} image={person.image} key={i} />);
    });
    var organizer = this.props.organizer;
    // Prepend organizer
    if (organizer) {
      elements.unshift(
        <ChatHead name={organizer.name} image={organizer.image} key={"organizer"} organizer={true} />
      );
    }
    // Configure title
    var titleText = this.props.title ?
      <BodyText style={styles.title}>{this.props.title}</BodyText>
      : null;
    return (
      <View>
        {titleText}
        <ScrollView horizontal={true}>
          {elements}
        </ScrollView>
      </View>
    );
  }
};

ChatHeads.propTypes = {
  title: React.PropTypes.string,
  organizer: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.number.isRequired
  }),
  attendees: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.number.isRequired
  }))
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    color: "#4b4b4b"
  }
});
