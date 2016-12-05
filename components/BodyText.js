import React, {Component} from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import GlobalStyles from "../styles";

export default class BodyText extends Component {
  render() {
    return (
      <Text style={[GlobalStyles.bodyFont, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}
