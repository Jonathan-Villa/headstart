import { userActionType } from "../actions/Actiontypes/userActionTypes";

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.REGISTER_LOADING:
      return { registering: true };
    case userActionType.REGISTER_SUCCESS:
      return { registerSuccessful: true };
    case userActionType.REGISTER_ERROR:
      return { registering: false };

    default:
      return state;
  }
};

export { registerReducer };
