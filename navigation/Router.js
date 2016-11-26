import {
  createRouter,
} from "@exponent/ex-navigation";

import DiscoverScreen from "../screens/DiscoverScreen";
import EventsScreen from "../screens/EventsScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import RootNavigation from "./RootNavigation";

export default createRouter(() => ({
  discover: () => DiscoverScreen,
  events: () => EventsScreen,
  memories: () => MemoriesScreen,
  rootNavigation: () => RootNavigation
}));
