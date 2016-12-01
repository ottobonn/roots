import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView
} from "react-native";
import MemoriesCoverFlow from "./MemoriesCoverFlow"
import FlexibleImage from "./FlexibleImage"

export default class MemoriesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var dateFormat = require("dateformat");
    var months = [[],[],[],[],[],[],[],[],[],[],[],[]];
    var memories = this.props.userData.memories;
    //sort memories nested by month
    memories.sort(function(a,b){
      return new Date(b.eventDate) - new Date(a.eventDate);
    });
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(memories)
    };
    for (var i = 0; i < memories.length; i++) {
      months[12-(Number.parseInt(dateFormat(memories[i].eventDate, "mm"), 10))].push(memories[i]);
    }
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <MemoriesCoverFlow months = {months}/>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "column"
  },
  row: {
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  image: {
    flexDirection: "column",
    height: 100,
    backgroundColor: "black"
  },
});
