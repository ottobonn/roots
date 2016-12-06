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
import Onboarding from "./components/Onboarding";

function cacheFonts(fonts) {
  return fonts.map(font => Exponent.Font.loadAsync(font));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      onboardingComplete: false,
    };
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  handleDone = () => {
    console.log("done)");
    this.setState({onboardingComplete: true});
  }

  render() {
    if (!this.state.appIsReady) {
      return <Components.AppLoading />;
    } else if (this.state.onboardingComplete) {
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
    } else {
      return (
        <Onboarding 
          onDoneBtnClick={this.handleDone}
        />
      );
    }
  }

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      {OxygenRegular: require('./assets/fonts/Oxygen-Regular.ttf')},
      {OxygenBold: require('./assets/fonts/Oxygen-Bold.ttf')},
      {OxygenLight: require('./assets/fonts/Oxygen-Light.ttf')},
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
