import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import dateFormat from "dateformat";
import {MaterialIcons} from "@exponent/vector-icons";
import {connect} from "react-redux";
import {withNavigation} from "@exponent/ex-navigation";

import FlexibleImage from "./FlexibleImage";
import Colors from "../constants/Colors";

@withNavigation
class MemoryDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.deleteMemory(this.props.memory);
    if (this.props.navigator.getCurrentIndex() > 0) {
      this.props.navigator.pop();
    }
    toast("Deleted photo from Memories");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FlexibleImage source={this.props.memory.image} resizeMode="contain" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.dateText}>
            {dateFormat(new Date(this.props.memory.eventDate), "mmmm yyyy")}
          </Text>
          <Text style={styles.locationText}>
            {this.props.memory.eventLocation}
          </Text>
        </View>
        {this.props.memory.enableDelete &&
          <TouchableHighlight style={styles.deleteContainer} onPress={this.delete}>
            <MaterialIcons name="delete" size={25} color="white" />
          </TouchableHighlight>
        }
      </View>
    );
  }
};

MemoryDetailView.propTypes = {
  /* The memory object to display */
  memory: React.PropTypes.shape({
    /* The image for the memory, as returned by require("image-name") */
    image: React.PropTypes.any.isRequired,
    /* The date of the event, as an ISO string */
    eventDate: React.PropTypes.string.isRequired,
    /* The location of the event, in human-readable form */
    eventLocation: React.PropTypes.string.isRequired,
    /* Allow the user to delete this memory? */
    enableDelete: React.PropTypes.bool
  }).isRequired
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    deleteMemory: () => {
      dispatch({
        type: "REMOVE_PHOTO",
        event: ownProps.memory
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(MemoryDetailView);

const deleteButtonDiameter = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    backgroundColor: "#000000cc",
    padding: 10
  },
  dateText: {
    textAlign: "center",
    color: "white"
  },
  locationText: {
    textAlign: "center",
    color: "white"
  },
  deleteContainer: {
    width: deleteButtonDiameter,
    height: deleteButtonDiameter,
    borderRadius: deleteButtonDiameter / 2,
    backgroundColor: Colors.base,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
    bottom: 15
  }
});
