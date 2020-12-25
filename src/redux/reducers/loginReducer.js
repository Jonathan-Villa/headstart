import { userActionType } from "../actions/Actiontypes";


const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.LOGIN_LOADING:
      return { isLoggingInLoading: true };
    case userActionType.LOGIN_SUCCESS: // type of action
      return {
        ...state,
        isLoggingInLoading:false, 

      };
    case userActionType.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};

export { loginReducer };
