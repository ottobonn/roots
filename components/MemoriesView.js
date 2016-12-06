import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import dateFormat from "dateformat";

import BodyText from "./BodyText";
import MemoriesRowView from "./MemoriesRowView";
import FlexibleImage from "./FlexibleImage";
import ChatHead from "./ChatHead";

const addMemory = function(memoryMap, memory) {
  var date = new Date(memory.eventDate);
  var year = date.getFullYear();
  var month = date.getMonth();
  if (!memoryMap[year]) {
    memoryMap[year] = {};
  }
  if (!memoryMap[year][month]) {
    memoryMap[year][month] = [];
  }
  memoryMap[year][month].push(memory);
};

const sortIntDescending = function(a, b) {
  return b - a;
};

export default class MemoriesView extends Component {
  renderMonth(monthObject) {
    if (monthObject.memories.length > 0) {
      var date = new Date();
      date.setYear(monthObject.year);
      date.setMonth(monthObject.month);
      var title = dateFormat(date, "mmmm yyyy");
      return (
        <MemoriesRowView
          title={title}
          memories={monthObject.memories}
          style={styles.row}
          key={title}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    var memories = [].concat(this.props.userInfo.memories);

    var memoryMap = {};
    memories.forEach((memory) => {
      addMemory(memoryMap, memory);
    });

    var yearKeys = Object.keys(memoryMap);
    yearKeys.sort(sortIntDescending);
    var monthObjects = [];
    yearKeys.forEach((yearKey) => {
      var yearData = memoryMap[yearKey];
      var monthKeys = Object.keys(yearData);
      monthKeys.sort(sortIntDescending);
      monthKeys.forEach((monthKey) => {
        var memories = yearData[monthKey];
        monthObjects.push({
          year: yearKey,
          month: monthKey,
          memories
        });
      });
    });

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.userInfo}>
          <Image style={styles.userImage} source={this.props.userInfo.image} />
          <BodyText style={styles.userName} bold={true}>{this.props.userInfo.name}</BodyText>
        </View>
        {
          monthObjects.map((monthObject) => {
            return this.renderMonth(monthObject);
          })
        }
      </ScrollView>
    );
  }
};

MemoriesView.propTypes = {
  userInfo: ChatHead.propTypes.userInfo.isRequired
};

const styles = StyleSheet.create({
  userInfo: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  userName: {
    textAlign: "center",
    fontSize: 19
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  row: {
    padding: 20,
  }
});
