import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import {Ionicons} from "@exponent/vector-icons";
import {withNavigation} from "@exponent/ex-navigation";

@withNavigation
export default class PageFrame extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    if (this.props.navigator.getCurrentIndex() > 0) {
      this.props.navigator.pop();
    }
  }

  render() {
    overlayStyle = this.props.overlay ? styles.overlay : null;
    return (
      <View style={{flex: 1}}>
        <View style={[styles.titleBar, overlayStyle]}>
          <TouchableHighlight onPress={this.goBack} style={styles.backButton}>
            <Ionicons name="md-arrow-round-back" size={32} color="white" />
          </TouchableHighlight>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={{flex: 1}}>
          {this.props.children}
        </View>
      </View>
    );
  }
};

PageFrame.propTypes = {
  /* True if the frame should sit over the content */
  overlay: React.PropTypes.bool,
  /* The title to display in the title bar */
  title: React.PropTypes.string
};

var titleBarHeight = 60;
const styles = StyleSheet.create({
  titleBar: {
    height: titleBarHeight,
    paddingLeft: 10,
    backgroundColor: "#4b4b4b",
    flexDirection: "row",
    alignItems: "center",
    elevation: 10
  },
  overlay: {
    marginBottom: -titleBarHeight,
    backgroundColor: "transparent",
    elevation: 0, // Remove drop shadow
    zIndex: 1000 // Make sure overlay is on top of children
  },
  title: {
    color: "white",
    fontSize: 20,
    paddingLeft: 10
  },
  backButton: {
    padding: 10
  }
});
