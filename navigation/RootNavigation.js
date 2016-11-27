import React from "react";
import {
  StyleSheet
} from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from "@exponent/ex-navigation";
import {
  FontAwesome,
} from "@exponent/vector-icons";
import Colors from "../constants/Colors.js";

export default class RootNavigation extends React.Component {
  render() {
    return (
      <TabNavigation
        tabBarHeight={56}
        initialTab="home">
        <TabNavigationItem
          id="home"
          renderIcon={isSelected => this._renderIcon("home", isSelected)}>
          <StackNavigation initialRoute="discover" />
        </TabNavigationItem>

        <TabNavigationItem
          id="links"
          renderIcon={isSelected => this._renderIcon("book", isSelected)}>
          <StackNavigation initialRoute="events" />
        </TabNavigationItem>

        <TabNavigationItem
          id="settings"
          renderIcon={isSelected => this._renderIcon("cog", isSelected)}>
          <StackNavigation initialRoute="memories" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
