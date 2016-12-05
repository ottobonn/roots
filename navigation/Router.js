import {
  createRouter,
} from "@exponent/ex-navigation";

import DiscoverScreen from "../screens/DiscoverScreen";
import DiscoverCategoryScreen from "../screens/DiscoverCategoryScreen";
import EventsScreen from "../screens/EventsScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import OtherMemoriesScreen from "../screens/OtherMemoriesScreen";
import SearchScreen from "../screens/SearchScreen";
import MemoryDetailScreen from "../screens/MemoryDetailScreen";

import RootNavigation from "./RootNavigation";

export default createRouter(() => ({
  discover: () => DiscoverScreen,
  discoverCategory: () => DiscoverCategoryScreen,
  events: () => EventsScreen,
  eventDetails: () => EventDetailScreen,
  memories: () => MemoriesScreen,
  otherMemories: () => OtherMemoriesScreen,
  rootNavigation: () => RootNavigation,
  search: () => SearchScreen,
  memoryDetails: () => MemoryDetailScreen
}));
