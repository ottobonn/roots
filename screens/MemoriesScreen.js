import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";
import BodyText from "../components/BodyText";

class MemoriesScreen extends React.Component {
  render(){
    let memoriesView = <BodyText style={styles.emptyMessage}>{"Sign up for an event to share memories of it."}</BodyText>;
    if (this.props.userData.memories.length > 0) {
      memoriesView = <MemoriesView userInfo={this.props.userData} />;
    }
    return (
      <PageFrame title="Memories" backButton={false}>
        {memoriesView}
      </PageFrame>
    );
  }
}

const mapStoreToProps = function(store) {
  return {
    userData: store.user
  };
};

const styles = StyleSheet.create({
  emptyMessage: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export default connect(mapStoreToProps)(MemoriesScreen);
