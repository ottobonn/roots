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
      return (<ChatHead userInfo={person} key={i} />);
    });
    var organizer = this.props.organizer;
    // Prepend organizer
    if (organizer) {
      elements.unshift(
        <ChatHead userInfo={organizer} key={"organizer"} organizer={true} disablePress={true} />
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
  organizer: ChatHead.propTypes.userInfo,
  attendees: React.PropTypes.arrayOf(ChatHead.propTypes.userInfo)
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    color: "#4b4b4b"
  }
});
