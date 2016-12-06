import React, {Component}from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import AppIntro from 'react-native-app-intro';
import BodyText from "./BodyText";

export default class Onboarding extends Component {
  render() {
    return (
      <AppIntro 
      	onDoneBtnClick={this.props.onDoneBtnClick} 
      	onSkipBtnClick={this.props.onDoneBtnClick}>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={10}><BodyText style={styles.text}>Page 1</BodyText></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><BodyText style={styles.text}>Page 2</BodyText></View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={8}><BodyText style={styles.text}>Page 3</BodyText></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><BodyText style={styles.text}>Page 4</BodyText></View>
        </View>
      </AppIntro>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});