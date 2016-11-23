import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  ListView,
} from "react-native";
import DiscoverCategory from "./DiscoverCategory";

export default class DiscoverView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.categories)
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) =>
              <DiscoverCategory
                name={rowData.name}
                image={rowData.image}
              />
          }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
  container: {
   
  }
});