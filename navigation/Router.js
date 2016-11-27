import {
  createRouter,
} from "@exponent/ex-navigation";

import DiscoverScreen from "../screens/DiscoverScreen";
import EventsScreen from "../screens/EventsScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import DiscoverCategoryScreen from "../screens/DiscoverCategoryScreen";

import RootNavigation from "./RootNavigation";

export default createRouter(() => ({
  discover: () => DiscoverScreen,
  discoverCategory: () => DiscoverCategoryScreen,
  events: () => EventsScreen,
  eventDetails: () => EventDetailScreen,
  memories: () => MemoriesScreen,
  rootNavigation: () => RootNavigation
}));
