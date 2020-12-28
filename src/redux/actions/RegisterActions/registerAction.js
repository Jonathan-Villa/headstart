import { userActionType } from "../Actiontypes";
export const register = () => {
  return {
    type: userActionType.REGISTER_SUCCESS,
    registerSuccess: true,
  };
};

export const registerRequest = () => {
  return { type: userActionType.REGISTER_LOADING, registering: true };
};

export const registerError = ()=> {
    return { type: userActionType.REGISTER_ERROR, registering: false}
}