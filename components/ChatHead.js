import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";
import {withNavigation} from "@exponent/ex-navigation";
import Router from "../navigation/Router";

@withNavigation
export default class ChatHead extends Component {

  constructor(props) {
    super(props);
    this.showMemories = this.showMemories.bind(this);
  }

  showMemories() {
    this.props.navigator.push(Router.getRoute("otherMemories", {
      userInfo: this.props.userInfo
    }));
  }

  render() {
    var image = this.props.userInfo.image;
    // First-name basis
    var name = this.props.userInfo.name.split(" ")[0];
    var imageStyles = [styles.image];
    if (this.props.organizer) {
      imageStyles.push(styles.organizerImage);
    }
    var onPressAction = this.props.disablePress ? null : this.showMemories;
    return (
      <TouchableOpacity style={{flex: 1}} onPress={onPressAction}>
        <View style={styles.chatHead}>
          <Image
            style={imageStyles}
            source={image}
          />
          <BodyText style={styles.name}>
            {name}
          </BodyText>
        </View>
      </TouchableOpacity>
    );
  }
}

ChatHead.propTypes = {
  userInfo: React.PropTypes.shape({
    image: React.PropTypes.any.isRequired,
    name: React.PropTypes.string.isRequired,
    memories: React.PropTypes.arrayOf(React.PropTypes.shape({
      image: React.PropTypes.any.isRequired,
      eventLocation: React.PropTypes.string.isRequired,
      eventDate: React.PropTypes.string.isRequired
    }))
  }),
  disablePress: React.PropTypes.bool
};

const styles = StyleSheet.create({
  chatHead: {
    flex: 1,
    alignItems: "center",
    padding: 7,
    flexDirection: "column"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  organizerImage: {
    borderWidth: 3,
    borderColor: Colors.accent
  },
  name: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#4b4b4b"
  }
});
