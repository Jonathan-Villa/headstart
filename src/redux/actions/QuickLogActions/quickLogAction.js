import { userActionType } from "../Actiontypes";

export const quickLog = (log) => {
  return {
    type: userActionType.QUICK_LOG_POST,
    payload: log,
    isQuickLogLoading: false,
  };
};

export const quickLogLoading = () => {
  return {
    type: userActionType.QUICK_LOG_LOADING,
    isQuickLogLoading: true,
  };
};

export const quickLogFail = () => {
  return {
    type: userActionType.QUICK_LOG_POST_FAIL,
    isQuickLogLoading: false,
  };
};
