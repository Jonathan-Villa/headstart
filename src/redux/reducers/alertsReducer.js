import { alertType } from "../actions/Actiontypes/alertTypes";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertType.SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case alertType.MESSAGE:
      return {
        type: "info",
        message: action.message,
      };
    case alertType.ERROR:
      return {
        type: "error",
        message: action.message
      };
    default:
      return state;
  }
};

export { alertReducer };
