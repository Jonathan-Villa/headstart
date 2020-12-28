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

export const timeSheetError = () => {
  return {
    type:userActionType.TIME_SHEET_ERROR,
    isTimeSheetError: true,
  };
};
