import React from "react";
import {
  View,
  StyleSheet,
  Image
} from "react-native";

import DiscoverView from "../components/DiscoverView";
import PageFrame from "../components/PageFrame";

var categoryNames = ["Aid", "Arts", "Education", "Government", "Health", "Nature"];
// React is stupid and doesn't let me dynamically generate path names with require so hardcoding
var pathNames = [require("../static/images/categories/aid/category_pic.jpg"),
     require("../static/images/categories/arts/category_pic.jpg"),
     require("../static/images/categories/education/category_pic.jpg"),
     require("../static/images/categories/government/category_pic.jpg"),
     require("../static/images/categories/health/category_pic.jpg"),
     require("../static/images/categories/nature/category_pic.jpg")];
var categories = [];
for (var i = 0; i < 6; i++) {
  var category = {
    name: categoryNames[i],
    image: pathNames[i],
  };
  categories.push(category);
}

export default class DiscoverScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <PageFrame title="Discover" backButton={false} searchButton={true}>
          <DiscoverView categories={categories} />
        </PageFrame>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
