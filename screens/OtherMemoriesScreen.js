import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import {MaterialIcons} from "@exponent/vector-icons";
import {withNavigation} from "@exponent/ex-navigation";

import Router from "../navigation/Router";
import PageFrame from "../components/PageFrame";
import MemoriesView from "../components/MemoriesView";
import ChatHead from "../components/ChatHead";
import Colors from "../constants/Colors";

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
        <TouchableHighlight style={styles.fab} onPress={this.openChat}>
          <MaterialIcons name="chat" size={25} color="white" />
        </TouchableHighlight>
      </PageFrame>
    );
  }
};

const fabDiameter = 60;
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 15,
    bottom: 15,
    height: fabDiameter,
    width: fabDiameter,
    borderRadius: fabDiameter / 2,
    backgroundColor: Colors.fab,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  }
});
