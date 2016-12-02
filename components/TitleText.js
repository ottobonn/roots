import React, {Component} from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import GlobalStyles from "../styles";

export default class TitleText extends Component {
  render() {
    return (
      <Text style={[GlobalStyles.titleFont, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}
