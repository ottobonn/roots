import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image, 
  TouchableOpacity
} from "react-native";
import {Ionicons} from "@exponent/vector-icons";

import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";

export default class OtherMemoriesScreen extends React.Component {
  render(){
    return (
      <PageFrame title="Memories" backButton={true} searchButton={false}>
        <MemoriesView userInfo={this.props.route.params.userInfo} />
        <View style={styles.rightJustify}>
          <TouchableOpacity style={styles.chatButton} onPress={this._pickImage}>
            <Ionicons name="md-chatboxes" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </PageFrame>
    );
  }
};

OtherMemoriesScreen.propTypes = {
  userInfo: ChatHead.propTypes.userInfo.isRequired
};

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: "#970E37",
    height: 45, 
    width: 45,
    borderRadius: 25,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  rightJustify: {
    position: 'absolute', 
    bottom:20,
    right: 20,
  }
});
