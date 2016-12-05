import React, {Component} from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import GlobalStyles from "../styles";

export default class BodyText extends Component {
  render() {
  	var font = GlobalStyles.bodyFont;
  	if (this.props.bold) {
  		font = GlobalStyles.boldFont;
  	} else if (this.props.light) {
  		font = GlobalStyles.lightFont;
  	}
  	var styles = [font, this.props.style];
    return (
        <Text style={styles}>
        	{this.props.children}
      	</Text>
    );
  }
}

BodyText.propTypes = {
	/* Boolean indicating whether or not to show bold font */
  	bold: React.PropTypes.bool,
  	/* Boolean indicating whether or not to show light font */
  	light: React.PropTypes.bool,
}
