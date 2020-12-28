import { userActionType } from "../Actiontypes";

export const adminTimeSheetLoading = () => {
  return {
    type: userActionType.ADMIN_TIMESHEET_LOADING,
    adminLogsIsLoading: true,
  };
};

export const adminTimeSheet = (payload) => {
  return {
    type: userActionType.ADMIN_TIMESHEET_SUCCESS,
    payload: payload,
  };
};

export const adminTimeSheetError = () => {
  return {
    type: userActionType.ADMIN_TIMESHEET_ERROR,
    adminLogsError: true,
  };
};
