import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";

import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";

export default class OtherMemoriesScreen extends React.Component {
  render(){
    return (
      <PageFrame title="Memories" backButton={true} searchButton={false}>
        <MemoriesView userInfo={this.props.route.params.userInfo} />
      </PageFrame>
    );
  }
};

OtherMemoriesScreen.propTypes = {
  userInfo: ChatHead.propTypes.userInfo.isRequired
};
