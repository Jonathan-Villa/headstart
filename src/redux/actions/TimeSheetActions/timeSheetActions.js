import { userActionType } from "../Actiontypes/";

export const timeSheetLoading = () => {
  return {
    type: userActionType.TIME_SHEET_LOADING,
    isTimeSheetLoading: true,
  };
};

export const timeSheet = (data) => {
  return {
    type: userActionType.TIME_SHEET_SUCCESS,
    payload: data,
  };
};

export const timeSheetFailure = () => {
  return {
    type:userActionType.TIME_SHEET_FAILURE,
    isTimeSheetLoading: false,
  };
};
