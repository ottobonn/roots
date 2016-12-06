import normalizedEvents from "./events-normalized";
import normalizedUsers from "./users-normalized";

const findUser = function(id) {
  return normalizedUsers.find((user) => {
    return user.id === id;
  });
};

export default normalizedEvents.map((event) => {
  var people = [].concat(event.people);
  event.people = people.map((id) => {
    return findUser(id);
  });
  return event;
});
