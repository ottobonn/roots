import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import {Ionicons} from "@exponent/vector-icons";
import {withNavigation} from "@exponent/ex-navigation";

import GlobalStyles from "../styles";
import TitleText from "./TitleText";
import Router from "../navigation/Router";

@withNavigation
export default class PageFrame extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.gotoSearch = this.gotoSearch.bind(this);
  }

  goBack() {
    if (this.props.navigator.getCurrentIndex() > 0) {
      this.props.navigator.pop();
    }
  }

  gotoSearch() {
    this.props.navigator.push(Router.getRoute("search"));
  }

  render() {
    overlayStyle = this.props.overlay ? styles.overlay : null;
    backButton = this.props.backButton == null ? true : this.props.backButton;
    return (
      <View style={{flex: 1}}>
        <View style={[styles.titleBar, overlayStyle]}>
          <View style={styles.leftContainer}>
            {backButton &&
              <TouchableHighlight onPress={this.goBack} style={styles.backButton}>
                <Ionicons name="md-arrow-round-back" size={32} color="white" />
              </TouchableHighlight> }
            <TitleText style={styles.title} textLines={1}>{this.props.title}</TitleText>
          </View>
          <View style={styles.rightContainer}>
            {this.props.searchButton &&
              <TouchableHighlight onPress={this.gotoSearch} style={styles.search}>
                <Ionicons name="md-search" size={32} color="white" />
              </TouchableHighlight> }
            </View>
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
  title: React.PropTypes.string,
  /* Boolean, whether or not to display back button */
  backButton: React.PropTypes.bool,
  /* Boolean, whether or not to display search button */
  searchButton: React.PropTypes.bool,
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
  leftContainer: {
    alignItems: "center",
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backButton: {
    padding: 10
  },
  search: {
    paddingRight: 20,
  }
});
