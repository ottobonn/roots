import {
  createStore,
  combineReducers
} from "redux";

const findEventById = function(events, id) {
  return events.findIndex((event) => {
    return event.id === id;
  });
};

const eventsReducer = function(eventsState = [], action) {
  var newState = [].concat(eventsState);
  if (action.type === "ADD_EVENT") {
    newState.push(action.event);
  } else if (action.type === "REMOVE_EVENT") {
    var index = findEventById(eventsState, action.event.id);
    if (index !== -1) {
      newState.splice(index, 1);
    }
  } 
  return newState;
};

const randomDate = function(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const userData = {
  name: "Travis",
  image: require("./static/images/travis.jpg"),
  memories: []
};

// for (var i = 0; i < 50; i++) {
//   var memory = {
//   	eventName: "Tree planting",
//   	eventDate: randomDate(new Date(2016, 0, 10), new Date(2016, 11, 10)).toISOString(),
//     eventLocation: "Henry Coe Park",
//   	image: require("./static/images/memories/01.jpg"),
//   };
//   userData.memories.push(memory);
// }

const userReducer = function(userState = [], action) {
  var newState = [].concat(userState);
  if (action.type == "ADD_PHOTO") {
    userData.memories.push(action.event);
  }
  return userData;
};

const reducers = combineReducers({
  // events in the state are the ones the user has signed up for
  events: eventsReducer,
  // the `user` domain holds user metadata, like their name
  user: userReducer
});

const store = createStore(reducers);
export default store;
