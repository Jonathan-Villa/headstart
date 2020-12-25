import { userActionType } from "./actiontypes/userActionTypes";

export const logout = () => {
  return {
    type: userActionType.LOGOUT
  }
}

export const quickLog = (log)=> {
  return{
    type: userActionType.QUICK_LOG_POST,
    payload: log
  }
}