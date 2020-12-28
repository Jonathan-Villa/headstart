import { userActionType } from "../actions/Actiontypes";
const quickLogReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.QUICK_LOG_POST:
      return {
        ...state,
        isQuickLogLoading: false,
        payload: action.payload,
      };
    case userActionType.QUICK_LOG_LOADING:
      return {
        isQuickLogLoading: true
      };
    case userActionType.QUICK_LOG_POST_ERROR:
      return {
        isQuickLogLoading: false
      }
    default:
      return {};
  }
};

export { quickLogReducer };
