import React, {Component} from "react";
import {
  View,
  Text,
  Image
} from "react-native";

import EventListView from '../components/EventListView';
import SearchBar from 'react-native-searchbar';
import events from "../static/content/events.js";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 70 }}>
          <EventListView 
            events={this.state.results} 
          />
        </View>
      <SearchBar
        ref={(ref) => this.searchBar = ref}
        data={events}
        hideBack={true}
        handleResults={this._handleResults}
        placeholder={"Search for events"}
        showOnLoad
      />
      </View>
    );
  }
}