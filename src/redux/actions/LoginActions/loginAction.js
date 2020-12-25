import { userActionType } from "../Actiontypes";
export const login = (user) => {
  return {
    type: userActionType.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = ()=> {
    return { type: userActionType.LOGIN_FAILURE, isLoggingIn:false}
}

export const loginRequest = () => {
  return { type: userActionType.LOGIN_LOADING, isLoggingIn: true };
};
