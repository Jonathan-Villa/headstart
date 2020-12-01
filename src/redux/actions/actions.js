import { userActionType } from "./actiontypes/userActionTypes";

export const login = (user) => {
  return {
    type: userActionType.LOGIN_SUCCESS,
    payload: user,
  };
};

export const register = () => {
  return {
    type: userActionType.REGISTER_SUCCESS,
    registerSuccess: true,
  };
};

export const logout = () => {
  return {
    type: userActionType.LOGOUT
  }
}

