import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import Exponent from "exponent";
import Menu, {MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import {MaterialIcons} from "@exponent/vector-icons";
import {connect} from "react-redux";

import TitleText from "./TitleText";
import toast from "../util/toast";
import Colors from "../constants/Colors";

class CameraButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  async pickImage() {
    let result = await Exponent.ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled){
      this.props.addMemory(result.uri);
    }
  }

  async takePhoto() {
    // TODO use the camera
  }

  onSelect(selection) {
    if (selection === "camera") {
      this.takePhoto();
    } else if (selection === "gallery") {
      this.pickImage();
    }
  }

  render() {
    let diameter = this.props.diameter;
    let sizeStyle = {
      height: diameter,
      width: diameter,
      borderRadius: diameter / 2,
    };
    return(
      <Menu onSelect={this.onSelect} style={[styles.menuWrapper, sizeStyle]}>
        <MenuTrigger style={[styles.cameraButton, sizeStyle]}>
          <View>
            <MaterialIcons name="add-a-photo" size={25} color="white" />
          </View>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption value="camera" style={styles.menuOption}>
            <MaterialIcons name="photo-camera" size={25} style={styles.menuOptionIcon} />
            <TitleText style={styles.menuOptionText}>Camera</TitleText>
          </MenuOption>
          <MenuOption value="gallery" style={styles.menuOption}>
            <MaterialIcons name="photo-library" size={25} style={styles.menuOptionIcon} />
            <TitleText style={styles.menuOptionText}>Gallery</TitleText>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
};

CameraButton.propTypes = {
  eventInfo: React.PropTypes.shape({
    /* Event title */
    title: React.PropTypes.string.isRequired,
    /* The human-formatted date string to be displayed for the event */
    date: React.PropTypes.string.isRequired,
    /* The human-formatted location string to be displayed for the event */
    location: React.PropTypes.string.isRequired
  }).isRequired,
  diameter: React.PropTypes.number.isRequired
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    addMemory: (imageURI) => {
      dispatch({
        type: "ADD_PHOTO",
        event: {
          eventName: ownProps.eventInfo.title,
          eventDate: ownProps.eventInfo.date,
          eventLocation: ownProps.eventInfo.location,
          image: {uri: imageURI}
        }
      });
      toast("Shared photo to Memories");
    }
  };
};

export default connect(null, mapDispatchToProps)(CameraButton);

const styles = StyleSheet.create({
  menuWrapper: {
    elevation: 5
  },
  cameraButton: {
    backgroundColor: Colors.fab,
    justifyContent: "center",
    alignItems: "center"
  },
  menuOption: {
    padding: 30,
    flexDirection: "row"
  },
  menuOptionText: {
    fontSize: 20
  },
  menuOptionIcon: {
    marginRight: 10
  }
});
