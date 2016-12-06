import React from "react";
import {GiftedChat} from "react-native-gifted-chat";

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hi, Travis!",
          createdAt: new Date(),
          user: {
            name: this.props.userInfo.name
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
};
