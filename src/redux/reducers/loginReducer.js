import { userActionType } from "../actions/actiontypes";

let user = localStorage.getItem("jwt-token");

const initialState = user ? { isAuthenticated: true } : { isAuthenticated: false, user: {} };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
      return { isLoggingIn: true };
    case userActionType.LOGIN_SUCCESS: // type of action
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload,
        role: action.payload.role // users submitted payload
      };
    case userActionType.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
};

export { loginReducer };
