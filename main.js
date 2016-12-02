import Exponent from "exponent";
import React from "react";
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  NavigationProvider,
  StackNavigation,
} from "@exponent/ex-navigation";
import {Provider} from "react-redux";

import { 
  Components,
  Font,
} from 'exponent';

import Router from "./navigation/Router";
import store from "./store";

function cacheFonts(fonts) {
  return fonts.map(font => Exponent.Font.loadAsync(font));
}

class App extends React.Component {

  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.appIsReady) {
      return <Components.AppLoading />;
    }
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation id="root" initialRoute={Router.getRoute("rootNavigation")} />
          </NavigationProvider>

          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
        </View>
      </Provider>
    );
  }

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
        {OxygenRegular: require('./assets/fonts/Oxygen-Regular.ttf')},
    ]);

    this.setState({appIsReady: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 24
  }
});

Exponent.registerRootComponent(App);
