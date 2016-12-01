import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import ChatHead from "./ChatHead";
import FlexibleImage from "./FlexibleImage"

export default class MemoriesCoverFlow extends Component {
  constructor(props) {
    super(props);
  }

  renderMonth(month) {
    var dateFormat = require("dateformat");
    return month.map((memory, j) => {
      return (
        <Text key={j}>
          {dateFormat(memory.eventDate, "mmmm dd")}
        </Text>
      );
    });
  }

  render() {
    var months = this.props.months;
    monthTitles = ["January","February","March","April","May","June","July","August","September","October","November","December",]
    return (
      <View>
        {months.map((month, i) => {
          if(month.length > 0) {
            return (
              <View key={i}>
                <Text style={styles.monthText}>{monthTitles[11-i]}</Text>
                <ScrollView horizontal={true} key={i}>
                  {this.renderMonth(month)}
                </ScrollView>
              </View>
            );
          }
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 100
  },
  monthText: {
    fontWeight: "bold",
    textAlign: "center"
  }
});