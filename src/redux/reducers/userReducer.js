import { userActionType } from "../actions/Actiontypes";

let user = localStorage.getItem("jwt-token");

const initialState = user
  ? { isAuthenticated: true }
  : { isAuthenticated: false, user: {} };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.GET_USER_LOADING: {
      return {
        isUserLoading: true,
        isAuthenticated: false,
      };
    }
    case userActionType.GET_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        payload: action.payload,
        id: action.payload.id,
        role: action.payload.role,
      };
    }
    case userActionType.GET_USER_FAILURE: {
      return {
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};
