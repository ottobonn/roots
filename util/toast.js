import Toast from "react-native-root-toast";

export default toast = function(message) {
  Toast.show(message, {
    position: -70
  });
};
