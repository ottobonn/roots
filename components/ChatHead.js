import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

export default class ChatHead extends Component {
  render() {
    var image = this.props.image;
    var name = this.props.name;
    return (
      <View style={styles.chatHead}>
        <Image
          style={styles.image}
          source={image}
        />
        <Text style={styles.text}>
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
  name: {
    flex: 1,
    textAlign: "center"
  }
});
