import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

import GlobalStyles from "../styles";
import Router from "../navigation/Router";
import {withNavigation} from "@exponent/ex-navigation";
import FlexibleImage from "./FlexibleImage";
import TitleText from "./TitleText";

@withNavigation
export default class DiscoverCategory extends Component {
  constructor(props) {
    super(props);
    this.showCategory = this.showCategory.bind(this);
  }

  showCategory() {
    this.props.navigator.push(Router.getRoute("discoverCategory", {
      categoryId: this.props.id,
      name: this.props.name
    }));
  }

  render() {
    return (
      <TouchableHighlight style={{flex: 1}} onPress={this.showCategory}>
        <View style={{flex: 1}}>
          <FlexibleImage source={this.props.image} />
          <TitleText style={styles.name}>
            {this.props.name}
          </TitleText>
        </View>
      </TouchableHighlight>
    );
  }
}

DiscoverCategory.propTypes = {
  image: React.PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
