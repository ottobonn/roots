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
      <View style={{flex: 1, flexDirection: "row"}}>
          <Image
            style={styles.image}
            source={this.props.image}
            resizeMode={Image.resizeMode.contain} 
          />
       </View>
        <Text style={[GlobalStyles.titleFont, styles.name]}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    margin: 10,
    elevation: 10,
    height: 160,
    width: 160,
  },
  image: {
    flex: 1,
    height: 160,
    width: 160,
    resizeMode: "contain"
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
