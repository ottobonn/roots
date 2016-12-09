import {
  createStore,
  combineReducers
} from "redux";
var cloneDeep = require("lodash.clonedeep");

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

const userReducer = function(userState = userData, action) {
  var newUser = cloneDeep(userState);
  if (action.type === "ADD_PHOTO") {
    newUser.memories.push(action.event);
  } else if (action.type === "REMOVE_PHOTO") {
    var index = newUser.memories.findIndex((memory) => {
      return memory.image.uri === action.event.image.uri;
    });
    if (index !== -1) {
      newUser.memories.splice(index, 1);
    }
  }
  return newUser;
};

const reducers = combineReducers({
  // events in the state are the ones the user has signed up for
  events: eventsReducer,
  // the `user` domain holds user metadata, like their name
  user: userReducer
});

const store = createStore(reducers);
export default store;
