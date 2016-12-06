import React from "react";

import PageFrame from "../components/PageFrame";
import ChatView from "../components/ChatView";

export default class ChatScreen extends React.Component {
  render() {
    var userInfo = this.props.route.params.userInfo;
    return (
      <PageFrame title={"Chat with " + userInfo.name}>
        <ChatView userInfo={userInfo} />
      </PageFrame>
    );
  }
};
