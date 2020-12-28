import { userActionType } from "../Actiontypes";

export const userAuthLoading = () => {
  return {
    type: userActionType.GET_USER_LOADING,
    isUserLoading: true,
  };
};

export const userAuth = (payload) => {
  return {
    type: userActionType.GET_USER_SUCCESS,
    payload: payload,
  };
};

export const userAuthError = () => {
  return {
    type: userActionType.GET_USER_ERROR,
  };
};
