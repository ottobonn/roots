import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { Ionicons } from "@exponent/vector-icons";

export default class PageFrame extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.titleBar}>
          <Ionicons name="md-arrow-round-back" size={32} color="white" />
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={{flex: 1}}>
          {this.props.content}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleBar: {
    height: 60,
    padding: 10,
    backgroundColor: "#4b4b4b",
    flexDirection: "row",
    alignItems: "center",
    elevation: 10
  },
  title: {
    color: "white",
    fontSize: 20,
    paddingLeft: 10
  },
  backButton: {
    color: "white",
    width: 50
  }
});
