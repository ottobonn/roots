import {
  createRouter,
} from "@exponent/ex-navigation";

import DiscoverScreen from "../screens/DiscoverScreen";
import DiscoverCategoryScreen from "../screens/DiscoverCategoryScreen";
import EventsScreen from "../screens/EventsScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import SearchScreen from "../screens/SearchScreen";

import RootNavigation from "./RootNavigation";

export default createRouter(() => ({
  discover: () => DiscoverScreen,
  discoverCategory: () => DiscoverCategoryScreen,
  events: () => EventsScreen,
  eventDetails: () => EventDetailScreen,
  memories: () => MemoriesScreen,
  rootNavigation: () => RootNavigation,
  search: () => SearchScreen
}));
