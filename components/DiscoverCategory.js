import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

import GlobalStyles from "../styles";

export default class DiscoverCategory extends Component {
  render() {
    return (
      <View style={styles.category}>
        <View style={{flex: 1}}>
          <Image
            style={styles.image}
            source={this.props.image}
          />
        </View>
        <Text style={[GlobalStyles.titleFont, styles.name]}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

DiscoverCategory.propTypes = {
  image: React.PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  category: {
    flex: 1
  },
  image: {
    flex: 1,
    height: 0 /* Hack to trigger image resize to container height */
  },
  name: {
    color: "white",
    backgroundColor: "#333c",
    fontSize: 16,
    padding: 5,
    textAlign: "center",
    /* Position at bottom and fill width */
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
});
