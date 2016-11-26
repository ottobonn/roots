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

@withNavigation
export default class DiscoverCategory extends Component {
  constructor(props) {
    super(props);
    this.showCategory = this.showCategory.bind(this);
  }

  showCategory() {
    console.log("showCategory " + this.props.id);
    this.props.navigator.push(Router.getRoute("discoverCategory", {
      categoryId: this.props.id
    }));
  }

  render() {
    return (
      <TouchableHighlight style={{flex: 1}} onPress={this.showCategory}>
        <View style={{flex: 1}}>
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
      </TouchableHighlight>
    );
  }
}

DiscoverCategory.propTypes = {
  image: React.PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
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
