import {
  createStore,
  combineReducers
} from "redux";

var defaultState = [
  {
    category: "nature",
    title: "Tree planting",
    date: "2017-01-03T12:50:01.791Z",
    description: "Help reset the clock on global warming by planting trees at Henry Coe Park. Bring your own trowels and plenty of water, as it will be a hot day!",
    location: "Henry Coe Park",
    image: require("./static/images/categories/nature/tree_planting.jpg"),
    organizer: {
      name: "Fenna Abraham",
      bio: "I’ve been a ranger at Henry Coe Park for the past 3 years. In that time, I’ve seen many trees die, but none ever planted, hence the motivation for reconstructing the park. I’m a mother of three and proud of it.",
      image: require("./static/images/people/organizers/fenna_abraham.jpg")
    },
    id: 0,
    people: [
      {
        name: "Sara Douglas",
        id: 1,
        image: require("./static/images/people/users/01_sara_douglas.jpg"),
      },
      {
        name: "Joann Brown",
        id: 5,
        image: require("./static/images/people/users/05_joann_brown.jpg"),
      },
      {
        name: "Marshall Ferguson",
        id: 9,
        image: require("./static/images/people/users/09_marshall_ferguson.jpg"),
      },
    ]
  }
];

const eventsReducer = function(state = defaultState, action) {
  if (action.type === "ADD_EVENT") {
    state.concat([action.event]);
  } else if (action.type === "REMOVE_EVENT") {
    // TODO
  }
  return state;
};

const userReducer = function(state, action) {
  return {
    name: "Travis"
  };
};

const reducers = combineReducers({
  // events in the state are the ones the user has signed up for
  events: eventsReducer,
  // the `user` domain holds user metadata, like their name
  user: userReducer
});

const store = createStore(reducers);
export default store;
