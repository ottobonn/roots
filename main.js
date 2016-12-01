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

import Router from "./navigation/Router";
import store from "./store";

class App extends React.Component {
  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 24
  }
});

Exponent.registerRootComponent(App);
