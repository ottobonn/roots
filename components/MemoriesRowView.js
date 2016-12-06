import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from "react-native";
import {withNavigation} from "@exponent/ex-navigation";
import Router from "../navigation/Router";

import BodyText from "./BodyText";
import FlexibleImage from "./FlexibleImage";

@withNavigation
export default class MemoriesRowView extends Component {
  constructor(props) {
    super(props);
    this.showMemoryDetails = this.showMemoryDetails.bind(this);
  }

  showMemoryDetails(memory) {
    this.props.navigator.push(Router.getRoute("memoryDetails", {
      memory
    }));
  }

  renderMemory(memory, key) {
    return (
      <TouchableHighlight
        key={key}
        onPress={() => this.showMemoryDetails(memory)}
      >
        <View style={styles.imageContainer}>
          <FlexibleImage source={memory.image} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    var memories = this.props.memories;
    return (
      <View style={[{flex: 1}, this.props.style]}>
        <BodyText style={styles.title}>{this.props.title}</BodyText>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {
            this.props.memories.map((memory, index) => {
              return this.renderMemory(memory, index);
            })
          }
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
  },
  scrollView: {
    flex: 1,
    height: 150,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 1,
    width: 200,
    marginLeft: 2,
    marginRight: 2
  }
});
