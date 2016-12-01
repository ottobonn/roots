import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import dateFormat from "dateformat";

import MemoriesRowView from "./MemoriesRowView";
import FlexibleImage from "./FlexibleImage";

export default class MemoriesView extends Component {
  renderMonth(monthIndex, monthData) {
    var date = new Date();
    date.setMonth(monthIndex);
    var monthName = dateFormat(date, "mmmm");
    return (
      <MemoriesRowView title={monthName} memories={monthData} style={styles.row} key={monthName} />
    );
  }

  render() {
    var months = [[],[],[],[],[],[],[],[],[],[],[],[]];
    var memories = [].concat(this.props.userData.memories);
    memories.sort((memA, memB) => {
      return new Date(memB.eventDate) - new Date(memA.eventDate);
    });
    memories.forEach((memory) => {
      months[(new Date(memory.eventDate)).getMonth()].push(memory);
    });
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.userInfo}>
          <Image style={styles.userImage} source={this.props.userData.image} />
          <Text style={styles.userName}>{this.props.userData.name}</Text>
        </View>
        {
          months.map((monthData, monthIndex) => {
            if (monthData.length > 0) {
              return this.renderMonth(monthIndex, monthData);
            }
          })
        }
      </ScrollView>
    );
  }
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
    fontWeight: "bold",
    fontSize: 19
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  row: {
    marginTop: 20
  }
});
