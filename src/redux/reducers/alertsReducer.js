import { alertType } from "../actions/actiontypes/alertTypes";

 const alertsReducer = (state = {}, action) => {
  switch (action.type) {
    case alertType.SUCCESS:
      return {
        type: "Successful request",
        payload: action.payload,
      };
    case alertType.ERROR:
      return {
        type: "ERROR",
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default alertsReducer