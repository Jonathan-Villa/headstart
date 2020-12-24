import { userActionType } from "../actions/actiontypes";

export const getUser = (user) => {
  return {
    type: userActionType.GET_USER_SUCCESS,
    user: user,
  };
};

export const getUserFail = () => {
  return {
    type: userActionType.GET_USER_FAIL,
    payload: {},
  };
};
