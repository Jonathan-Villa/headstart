import { userActionType } from "./Actiontypes/userActionTypes";

export const logout = () => {
  return {
    type: userActionType.LOGOUT
  }
}

