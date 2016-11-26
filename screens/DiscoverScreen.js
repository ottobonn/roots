import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import DiscoverView from "../components/DiscoverView";
import PageFrame from "../components/PageFrame";

var nature = {
  name: "Nature",
  image: require("../static/images/nature-crop.jpg"),
};

var categories = [];
for (var i = 0; i < 6; i++) {
  categories.push(nature);
}

export default class DiscoverScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <PageFrame title="Discover">
          <DiscoverView categories={categories} />
        </PageFrame>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
