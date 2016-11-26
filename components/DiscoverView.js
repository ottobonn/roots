import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import DiscoverCategory from "./DiscoverCategory";

export default class DiscoverView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    var categories = this.props.categories;
    for (var i = 0; i < categories.length; i += 2) {
      leftCategory = <DiscoverCategory
        name={categories[i].name}
        image={categories[i].image}
        id={categories[i].id}
        key={categories[i].id}
      />;
      rightCategory = (i+1 == categories.length) ? null :
      <DiscoverCategory
        name={categories[i+1].name}
        image={categories[i+1].image}
        id={categories[i+1].id}
        key={categories[i+1].id}
      />;
      rows.push(
        <View style={styles.row}>
          {/* Row container */}
          {leftCategory}
          {rightCategory}
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {rows}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "column"
  },
  row: {
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});
