import { userActionType } from "../actions/Actiontypes";

export const timeSheetReducer = (state = {}, action) => {
  switch (action.type) {

    case userActionType.TIME_SHEET_SUCCESS: {
        return {
          ...state,
          payload: action.payload,
          isTimeSheetLoading: false,
        };
      }
    case userActionType.TIME_SHEET_LOADING: {
      return {
        isTimeSheetLoading: true,
      };
    }
   
    case userActionType.TIME_SHEET_FAILURE: {
      return { isTimeSheetLoading: false };
    }
    default: {
      return {};
    }
  }
};
