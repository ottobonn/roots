import React, {Component} from "react";
import {
  View,
  Text
} from "react-native";

import PageFrame from "../components/PageFrame";

export default class DiscoverCategoryScreen extends Component {
  render() {
    return (
      <PageFrame title={`Discover category ${this.props.route.params.categoryId}`}>
        <Text>Event card list</Text>
      </PageFrame>
    );
  }
};
