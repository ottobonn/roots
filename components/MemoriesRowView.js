import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import FlexibleImage from "./FlexibleImage";

export default class MemoriesRowView extends Component {
  render() {
    var memories = this.props.memories;
    return (
      <View style={[{flex: 1}, this.props.style]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          {
            this.props.memories.map((memory, index) => {
              return (
                <View style={styles.imageContainer} key={index}>
                  <FlexibleImage source={memory.image} />
                </View>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
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
