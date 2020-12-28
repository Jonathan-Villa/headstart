import { userActionType } from "../actions/Actiontypes";

export const adminTimeSheetReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.ADMIN_TIMESHEET_LOADING: {
      return {
        adminLogsIsLoading: true,
        payload: []
      };
    }
    case userActionType.ADMIN_TIMESHEET_SUCCESS: {
      return {
        ...state,
        payload: action.payload,
        adminLogsIsLoading: false
      };
    }
    case userActionType.ADMIN_TIMESHEET_ERROR: {
      return { adminLogsError: true };
    }

    default: {
      return state;
    }
  }
};
