import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {withNavigation} from "@exponent/ex-navigation";
import PageFrame from "../components/PageFrame";
import Search from "../components/Search";
import events from "../static/content/events.js";

@withNavigation
export default class DiscoverCategoryScreen extends Component {
  render() {
    return (
      <PageFrame title={"Search"}>
        <Search />
      </PageFrame>
    );
  }
};