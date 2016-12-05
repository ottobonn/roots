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

class OtherMemoriesScreen extends React.Component {
  render(){
    var otherUserData = {
      image: this.props.image,
      name: this.props.name,
      memories: this.props.memories,
    };
    return (
      <PageFrame title="Memories" backButton={true} searchButton={false}>
        <MemoriesView userData={otherUserData} />
      </PageFrame>
    );
  }
}

const mapStoreToProps = function(store) {
  return {
    memories: store.user.memories
  };
};

export default connect(mapStoreToProps)(OtherMemoriesScreen);
