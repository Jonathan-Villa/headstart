import { userActionType } from "../Actiontypes";

export const getUserLoading = () => {
  return {
    type: userActionType.GET_USER_LOADING,
    isUserLoading: true,
  };
};

export const getUserSucess = (payload) => {
  return {
    type: userActionType.GET_USER_SUCCESS,
    payload: payload,
  };
};

export const getUserFailure = () => {
  return {
    type: userActionType.GET_USER_FAILURE,
  };
};
