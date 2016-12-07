import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem
} from "@exponent/ex-navigation";
import {Ionicons} from "@exponent/vector-icons";

import Colors from "../constants/Colors.js";
import BodyText from "../components/BodyText";

export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(switchTab) {
    switchTab();
    requestIdleCallback(() => {
      this.props.navigation.performAction(({stacks}) => {
        stacks("discover").popToTop();
      });
    });
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <TabNavigation
          tabBarHeight={56}
          initialTab="discover"
        >
          <TabNavigationItem
            id="discover"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-globe", "Discover", isSelected)}
            onPress={this.onPress}
          >
            <StackNavigation id="discover" navigatorUID="discover" initialRoute="discover" />
          </TabNavigationItem>

          <TabNavigationItem
            id="upcoming"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-calendar", "Upcoming", isSelected)}
            onPress={this.onPress}
          >
            <StackNavigation id="upcoming" initialRoute="events" />
          </TabNavigationItem>

          <TabNavigationItem
            id="memories"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => this.renderTab("md-contacts", "Memories", isSelected)}
            onPress={this.onPress}
          >
            <StackNavigation id="memories" initialRoute="memories" />
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
      <BodyText style={textStyle} numberOfLines={1}>
          {tabTitle}
        </BodyText>
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
