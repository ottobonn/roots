import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from "@exponent/ex-navigation";
import {Ionicons} from "@exponent/vector-icons";
import Colors from "../constants/Colors.js";

export default class RootNavigation extends React.Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TabNavigation
          tabBarHeight={56}
          initialTab="home"
        >
          <TabNavigationItem
            id="home"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-globe", "Discover", isSelected)}>
            <StackNavigation initialRoute="discover" />
          </TabNavigationItem>

          <TabNavigationItem
            id="links"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-calendar", "Upcoming", isSelected)}>
            <StackNavigation initialRoute="events" />
          </TabNavigationItem>

          <TabNavigationItem
            id="settings"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-contacts", "Memories", isSelected)}>
            <StackNavigation initialRoute="memories" />
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }

  renderTab(iconName, tabTitle, isSelected) {
    var textStyle = [styles.tabTitleText];
    if (isSelected) {
      textStyle.push(styles.tabTitleTextSelected);
    }
    return (
      <View style={styles.tabContainer}>
        <Ionicons
          name={iconName}
          size={32}
          color={isSelected ? Colors.tabSelected : Colors.tabDefault}
        />
      <Text style={textStyle} numberOfLines={1}>
          {tabTitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  tabTitleText: {
    color: Colors.tabText
  },
  tabTitleTextSelected: {
    color: Colors.accent
  },
  selectedTab: {
    //backgroundColor: Colors.tabSelected,
  },
});
