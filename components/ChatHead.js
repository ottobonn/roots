import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";
import {withNavigation} from "@exponent/ex-navigation";
import Router from "../navigation/Router";

@withNavigation
export default class ChatHead extends Component {

  constructor(props) {
    super(props);
    this.showMemories = this.showMemories.bind(this);
  }

  showMemories() {
    this.props.navigator.push(Router.getRoute("otherMemories", {
      image: this.props.image,
      name: this.props.name,
    }));
  }

  render() {
    var image = this.props.image;
    // First-name basis
    var name = this.props.name.split(" ")[0];
    var imageStyles = [styles.image];
    if (this.props.organizer) {
      imageStyles.push(styles.organizerImage);
    }
    return (
      <TouchableHighlight style={{flex: 1}} onPress={this.showMemories}>
        <View style={styles.chatHead}>
          <Image
            style={imageStyles}
            source={image}
          />
          <BodyText style={styles.name}>
            {name}
          </BodyText>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  chatHead: {
    flex: 1,
    alignItems: "center",
    padding: 7,
    flexDirection: "column"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  organizerImage: {
    borderWidth: 3,
    borderColor: Colors.accent
  },
  name: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#4b4b4b"
  }
});
