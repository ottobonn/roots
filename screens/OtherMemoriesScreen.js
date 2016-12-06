import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import {Ionicons} from "@exponent/vector-icons";
import {withNavigation} from "@exponent/ex-navigation";

import Router from "../navigation/Router";
import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";

@withNavigation
export default class OtherMemoriesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.openChat = this.openChat.bind(this);
  }

  openChat() {
    this.props.navigator.push(Router.getRoute("chat", {
      userInfo: this.props.route.params.userInfo
    }));
  }

  render(){
    return (
      <PageFrame title="Memories" backButton={true} searchButton={false}>
        <MemoriesView userInfo={this.props.route.params.userInfo} />
        <View style={styles.rightJustify}>
          <TouchableOpacity style={styles.chatButton} onPress={this.openChat}>
            <Ionicons name="md-chatboxes" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </PageFrame>
    );
  }
};

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: "#970E37",
    height: 45,
    width: 45,
    borderRadius: 25,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  rightJustify: {
    position: "absolute",
    bottom:20,
    right: 20
  }
});
