import { userActionType } from "../actions/Actiontypes";

export const adminTimeSheetReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.ADMIN_TIMESHEET_LOADING: {
      return {
        adminTimeSheetIsLoading: true,
      };
    }
    case userActionType.ADMIN_TIMESHEET_SUCCESS: {
      return {
        ...state,
        payload: action.payload,
      };
    }
    case userActionType.ADMIN_TIMESHEET_FAILURE: {
      return { adminTimeSheetFailure: true };
    }

    default: {
      return state;
    }
  }
};
