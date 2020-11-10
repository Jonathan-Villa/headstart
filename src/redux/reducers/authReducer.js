import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: // type of action
      return {
        ...state, 
        isAuthenticated: true,
        payload: action.payload, // users submitted payload
      };
    default:
      return state;
  }
};

export default authReducer;
