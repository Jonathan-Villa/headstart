import { userActionType } from "../actions/actiontypes/userActionTypes";

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.REGISTER_REQUEST:
      return { registering: true };
    case userActionType.REGISTER_SUCCESS:
      return { registerSuccessful: true };
    case userActionType.REGISTER_FAILURE:
      return { registerFailure: false };

    default:
      return state;
  }
};

export { registerReducer };
