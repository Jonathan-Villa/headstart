import { userActionType } from "../Actiontypes";

export const loginLoading = () => {
  return { type: userActionType.LOGIN_LOADING, isLoggingIn: true };
};

export const login = (user) => {
  return {
    type: userActionType.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginError = () => {
  return { type: userActionType.LOGIN_ERROR, isLoggingIn: false };
};
