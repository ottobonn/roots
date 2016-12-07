import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import dateFormat from "dateformat";

import TitleText from "./TitleText";
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
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.userInfo}>
            <Image style={styles.userImage} source={this.props.userInfo.image} />
            <TitleText style={styles.userName} bold={true}>{this.props.userInfo.name}</TitleText>
            {this.props.userInfo.bio &&
              <View>
                <BodyText style={styles.bio}>{this.props.userInfo.bio}</BodyText>
              </View>
            }
          </View>
          <View style={styles.content}>
            {
              monthObjects.map((monthObject) => {
                return this.renderMonth(monthObject);
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
};

MemoriesView.propTypes = {
  userInfo: ChatHead.propTypes.userInfo.isRequired
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 60 /* Clearance for floating chat button */
  },
  userInfo: {
    padding: 20,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    backgroundColor: "#eee",
    borderBottomWidth: 0.5,
    borderColor: "#ccc"
  },
  userName: {
    textAlign: "center",
    fontSize: 19
  },
  bio: {
    fontSize: 12,
    marginTop: 20
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  row: {
    padding: 20,
  },
});
