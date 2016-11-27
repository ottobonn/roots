import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import ChatHead from "./ChatHead";

/*
Example usage:
<ChatHeadListView people={[
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
    var elements = this.props.people.map((person, i) => {
      return (<ChatHead name={person.name} image={person.image} key={i} />);
    });
    var titleText = this.props.title ?
      <Text style={styles.title}>{this.props.title}</Text>
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
  title: React.PropTypes.string
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 7
  }
});
