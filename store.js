import {
  createStore,
  combineReducers
} from "redux";

const findEventById = function(events, id) {
  return events.find((event) => {
    return event.id === id;
  });
};

const eventsReducer = function(eventsState = [], action) {
  var newState = [].concat(eventsState);
  if (action.type === "ADD_EVENT") {
    newState.push(action.event);
  } else if (action.type === "REMOVE_EVENT") {
    var index = findEventById(eventsState, action.event.id);
    if (index !== undefined) {
      newState.splice(index, 1);
    }
  }
  return newState;
};

const userReducer = function(state, action) {
  return {};
};

const reducers = combineReducers({
  // events in the state are the ones the user has signed up for
  events: eventsReducer,
  // the `user` domain holds user metadata, like their name
  user: userReducer
});

const store = createStore(reducers);
export default store;
