import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";
import Colors from "../constants/Colors";

export default class ChatHead extends Component {
  render() {
    var image = this.props.image;
    // First-name basis
    var name = this.props.name.split(" ")[0];
    if (this.props.organizer) {
      name += "\n(organizer)";
    }
    var imageStyles = [styles.image];
    if (this.props.organizer) {
      imageStyles.push(styles.organizerImage);
    }
    return (
      <View style={styles.chatHead}>
        <Image
          style={imageStyles}
          source={image}
        />
        <Text style={styles.name}>
          {name}
        </Text>
      </View>
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
    borderWidth: 5,
    borderColor: Colors.accent
  },
  name: {
    flex: 1,
    textAlign: "center"
  }
});
