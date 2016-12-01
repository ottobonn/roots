import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";
import {connect} from "react-redux";

import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";

class MemoriesScreen extends React.Component {
  render(){
    return (
      <PageFrame title="Memories" backButton={false} searchButton={false}>
        <MemoriesView userData={this.props.userData} />
      </PageFrame>
    );
  }
}

const mapStoreToProps = function(store) {
  return {
    userData: store.user
  };
};

export default connect(mapStoreToProps)(MemoriesScreen);
