import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";

export default class FlexibleImage extends Component {
  render() {
    var imageWidth, imageHeight;
    return (
      <View style={styles.imageContainer} onLayout={(event) => {
        var {_, _, imageWidth, imageHeight} = event.nativeEvent.layout;
      }} >
        <Image
          style={[styles.image, {width: imageWidth, height: imageHeight}]}
          source={this.props.source}
        >
          {this.props.children}
        </Image>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
    // Image dimensions are set by onLayout callback of imageContainer
  },
});
